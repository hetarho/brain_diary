import z from "zod";
import { publicProcedure, router } from "../trpc";
import Container from "typedi";
import EntryRepository from "@/server/repositories/entryRepository";

export const entryRouter = router({
  getEntriesByUserId: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      return Container.get(EntryRepository).findByUserId(input);
    }),
  createEntry: publicProcedure
    .input(z.object({ userId: z.string(), content: z.string() }))
    .mutation(async ({ input }) => {
      try {
        // 새 일기 생성 (ID와 createdAt은 자동 생성)
        const entry = await Container.get(EntryRepository).create({
          userId: input.userId,
          content: input.content,
        });
        return entry;
      } catch (error) {
        console.error("Entry creation error:", error);
        throw new Error("일기 생성 중 오류가 발생했습니다");
      }
    }), // 사용자별 일기 조회
  getEntriesByUser: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      const entries = await Container.get(EntryRepository).findByUserId(
        input.userId
      );
      return entries;
    }),

  // 일기 삭제 (연결된 엔그램과 시냅스도 함께 삭제됨)
  deleteEntry: publicProcedure
    .input(z.object({ entryId: z.string() }))
    .mutation(async ({ input }) => {
      // Prisma 스키마에서 onDelete: Cascade가 설정되어 있어서
      // Entry 삭제 시 연결된 Engram과 Synapse도 자동으로 삭제됨
      const deletedEntry = await Container.get(EntryRepository).delete(
        input.entryId
      );
      return deletedEntry;
    }), 
});
