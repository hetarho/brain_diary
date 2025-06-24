import z from "zod";
import { protectedProcedure, router } from "../trpc";
import Container from "typedi";
import EntryRepository from "@/server/repositories/entryRepository";
import { prisma } from "@/prisma/prisma";

export const entryRouter = router({
  // 현재 사용자의 일기 목록 조회 (보호된 프로시저)
  getEntriesByUserId: protectedProcedure
    .query(async ({ ctx }) => {
      const userId = ctx.session.user.id;
      return Container.get(EntryRepository).findByUserId(userId);
    }),

  // 일기 생성 (보호된 프로시저)
  createEntry: protectedProcedure
    .input(z.object({ content: z.string() }))
    .mutation(async ({ input, ctx }) => {
      try {
        const userId = ctx.session.user.id;
        // 새 일기 생성 (ID와 createdAt은 자동 생성)
        const entry = await Container.get(EntryRepository).create({
          userId: userId,
          content: input.content,
        });
        return entry;
      } catch (error) {
        console.error("Entry creation error:", error);
        throw new Error("일기 생성 중 오류가 발생했습니다");
      }
    }),

  // 사용자별 일기 조회 (보호된 프로시저) - getEntriesByUserId와 중복이므로 제거하거나 통합
  getEntriesByUser: protectedProcedure
    .query(async ({ ctx }) => {
      const userId = ctx.session.user.id;
      const entries = await Container.get(EntryRepository).findByUserId(userId);
      return entries;
    }),

  // 일기 삭제 (연결된 엔그램과 시냅스도 함께 삭제됨)
  deleteEntry: protectedProcedure
    .input(z.object({ entryId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.session.user.id;
      
      // 삭제하려는 일기가 현재 사용자의 것인지 확인
      const entry = await prisma.entry.findUnique({
        where: { id: input.entryId },
        select: { userId: true }
      });
      
      if (!entry) {
        throw new Error("일기를 찾을 수 없습니다");
      }
      if (entry.userId !== userId) {
        throw new Error("해당 일기를 삭제할 권한이 없습니다");
      }
      
      // Prisma 스키마에서 onDelete: Cascade가 설정되어 있어서
      // Entry 삭제 시 연결된 Engram과 Synapse도 자동으로 삭제됨
      const deletedEntry = await Container.get(EntryRepository).delete(
        input.entryId
      );
      return deletedEntry;
    }),
});
