import "reflect-metadata";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@server/trpc/root";
import { createTRPCContext } from "@server/trpc/trpc";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createTRPCContext,
  });

export { handler as GET, handler as POST };
