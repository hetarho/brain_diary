import { router } from './trpc'
import { engramRouter } from './routers/engram'

export const appRouter = router({
  engram: engramRouter
})

export type AppRouter = typeof appRouter 