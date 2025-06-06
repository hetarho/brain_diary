import { initTRPC } from '@trpc/server'

// tRPC 인스턴스 생성
const t = initTRPC.create()

// 기본 라우터와 프로시저 export
export const router = t.router
export const publicProcedure = t.procedure 