import { router } from "../trpc";
import { z } from "zod";
import { publicProcedure } from "../trpc";
import UserRepository from "@/server/repositories/userRepository";
import { Container } from "typedi";
import { uuidv4 } from "zod/v4";

export const userRouter = router({
  createUser: publicProcedure
    .input(
      z.object({
        email: z.string(),
        name: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      console.log("🔍 createTestUser 시작:", input);

      try {
        console.log("🔍 기존 사용자 검색 중:", input.email);

        // 이메일로 이미 존재하는지 확인
        const existingUser = await Container.get(UserRepository).findByEmail(
          input.email
        );

        if (existingUser) {
          console.log("✅ 기존 사용자 발견:", existingUser.id);
          return existingUser;
        }

        console.log("🆕 새 사용자 생성 중...");
        const newProviderId = uuidv4();

        console.log("📝 사용자 데이터:", {
          name: input.name,
          email: input.email,
          provider: "GOOGLE",
          providerId: newProviderId,
        });

        // 새 사용자 생성
        const user = await Container.get(UserRepository).create({
          name: input.name,
          email: input.email,
          provider: "GOOGLE",
          providerId: newProviderId.toString(),
        });

        console.log("✅ 사용자 생성 성공:", user.id);
        return user;
      } catch (error) {
        console.error("❌ User creation error:", error);
        console.error("🔍 Error details:", {
          message: error instanceof Error ? error.message : "Unknown error",
          stack: error instanceof Error ? error.stack : undefined,
          code:
            error && typeof error === "object" && "code" in error
              ? error.code
              : undefined,
          meta:
            error && typeof error === "object" && "meta" in error
              ? error.meta
              : undefined,
          name: error instanceof Error ? error.name : undefined,
        });

        // Prisma 특정 에러 처리
        if (error && typeof error === "object" && "code" in error) {
          const prismaError = error as { code: string; meta?: unknown };
          console.error("🔍 Prisma 에러 코드:", prismaError.code);

          switch (prismaError.code) {
            case "P1001":
              console.error(
                "❌ 데이터베이스 연결 실패 - 서버에 접근할 수 없습니다"
              );
              break;
            case "P1008":
              console.error("❌ 데이터베이스 연결 시간 초과");
              break;
            case "P1017":
              console.error("❌ 데이터베이스 서버가 닫혔습니다");
              break;
            case "P2002":
              console.error("❌ 고유 제약 조건 위반 (중복 데이터)");
              break;
            default:
              console.error("❌ 알 수 없는 Prisma 에러:", prismaError.code);
          }
        }

        throw new Error(
          `사용자 생성 중 오류가 발생했습니다: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
      }
    }),
});
