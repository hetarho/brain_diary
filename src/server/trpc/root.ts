import { router } from "./trpc";
import { engramRouter } from "./routers/engram";
import { userRouter } from "./routers/user";
import { entryRouter } from "@/src/server/trpc/routers/entry";

export const appRouter = router({
  engram: engramRouter,
  user: userRouter,
  entry: entryRouter,
});

export type AppRouter = typeof appRouter;
