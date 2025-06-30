import { router } from "../trpc";
import { z } from "zod";
import { protectedProcedure } from "../trpc";
import UserRepository from "@/src/server/repositories/userRepository";
import { Container } from "typedi";

export const userRouter = router({
  // 현재 로그인한 사용자 정보 조회 (보호된 프로시저)
  getCurrentUser: protectedProcedure.query(async ({ ctx }) => {
    try {
      const userId = ctx.session.user.id;
      console.log("🔍 getCurrentUser 시작:", userId);

      const user = await Container.get(UserRepository).findById(userId);

      if (!user) {
        throw new Error("사용자를 찾을 수 없습니다");
      }

      console.log("✅ 사용자 조회 성공:", user.id);
      return user;
    } catch (error) {
      console.error("❌ getCurrentUser 에러:", error);
      throw new Error(
        `사용자 조회 중 오류가 발생했습니다: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }),

  // 사용자 업데이트 (이름 등)
  updateUser: protectedProcedure
    .input(
      z.object({
        name: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const userId = ctx.session.user.id;
        console.log("🔄 updateUser 시작:", userId, input);

        const updatedUser = await Container.get(UserRepository).update(
          userId,
          input
        );

        console.log("✅ 사용자 업데이트 성공:", updatedUser.id);
        return updatedUser;
      } catch (error) {
        console.error("❌ updateUser 에러:", error);
        throw new Error(
          `사용자 업데이트 중 오류가 발생했습니다: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
      }
    }),
});
