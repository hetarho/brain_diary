import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { LlmEngine } from "../../lib/llmengine";
import { v4 as uuidv4 } from "uuid";
import RemoteDataSourceImpl from "../../datasource/remote/RemoteDataSource";
import { prisma } from "../../../prisma/prisma";

const dataSource = new RemoteDataSourceImpl(prisma);

// Zod 스키마 정의
const generateEngramsSchema = z.object({
  diaryContent: z.string().min(10),
  userId: z.string(),
  entryId: z.string(),
});

export const engramRouter = router({
  // 테스트 사용자 생성 (개발용)
  createTestUser: publicProcedure
    .input(
      z.object({
        name: z.string().default("테스트 사용자"),
        email: z.string().email(),
      })
    )
    .mutation(async ({ input }) => {
      console.log("🔍 createTestUser 시작:", input);

      try {
        console.log("📊 Prisma 연결 상태 확인 중...");

        // 데이터베이스 연결 테스트
        await prisma.$connect();
        console.log("✅ Prisma 연결 성공");

        console.log("🔍 기존 사용자 검색 중:", input.email);

        // 이메일로 이미 존재하는지 확인
        const existingUser = await dataSource.findUserByEmail(input.email);

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
        const user = await dataSource.createUser({
          name: input.name,
          email: input.email,
          provider: "GOOGLE",
          providerId: newProviderId,
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

  // 테스트 일기 생성 (개발용)
  createTestEntry: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        content: z.string(),
        createdAt: z.string().optional(), // 날짜 선택 옵션 추가
      })
    )
    .mutation(async ({ input }) => {
      try {
        // 새 일기 생성 (ID와 createdAt은 자동 생성)
        const entry = await dataSource.createEntry({
          content: input.content,
          userId: input.userId,
        });
        return entry;
      } catch (error) {
        console.error("Entry creation error:", error);
        throw new Error("일기 생성 중 오류가 발생했습니다");
      }
    }),

  // 엔그램 생성
  generate: publicProcedure
    .input(generateEngramsSchema)
    .mutation(async ({ input }) => {
      try {
        // LLM 엔진으로 엔그램 생성
        const llm = new LlmEngine(process.env.GEMINI_API_KEY!);

        const systemMessage = `당신은 뇌과학적 기억 모델러입니다. 사용자의 일기를 분석하여, 우리가 정의한 데이터베이스 스키마에 맞게 기억의 구성 요소로 정밀하게 분해하는 임무를 맡았습니다.

## 📝 3단계 분석 작업 지침

### 1단계: 문장 분류 및 엔그램 추출
- 먼저, 일기 내용을 '배경 정보'와 '오늘의 경험'으로 분류합니다. 배경 정보(평소의 생각, 일반적 사실 등)는 엔그램으로 만들지 않습니다.
- '오늘의 경험'에 해당하는 문장들만 대상으로, 하나의 독립된 경험, 생각, 감정, 또는 사건을 나타내는 단위로 분해하여 여러 개의 엔그램으로 만드세요.

### 2단계: 각 엔그램의 속성 채우기
- **\`content\`**: 기억의 핵심 내용 (예: "비 오는 창 밖을 봤다")
- **\`category\` (MemoryType)**: 11가지 뇌과학 기반 유형 중 가장 적합한 것 하나를 선택합니다.
  - **11가지 유형**: EPISODIC, SEMANTIC, PROCEDURAL, EMOTIONAL, SPATIAL, SOCIAL, PERCEPTUAL, ASSOCIATIVE, CONTEXTUAL, PREDICTABLE, UNPREDICTABLE
- **맥락 정보**:
  - **\`temporalMarker\`**: 시간적 맥락 (예: "오늘 저녁", "회의 직후")
  - **\`spatialMarker\`**: 공간적 맥락 (예: "내 방 책상 앞", "강남역 카페")
  - **\`emotionalTone\`**: 해당 기억의 전반적인 긍정/부정 톤 (-1.0 ~ 1.0)
- **\`emotionTags\` (다차원 감정)**: Plutchik의 감정 바퀴 이론에 따라 8가지 기본 감정(\`JOY\`, \`SADNESS\`, \`ANGER\`, \`FEAR\`, \`SURPRISE\`, \`DISGUST\`, \`TRUST\`, \`ANTICIPATION\`)을 1~3개 태그하고, 각 감정의 \`intensity\`(강도), \`valence\`(긍정/부정가), \`arousal\`(각성도)를 평가합니다.
- **중요도(\`importance\`) vs 기억 강도(\`currentStrength\`)**:
  - **\`importance\`**: 개인의 삶에 장기적으로 얼마나 중요한가? (가치 판단)
  - **\`currentStrength\`**: 기억이 형성될 때 얼마나 강렬하고 놀라웠는가? (생물학적 각인)

### 3단계: 종합 분석 및 링크 생성
- 이번 일기에서 생성된 엔그램들 사이의 관계(\`TEMPORAL\`, \`CAUSAL\`, \`SPATIAL\`, \`SEMANTIC\`, \`EMOTIONAL\`)를 파악하여 \`links\` 배열에 추가합니다.
- \`classification\` 객체에 분류된 문장들을 담고, \`analysis\` 객체에 전반적인 분석 결과를 요약합니다.

## 📤 출력 형식 (중요: 순수 JSON 객체만 반환)
{
  "classification": {
    "backgroundInfo": ["배경 정보로 분류된 문장들"],
    "todaysExperience": ["오늘의 경험으로 분류된 문장들"]
  },
  "engrams": [
    {
      "content": "추출된 기억 내용 요약",
      "category": "EPISODIC",
      "importance": 0.7,
      "currentStrength": 0.9,
      "temporalMarker": "오늘 저녁",
      "spatialMarker": "아버지의 단골 식당",
      "emotionalTone": 0.8,
      "emotionTags": [
        { "emotion": "JOY", "intensity": 0.9, "valence": 0.9, "arousal": 0.8 },
        { "emotion": "TRUST", "intensity": 0.6, "valence": 0.7, "arousal": 0.3 }
      ]
    }
  ],
  "links": [
    {
      "sourceIndex": 0,
      "targetIndex": 1,
      "linkType": "CAUSAL"
    }
  ],
  "analysis": {
    "backgroundSentences": 1,
    "experienceSentences": 4,
    "totalEngrams": 3,
    "dominantEmotion": "감동과 반성",
    "keyThemes": ["가족관계", "감정적 유대", "자기성찰"],
    "memoryStrength": "STRONG"
  }
}`;

        const response = await llm.promptWithSystem(
          `다음 일기를 분석하여 엔그램으로 분해해주세요:\n\n${input.diaryContent}`,
          systemMessage
        );

        if (!response.success || !response.content) {
          throw new Error("엔그램 생성에 실패했습니다");
        }

        const cleanJsonString = (str: string): string => {
          return str
            .replace(/```json\s*/g, "")
            .replace(/```\s*/g, "")
            .trim();
        };

        const cleanedContent = cleanJsonString(response.content);
        const result = JSON.parse(cleanedContent);

        const validMemoryTypes = [
          "EPISODIC",
          "SEMANTIC",
          "PROCEDURAL",
          "EMOTIONAL",
          "SPATIAL",
          "SOCIAL",
          "PERCEPTUAL",
          "ASSOCIATIVE",
          "CONTEXTUAL",
          "PREDICTABLE",
          "UNPREDICTABLE",
        ];

        const createdEngramsWithIds: { id: string }[] = [];

        // 데이터베이스 트랜잭션 시작
        await prisma.$transaction(async (tx) => {
          for (const engramData of result.engrams) {
            if (!validMemoryTypes.includes(engramData.category)) {
              console.error(
                `Invalid category: ${engramData.category}. Defaulting to ASSOCIATIVE.`
              );
              engramData.category = "ASSOCIATIVE";
            }

            const engram = await tx.engram.create({
              data: {
                content: engramData.content,
                category: engramData.category,
                importance: engramData.importance,
                currentStrength: engramData.currentStrength,
                temporalMarker: engramData.temporalMarker,
                spatialMarker: engramData.spatialMarker,
                emotionalTone: engramData.emotionalTone,
                entryId: input.entryId,
                userId: input.userId,
                emotionTags: {
                  create: engramData.emotionTags.map(
                    (tag: {
                      emotion: string;
                      intensity: number;
                      valence: number;
                      arousal: number;
                    }) => ({
                      emotion: tag.emotion,
                      intensity: tag.intensity,
                      valence: tag.valence,
                      arousal: tag.arousal,
                    })
                  ),
                },
              },
            });
            createdEngramsWithIds.push(engram);
          }

          if (result.links) {
            for (const linkData of result.links) {
              const sourceEngram = createdEngramsWithIds[linkData.sourceIndex];
              const targetEngram = createdEngramsWithIds[linkData.targetIndex];

              if (sourceEngram && targetEngram) {
                await tx.engramLink.create({
                  data: {
                    sourceId: sourceEngram.id,
                    targetId: targetEngram.id,
                    linkType: linkData.linkType as "TEMPORAL" | "CAUSAL" | "SEMANTIC" | "EMOTIONAL" | "SPATIAL",
                    timeGap: 0, // 임시값, 추후 계산 로직 추가 필요
                    overlapRatio: 0, // 임시값, 추후 계산 로직 추가 필요
                  }
                });
              }
            }
          }

          // TODO: 시냅스 생성 로직은 별도의 비동기 작업으로 분리하거나,
          // 이 트랜잭션 내에서 신규 엔그램과 기존 엔그램 간의 연결로 수정 필요.
          // 현재는 트랜잭션 범위 문제로 주석 처리.
        });

        return {
          success: true,
          engrams: createdEngramsWithIds,
          analysis: result.analysis,
          classification: result.classification,
        };
      } catch (error) {
        console.error("Engram generation error:", error);
        throw new Error("엔그램 생성 중 오류가 발생했습니다");
      }
    }),

  // 사용자별 엔그램 조회
  getByUser: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      const engrams = await dataSource.findEngramsByUser(input.userId);
      return engrams;
    }),

  // 일기별 엔그램 조회
  getByEntry: publicProcedure
    .input(z.object({ entryId: z.string() }))
    .query(async ({ input }) => {
      const engrams = await dataSource.findEngramsByEntry(input.entryId);
      return engrams;
    }),

  // 엔그램 재열람 (기억 강화)
  rehearse: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const engram = await dataSource.rehearseEngram(input.id);
      return engram;
    }),

  // 연결된 엔그램 조회 (시냅스 네트워크)
  getConnectedEngrams: publicProcedure
    .input(
      z.object({
        engramId: z.string(),
        minStrength: z.number().min(0).max(1).optional().default(0.3),
      })
    )
    .query(async ({ input }) => {
      // 해당 엔그램에서 나가는 시냅스들
      const outgoingSynapses = await dataSource.getOutgoingSynapses(
        input.engramId,
        input.minStrength
      );

      // 해당 엔그램으로 들어오는 시냅스들
      const incomingSynapses = await dataSource.getIncomingSynapses(
        input.engramId,
        input.minStrength
      );

      return {
        outgoing: outgoingSynapses.map((s) => ({
          synapse: s,
          engram: s.toEngram,
        })),
        incoming: incomingSynapses.map((s) => ({
          synapse: s,
          engram: s.fromEngram,
        })),
      };
    }),

  // 시냅스 강화 (엔그램 클릭 시 연결된 기억들도 함께 강화)
  strengthenSynapses: publicProcedure
    .input(z.object({ engramId: z.string() }))
    .mutation(async ({ input }) => {
      // 연결된 시냅스들의 강도만 증가 (재열람 증가는 제거)
      const result = await dataSource.strengthenSynapses(input.engramId);

      // This part of the original logic is difficult to replicate
      // because updateMany does not return the updated records.
      // We are returning the count of affected rows instead.
      return { strengthenedSynapses: result.count };
    }),

  // 엔그램 간 시냅스 생성 (유사도 기반)
  createSynapses: publicProcedure
    .input(
      z.object({
        engramId: z.string(),
        targetEngramIds: z.array(z.string()).optional(),
      })
    )
    .mutation(async ({ input }) => {
      const sourceEngram = await dataSource.findEngramById(input.engramId);

      if (!sourceEngram) {
        throw new Error("엔그램을 찾을 수 없습니다");
      }

      // 대상 엔그램들 (지정되지 않으면 같은 사용자의 모든 엔그램)
      const targetEngrams = await dataSource.findEngrams({
        userId: sourceEngram.userId,
        id: input.targetEngramIds
          ? { in: input.targetEngramIds }
          : { not: input.engramId },
      });

      const createdSynapses = [];

      for (const targetEngram of targetEngrams) {
        // 각 엔그램의 감정 태그 가져오기
        const sourceEmotionTags = await dataSource.getEmotionTagsByEngram(
          sourceEngram.id
        );
        const targetEmotionTags = await dataSource.getEmotionTagsByEngram(
          targetEngram.id
        );

        // 유사도 계산
        const similarity = calculateSimilarity(
          { ...sourceEngram, emotionTags: sourceEmotionTags },
          { ...targetEngram, emotionTags: targetEmotionTags }
        );

        if (similarity > 0.4) {
          // 임계값을 0.3에서 0.4로 상향
          // 기존 시냅스가 있는지 확인
          const existingSynapse = await dataSource.findUniqueSynapse(
            input.engramId,
            targetEngram.id
          );

          if (!existingSynapse) {
            const synapse = await dataSource.createSynapse({
              fromEngramId: input.engramId,
              toEngramId: targetEngram.id,
              strength: similarity,
              type: determineSynapseType(
                { ...sourceEngram, emotionTags: sourceEmotionTags },
                { ...targetEngram, emotionTags: targetEmotionTags }
              ),
            });
            createdSynapses.push(synapse);
          }
        }
      }

      return { createdSynapses: createdSynapses.length };
    }),

  // 사용자별 일기 조회
  getEntriesByUser: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      const entries = await dataSource.getEntriesByUser(input.userId);
      return entries;
    }),

  // 일기 삭제 (연결된 엔그램과 시냅스도 함께 삭제됨)
  deleteEntry: publicProcedure
    .input(z.object({ entryId: z.string() }))
    .mutation(async ({ input }) => {
      // Prisma 스키마에서 onDelete: Cascade가 설정되어 있어서
      // Entry 삭제 시 연결된 Engram과 Synapse도 자동으로 삭제됨
      const deletedEntry = await dataSource.deleteEntry(input.entryId);
      return deletedEntry;
    }),
});

// 유틸리티 함수들

// 카테고리별 희귀성 점수 (0.1 = 매우 일상적, 1.0 = 매우 희귀)
function getCategoryRarityScore(category: string): number {
  const rarityScores: Record<string, number> = {
    TRAVEL: 0.9, // 여행 - 매우 희귀
    HOBBY: 0.7, // 취미 - 희귀
    LEARNING: 0.6, // 학습/깨달음 - 보통
    EXPERIENCE: 0.5, // 경험 - 보통
    MENTAL: 0.5, // 생각/계획 - 보통
    PERSON: 0.4, // 사람 - 보통
    PLACE: 0.4, // 장소 - 보통
    FEELING: 0.3, // 감정 상태 - 일상적
    EMOTION: 0.3, // 감정 - 일상적
    RELATIONSHIP: 0.3, // 인간관계 - 일상적
    WORK: 0.2, // 업무 - 매우 일상적
    FOOD: 0.1, // 음식 - 매우 일상적
    HEALTH: 0.2, // 건강 - 일상적
    OTHER: 0.3, // 기타 - 보통
  };
  return rarityScores[category] || 0.3;
}

function calculateSimilarity(
  engram1: {
    emotionTags: { emotion: string; intensity: number; valence: number; arousal: number }[];
    category: string;
    createdAt: Date | string;
  },
  engram2: {
    emotionTags: { emotion: string; intensity: number; valence: number; arousal: number }[];
    category: string;
    createdAt: Date | string;
  }
): number {
  let similarity = 0;
  let totalWeight = 0;

  // 카테고리별 희귀성 점수 계산
  const rarity1 = getCategoryRarityScore(engram1.category);
  const rarity2 = getCategoryRarityScore(engram2.category);
  const avgRarity = (rarity1 + rarity2) / 2;

  // 동적 가중치 계산 (희귀성에 따라 조정)
  const emotionWeight = 0.5 + 0.1 * avgRarity; // 0.5~0.6 범위 (희귀할수록 감정 중요)
  const categoryWeight = 0.2 + 0.2 * avgRarity; // 0.2~0.4 범위 (희귀할수록 카테고리 중요)
  const timeWeight = 0.1; // 시간은 고정

  // 1. 감정 유사도 (동적 가중치)
  // 공통 감정 찾기
  const emotions1 = engram1.emotionTags.map(tag => tag.emotion);
  const emotions2 = engram2.emotionTags.map(tag => tag.emotion);
  const commonEmotions = emotions1.filter((e) => emotions2.includes(e));

  // 감정 강도의 평균 차이 계산
  let emotionSimilarity = 0;
  if (commonEmotions.length > 0) {
    // 공통 감정이 있으면 높은 점수
    emotionSimilarity =
      0.5 +
      (commonEmotions.length / Math.max(emotions1.length, emotions2.length)) *
        0.5;

    // 감정 강도(intensity)의 유사성도 고려
    const avgIntensity1 =
      engram1.emotionTags.reduce((sum, tag) => sum + tag.intensity, 0) /
        engram1.emotionTags.length || 0;
    const avgIntensity2 =
      engram2.emotionTags.reduce((sum, tag) => sum + tag.intensity, 0) /
        engram2.emotionTags.length || 0;
    const intensityDiff = Math.abs(avgIntensity1 - avgIntensity2);
    emotionSimilarity *= 1 - intensityDiff * 0.3; // 강도 차이가 크면 점수 감소
  } else if (engram1.emotionTags.length > 0 && engram2.emotionTags.length > 0) {
    // 공통 감정은 없지만 둘 다 감정이 있는 경우, valence 비교
    const avgValence1 =
      engram1.emotionTags.reduce((sum, tag) => sum + tag.valence, 0) /
      engram1.emotionTags.length;
    const avgValence2 =
      engram2.emotionTags.reduce((sum, tag) => sum + tag.valence, 0) /
      engram2.emotionTags.length;
    const valenceDiff = Math.abs(avgValence1 - avgValence2);
    emotionSimilarity = Math.max(0, 0.3 - valenceDiff * 0.15); // valence가 비슷하면 약간의 점수
  }

  similarity += emotionSimilarity * emotionWeight;
  totalWeight += emotionWeight;

  // 2. 카테고리 유사도 (동적 가중치 - 희귀할수록 중요)
  const categorySimilarity =
    engram1.category === engram2.category ? 0.6 + avgRarity * 0.4 : 0; // 희귀한 카테고리일수록 0.6~1.0 점수
  similarity += categorySimilarity * categoryWeight;
  totalWeight += categoryWeight;

  // 3. 시간적 근접성 (고정 가중치)
  const timeDiff = Math.abs(
    new Date(engram1.createdAt).getTime() -
      new Date(engram2.createdAt).getTime()
  );
  const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
  const timeSimilarity = Math.max(0, 1 - daysDiff / 7);
  similarity += timeSimilarity * timeWeight;
  totalWeight += timeWeight;

  const finalSimilarity = similarity / totalWeight;

  // 최종 조정: 0.7 이상의 높은 점수는 더 엄격하게
  if (finalSimilarity > 0.7) {
    return 0.7 + (finalSimilarity - 0.7) * 0.3;
  }

  return finalSimilarity;
}

function determineSynapseType(
  engram1: {
    emotionTags: {
      emotion: string;
      intensity: number;
      valence: number;
      arousal: number;
    }[];
    category: string;
    createdAt: Date | string;
  },
  engram2: {
    emotionTags: {
      emotion: string;
      intensity: number;
      valence: number;
      arousal: number;
    }[];
    category: string;
    createdAt: Date | string;
  }
): "SEMANTIC" | "EMOTIONAL" | "TEMPORAL" | "ASSOCIATIVE" {
  const rarity1 = getCategoryRarityScore(engram1.category);
  const rarity2 = getCategoryRarityScore(engram2.category);
  const avgRarity = (rarity1 + rarity2) / 2;

  // 같은 카테고리이고 희귀한 카테고리면 의미적 연결 우선
  if (engram1.category === engram2.category && avgRarity > 0.5) {
    return "SEMANTIC";
  }

  // 공통 감정이 있으면 감정적 연결
  const emotions1 = engram1.emotionTags.map((tag) => tag.emotion);
  const emotions2 = engram2.emotionTags.map((tag) => tag.emotion);
  const hasCommonEmotions = emotions1.some((e) => emotions2.includes(e));

  if (hasCommonEmotions) {
    return "EMOTIONAL";
  }

  // 시간이 가까우면 시간적 연결
  const timeDiff = Math.abs(
    new Date(engram1.createdAt).getTime() -
      new Date(engram2.createdAt).getTime()
  );
  const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
  if (daysDiff < 1) {
    return "TEMPORAL";
  }

  // 같은 카테고리이지만 일상적인 카테고리면 연상 연결
  if (engram1.category === engram2.category && avgRarity <= 0.5) {
    return "ASSOCIATIVE";
  }

  // 기본값은 연상 연결
  return "ASSOCIATIVE";
}
