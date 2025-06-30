import { initTRPC, TRPCError } from "@trpc/server";
import { auth } from "@/src/server/lib/auth/config";
import type { Session } from "next-auth";

// tRPC 컨텍스트 타입 정의
interface Context {
  session: Session | null;
}

// 컨텍스트 생성 함수
export const createTRPCContext = async (): Promise<Context> => {
  try {
    const session = await auth();
    return {
      session,
    };
  } catch (error) {
    console.error('Auth error:', error);
    return {
      session: null,
    };
  }
};

// tRPC 초기화
const t = initTRPC.context<Context>().create();

// 기본 라우터와 프로시저
export const router = t.router;
export const publicProcedure = t.procedure;

// 인증이 필요한 프로시저
export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      // 세션이 있음을 타입스크립트에 알림
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
}); 