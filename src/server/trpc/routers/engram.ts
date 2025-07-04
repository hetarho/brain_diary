import { z } from "zod";
import { router, publicProcedure, protectedProcedure } from "../trpc";
import { LlmEngine } from "../../lib/llmengine";
import Container from "typedi";
import EngramRepository from "@/src/server/repositories/engramRepository";
import SynapseRepository from "@/src/server/repositories/synapesRepository";
import { prisma } from "@/prisma/prisma";

// Zod 스키마 정의 - userId 제거 (컨텍스트에서 가져옴)
const generateEngramsSchema = z.object({
  diaryContent: z.string().min(10),
  entryId: z.string(),
});

export const engramRouter = router({
  generate: protectedProcedure // publicProcedure → protectedProcedure 변경
    .input(generateEngramsSchema)
    .mutation(async ({ input, ctx }) => {
      // ctx 추가
      try {
        // 🔒 안전: 세션에서 userId 가져옴
        const userId = ctx.session.user.id;

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

        // 데이터 검증 및 전처리
        const validatedEngrams = result.engrams.map((engramData: {
          content: string;
          category: string;
          importance: number;
          currentStrength: number;
          temporalMarker?: string;
          spatialMarker?: string;
          emotionalTone?: number;
          emotionTags: Array<{
            emotion: string;
            intensity: number;
            valence: number;
            arousal: number;
          }>;
        }) => {
          if (!validMemoryTypes.includes(engramData.category)) {
            console.error(
              `Invalid category: ${engramData.category}. Defaulting to ASSOCIATIVE.`
            );
            engramData.category = "ASSOCIATIVE";
          }
          return engramData;
        });

        // 데이터베이스 트랜잭션 시작 - 배치 처리로 최적화
        await prisma.$transaction(async (tx) => {
          // 1. 모든 엔그램을 배치로 생성
          for (const engramData of validatedEngrams) {
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
                userId: userId,
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

          // 2. 링크 생성 (필요한 경우에만)
          if (result.links && result.links.length > 0) {
            const linkData = result.links
              .map((link: {
                sourceIndex: number;
                targetIndex: number;
                linkType: string;
              }) => {
                const sourceEngram = createdEngramsWithIds[link.sourceIndex];
                const targetEngram = createdEngramsWithIds[link.targetIndex];
                
                if (sourceEngram && targetEngram) {
                  return {
                    sourceId: sourceEngram.id,
                    targetId: targetEngram.id,
                    linkType: link.linkType as
                      | "TEMPORAL"
                      | "CAUSAL"
                      | "SEMANTIC"
                      | "EMOTIONAL"
                      | "SPATIAL",
                    timeGap: 0,
                    overlapRatio: 0,
                  };
                }
                return null;
              })
              .filter(Boolean);

            // 배치로 링크 생성
            if (linkData.length > 0) {
              await tx.engramLink.createMany({
                data: linkData,
                skipDuplicates: true,
              });
            }
          }
        }, {
          timeout: 30000, // 30초로 타임아웃 증가
        });

        return {
          success: true,
          engrams: createdEngramsWithIds,
          analysis: result.analysis,
          classification: result.classification,
        };
      } catch (error) {
        console.error("Engram generation error:", error);
        throw new Error(error instanceof Error ? error.message : "Unknown error");
      }
    }),

  // 사용자별 엔그램 조회 (보호된 프로시저)
  getByUser: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;
    const engrams = await Container.get(EngramRepository).findByUserId(userId);
    return engrams;
  }),

  // 일기별 엔그램 조회
  getByEntry: publicProcedure
    .input(z.object({ entryId: z.string() }))
    .query(async ({ input }) => {
      const engrams = await Container.get(EngramRepository).findByEntryId(
        input.entryId
      );
      return engrams;
    }),

  // 엔그램 재열람 (기억 강화)
  rehearse: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const engram = await Container.get(EngramRepository).rehearse(input.id);
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
      const outgoingSynapses = await Container.get(
        SynapseRepository
      ).findByToEngramId(input.engramId, input.minStrength);

      // 해당 엔그램으로 들어오는 시냅스들
      const incomingSynapses = await Container.get(
        SynapseRepository
      ).findByFromEngramId(input.engramId, input.minStrength);

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
      //TODO
      void input;
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
      //TODO
      void input;
    }),
});
