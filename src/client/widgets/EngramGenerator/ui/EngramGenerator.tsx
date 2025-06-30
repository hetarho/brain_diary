"use client";

import { useState } from "react";
import { trpc } from "@server/trpc/client";
import { useAuth } from "@client/shared";
import EngramCard from "./EngramCard";
import ConnectedEngramCard from "./ConnectedEngramCard";
import EntryCard from "./EntryCard";

export default function EngramGenerator() {
  const [diaryContent, setDiaryContent] = useState("");
  const [selectedEngramId, setSelectedEngramId] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState(() => {
    // 기본값을 오늘 날짜로 설정
    const today = new Date();
    return today.toISOString().split("T")[0]; // YYYY-MM-DD 형식
  });

  // Auth 사용
  const { user: currentUser, isLoading: userLoading } = useAuth();

  // tRPC 훅 사용 - userId 제거 (protectedProcedure로 변경됨)
  const generateEngrams = trpc.engram.generate.useMutation();
  const createEntry = trpc.entry.createEntry.useMutation();
  const deleteEntry = trpc.entry.deleteEntry.useMutation();
  const { data: userEngrams, refetch } = trpc.engram.getByUser.useQuery(
    undefined, // userId 제거
    { enabled: !!currentUser?.id }
  );
  const { data: userEntries, refetch: refetchEntries } =
    trpc.entry.getEntriesByUser.useQuery(
      undefined, // userId 제거
      { enabled: !!currentUser?.id }
    );
  const { data: connectedEngrams } = trpc.engram.getConnectedEngrams.useQuery(
    { engramId: selectedEngramId || "", minStrength: 0.5 },
    { enabled: !!selectedEngramId }
  );

  const handleGenerate = async () => {
    if (!diaryContent.trim() || !currentUser) return;

    try {
      // 1. 테스트 일기 생성 (userId 제거 - 서버에서 세션으로 확인)
      const entry = await createEntry.mutateAsync({
        content: diaryContent,
      });

      // 2. 엔그램 생성 (userId 제거 - 서버에서 세션으로 확인)
      const result = await generateEngrams.mutateAsync({
        diaryContent,
        entryId: entry.id,
      });

      console.log("생성된 엔그램:", result);

      // 분류 결과 표시
      if (result.analysis) {
        console.log("분석 결과:", result.analysis);
      }

      setDiaryContent("");
      refetch(); // 엔그램 목록 새로고침
      refetchEntries(); // 일기 목록 새로고침
    } catch (error) {
      console.error("엔그램 생성 실패:", error);
    }
  };

  // 로딩 중일 때 표시
  if (userLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">사용자 정보를 불러오는 중...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">🧠 엔그램 생성기</h2>

      {/* 사용자 정보 표시 */}
      {currentUser && (
        <div className="mb-4 p-3 rounded-lg border bg-secondary">
          <p className="text-sm text-secondary-foreground">
            👤 로그인됨: {currentUser.name} ({currentUser.email})
          </p>
        </div>
      )}

      {/* 일기 입력 */}
      <div className="mb-6">
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">
              일기 내용을 입력하세요
            </label>
          </div>
          <div className="w-48">
            <label className="block text-sm font-medium mb-2">
              📅 일기 날짜
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-2 border rounded-lg text-sm border-input bg-background text-primary"
              max={new Date().toISOString().split("T")[0]} // 오늘 이후 날짜는 선택 불가
            />
          </div>
        </div>
        <textarea
          value={diaryContent}
          onChange={(e) => setDiaryContent(e.target.value)}
          className="w-full h-32 p-3 border rounded-lg resize-none border-input bg-background text-primary"
          placeholder="어떤 일이 있었나요?"
        />
      </div>

      {/* 생성 버튼 */}
      <button
        onClick={handleGenerate}
        disabled={
          generateEngrams.isPending || !diaryContent.trim() || !currentUser
        }
        className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 disabled:opacity-50"
      >
        {generateEngrams.isPending
          ? "엔그램 생성 중..."
          : !currentUser
          ? "사용자 로딩 중..."
          : "엔그램 생성"}
      </button>

      {/* 에러 표시 */}
      {generateEngrams.error && (
        <div className="mt-4 p-3 bg-destructive/10 text-destructive rounded-lg">
          {generateEngrams.error.message}
        </div>
      )}

      {/* 생성된 일기들 */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-primary">
          📝 생성된 일기들
        </h3>

        {userEntries && userEntries.length > 0 ? (
          <div className="grid gap-4 mb-8">
            {userEntries.map((entry) => (
              <EntryCard
                key={entry.id}
                entry={entry}
                onDelete={async (entryId) => {
                  try {
                    await deleteEntry.mutateAsync({ entryId });
                    refetchEntries(); // 일기 목록 새로고침
                    refetch(); // 엔그램 목록도 새로고침
                  } catch (error) {
                    console.error("일기 삭제 실패:", error);
                  }
                }}
              />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground mb-8">
            아직 작성된 일기가 없습니다.
          </p>
        )}
      </div>

      {/* 엔그램 목록 */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-primary">
          🧠 생성된 엔그램들
        </h3>

        {/* 최근 분석 결과 표시 */}
        {generateEngrams.data?.analysis && (
          <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary">
            <h4 className="font-semibold mb-2 text-primary">📊 분석 결과</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">배경 정보:</span>
                <span className="ml-1 font-medium text-primary">
                  {generateEngrams.data.analysis.backgroundSentences}개
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">오늘의 경험:</span>
                <span className="ml-1 font-medium text-primary">
                  {generateEngrams.data.analysis.experienceSentences}개
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">생성된 엔그램:</span>
                <span className="ml-1 font-medium text-primary">
                  {generateEngrams.data.analysis.totalEngrams}개
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">기억 강도:</span>
                <span className="ml-1 font-medium text-primary">
                  {generateEngrams.data.analysis.memoryStrength}
                </span>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-muted-foreground">주요 감정:</span>
              <span className="ml-1 font-medium text-primary">
                {generateEngrams.data.analysis.dominantEmotion}
              </span>
            </div>
            <div className="mt-1">
              <span className="text-muted-foreground">주요 테마:</span>
              <span className="ml-1 text-primary">
                {generateEngrams.data.analysis.keyThemes?.join(", ")}
              </span>
            </div>
          </div>
        )}

        {/* 분류 정보 표시 */}
        {generateEngrams.data?.classification && (
          <div className="mb-6 p-4 bg-muted rounded-lg border border-muted-foreground/30">
            <h4 className="font-semibold mb-3 text-primary">
              🔍 문장 분류 결과
            </h4>

            {generateEngrams.data.classification.backgroundInfo?.length > 0 && (
              <div className="mb-3">
                <h5 className="text-sm font-medium text-muted-foreground mb-1">
                  📋 배경 정보 (저장되지 않음)
                </h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {generateEngrams.data.classification.backgroundInfo.map(
                    (info: string, index: number) => (
                      <li key={index} className="pl-2 border-l-2 border-muted">
                        {info}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}

            {generateEngrams.data.classification.todaysExperience?.length >
              0 && (
              <div>
                <h5 className="text-sm font-medium text-accent mb-1">
                  ⭐ 오늘의 경험 (엔그램으로 저장됨)
                </h5>
                <ul className="text-sm text-accent-foreground space-y-1">
                  {generateEngrams.data.classification.todaysExperience.map(
                    (exp: string, index: number) => (
                      <li key={index} className="pl-2 border-l-2 border-accent">
                        {exp}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        )}

        {userEngrams && userEngrams.length > 0 ? (
          <div className="grid gap-4">
            {userEngrams.map((engram) => (
              <div key={engram.id}>
                <EngramCard
                  engram={engram}
                  onEngramClick={setSelectedEngramId}
                  isSelected={selectedEngramId === engram.id}
                />

                {/* 선택된 엔그램 아래에 연결된 엔그램들 표시 */}
                {selectedEngramId === engram.id && connectedEngrams && (
                  <div className="mt-4 ml-6 p-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg border-l-4 border-purple-600">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-purple-300">
                        🧠 연결된 기억들 (연상률 50% 이상)
                      </h4>
                      <button
                        onClick={() => setSelectedEngramId(null)}
                        className="text-purple-400 hover:text-purple-300 text-sm"
                      >
                        ✕
                      </button>
                    </div>

                    {connectedEngrams.outgoing.length > 0 ||
                    connectedEngrams.incoming.length > 0 ? (
                      <div className="space-y-4">
                        {connectedEngrams.outgoing.length > 0 && (
                          <div>
                            <h5 className="text-xs font-medium text-purple-200 mb-2">
                              → 연상되는 기억들 (
                              {connectedEngrams.outgoing.length}개)
                            </h5>
                            <div className="grid gap-2">
                              {connectedEngrams.outgoing.map(
                                ({ synapse, engram }) => (
                                  <ConnectedEngramCard
                                    key={engram.id}
                                    engram={engram}
                                    synapse={synapse}
                                    onEngramClick={setSelectedEngramId}
                                  />
                                )
                              )}
                            </div>
                          </div>
                        )}

                        {connectedEngrams.incoming.length > 0 && (
                          <div>
                            <h5 className="text-xs font-medium text-purple-200 mb-2">
                              ← 이 기억을 떠올리게 하는 기억들 (
                              {connectedEngrams.incoming.length}개)
                            </h5>
                            <div className="grid gap-2">
                              {connectedEngrams.incoming.map(
                                ({ synapse, engram }) => (
                                  <ConnectedEngramCard
                                    key={engram.id}
                                    engram={engram}
                                    synapse={synapse}
                                    onEngramClick={setSelectedEngramId}
                                  />
                                )
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="text-text-primary text-center py-2 text-sm">
                        연상률 50% 이상의 연결된 기억이 없습니다.
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            아직 생성된 엔그램이 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}
