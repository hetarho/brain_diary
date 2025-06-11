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

        const systemMessage = `당신은 뇌과학 전문가이자 기억 분석 AI입니다. 사용자의 일기를 분석하여 뇌과학 이론에 기반한 엔그램(기억의 최소 단위)으로 분해해주세요.

## ⚠️ 중요도 평가 주의사항
**대부분의 일상 경험은 0.0-0.3 범위에 있어야 합니다.**
중요도 점수를 매우 보수적으로 평가하세요. 0.7 이상은 정말 특별한 경우에만 부여하고, 0.9-1.0은 인생의 전환점 수준에서만 사용하세요.

## 🧠 2단계 분석 프로세스

### 1단계: 문장 분류
먼저 일기 내용을 다음 기준으로 분류하세요:

#### 📋 배경 정보 (엔그램으로 저장하지 않음)
다음과 같은 표현이 포함된 문장들은 배경 정보로 분류하고 엔그램으로 저장하지 마세요:

**시간적 일반화:**
- "평소에", "항상", "보통", "대개", "늘", "자주", "가끔"
- "원래", "예전부터", "전부터", "어릴 때부터"

**습관적 상태:**
- "~하곤 했다", "~하는 편이다", "~한 성격이다"
- "별로 좋아하지 않는다", "관심이 없다", "~를 싫어한다"

**일반적 선호나 성향:**
- 과거의 지속적인 상태나 감정
- 개인의 일반적인 특성이나 취향

#### ⭐ 오늘의 경험 (엔그램으로 저장)
다음과 같은 표현이 포함된 문장들만 엔그램으로 변환하세요:

**구체적 시점:**
- "오늘", "이번에", "방금", "아까", "막상", "갑자기"
- "처음으로", "새롭게", "이제야"

**구체적 사건이나 행동:**
- 실제로 일어난 일, 만난 사람, 간 장소
- 새로운 감정이나 깨달음
- 오늘 경험한 변화나 사건

**감정 변화:**
- 구체적인 상황에서 느낀 감정
- 예상과 다른 감정 반응

### 2단계: 엔그램 생성
오늘의 경험으로 분류된 내용만을 대상으로 엔그램을 생성하세요.
배경 정보는 맥락 이해를 위해서만 참고하고, 절대 엔그램으로 저장하지 마세요.

## 분석 기준:

### 1. 엔그램 추출 원칙
- 하나의 엔그램은 하나의 구체적인 오늘의 기억 요소를 담아야 합니다
- 감정, 사건, 사람, 장소, 학습 등으로 분류 가능해야 합니다
- 너무 세분화하지 말고, 의미 있는 단위로 묶어주세요
- 배경 정보는 절대 엔그램으로 만들지 마세요

### 2. 분류 카테고리 (MemoryType)
- EXPERIENCE: 구체적인 경험이나 사건
- EMOTION: 감정 상태나 느낌
- PERSON: 사람과의 관계나 상호작용
- PLACE: 장소나 공간에 대한 기억
- LEARNING: 깨달음, 배움, 성찰
- WORK: 업무 관련 활동
- RELATIONSHIP: 인간관계의 변화나 상태
- HOBBY: 취미, 여가 활동
- HEALTH: 건강, 몸 상태
- FOOD: 음식, 식사 경험
- TRAVEL: 여행, 이동
- OTHER: 기타

### 3. 감정 점수 (-1.0 ~ +1.0)
- -1.0: 매우 부정적 (슬픔, 분노, 절망)
- -0.5: 부정적 (불편함, 스트레스)
- 0.0: 중립적
- +0.5: 긍정적 (기쁨, 만족)
- +1.0: 매우 긍정적 (행복, 감동, 환희)

### 4. 중요도 (0.0 ~ 1.0) - 주관적 의미
- 개인에게 얼마나 의미 있는 사건인가? **현실적으로 평가하세요**
- 0.0-0.2: 일상적, 반복적인 내용 (매일 하는 루틴)
- 0.3-0.4: 약간의 개인적 의미가 있는 내용
- 0.5-0.6: 보통 수준의 개인적 의미 (기억할 만한 경험)
- 0.7-0.8: 개인적으로 중요한 사건이나 깨달음 (특별한 경험)
- 0.9: 매우 중요한 인생 사건 (1년에 몇 번 없는 일)
- 1.0: 인생을 바꿀 만한 중대한 사건 (평생 몇 번 없는 일)

**⚠️ 특별한 이벤트 인식 기준:**
다음과 같은 요소가 포함되면 중요도를 높게 평가하세요:
- **개인 이름 포함**: 친구, 가족 이름이 나오면 +0.2~0.3 보정
- **특별한 이벤트**: 졸업, 공연, 생일, 결혼식, 여행 등 → 최소 0.5 이상
- **처음 경험**: "처음으로", "새롭게" 등 → +0.2 보정
- **감정적 순간**: 눈물, 감동, 깊은 대화 등 → +0.2~0.3 보정
- **일회성 이벤트**: 반복되지 않는 특별한 순간 → +0.2 보정

**중요도 평가 원칙:**
- 일상적인 식사, 업무, 이동 등은 0.0-0.2
- 평범한 감정 변화나 생각은 0.2-0.4
- 개인 이름이 포함된 만남이나 특별한 이벤트는 0.5 이상
- 졸업공연, 생일파티, 여행 등은 0.6-0.8
- 0.9 이상은 인생의 전환점 수준에만 부여

### 5. CREB 점수 (0.0 ~ 1.0) - 생물학적 기억 강도
- 뇌에서 실제로 얼마나 강하게 기억될 가능성이 있는가?
- 감정적 강도, 새로움, 놀라움, 스트레스 수준을 종합 고려
- 0.0-0.3: 감정적 자극 없음, 일상적
- 0.4-0.6: 보통 수준의 감정적 반응
- 0.7-0.9: 강한 감정적 충격이나 새로운 경험
- 1.0: 트라우마급 강렬한 경험, 뇌에 깊이 각인될 수준

**⚠️ CREB 점수 보정 기준:**
- **특별한 이벤트** (졸업, 공연, 여행): +0.2~0.3 보정
- **개인 이름 포함** (감정적 연결): +0.1~0.2 보정
- **처음 경험** (새로움): +0.2~0.3 보정
- **강한 감정** (눈물, 감동, 충격): +0.3~0.4 보정
- **예상치 못한 상황**: +0.2 보정

### 6. 키워드 추출
- 각 엔그램당 2-5개의 핵심 키워드
- 검색과 연결에 활용될 수 있는 단어들

## 중요도 평가 세부 가이드라인:

### 0.0-0.2 (일상적 경험) - 대부분의 엔그램이 여기에 해당
- 평범한 식사, 출퇴근, 일상 업무
- 일반적인 감정 변화 (약간 피곤함, 배고픔 등)
- 반복적인 활동 (TV 시청, SNS 확인 등)
- 예시: "점심으로 김치찌개를 먹었다", "지하철이 지연되어 짜증났다"

### 0.3-0.4 (약간 의미 있는 경험)
- 평소와 다른 작은 변화
- 가벼운 대화나 만남
- 새로운 것을 시도했지만 큰 임팩트는 없음
- 예시: "새로운 카페에서 커피를 마셨다", "동료와 점심 약속을 잡았다"

### 0.5-0.6 (기억할 만한 경험)
- 특별한 만남이나 대화
- 의미 있는 성취나 실패
- 감정적으로 움직이는 경험
- 개인 이름이 포함된 특별한 순간
- 예시: "오랜 친구와 깊은 대화를 나눴다", "예진이 졸업공연을 보러 갔다", "프로젝트를 성공적으로 마쳤다"

### 0.7-0.8 (중요한 경험) - 매우 신중하게 부여
- 인생에 영향을 주는 깨달음
- 중요한 관계의 변화
- 큰 도전이나 성취
- 예시: "부모님과 화해했다", "새로운 직장에 합격했다"

### 0.9-1.0 (인생 사건) - 극히 드물게 부여
- 결혼, 출산, 사별 등 인생의 전환점
- 트라우마나 극도의 감동
- 인생관을 바꾸는 경험
- 예시: "프로포즈를 받았다", "가족이 세상을 떠났다"

## 출력 형식:

**중요: 마크다운 코드 블록을 사용하지 말고, 순수 JSON만 반환해주세요.**

다음 JSON 형식으로 응답해주세요:

{
  "classification": {
    "backgroundInfo": ["배경 정보로 분류된 문장들"],
    "todaysExperience": ["오늘의 경험으로 분류된 문장들"]
  },
  "engrams": [
    {
      "content": "추출된 기억 내용 (한 문장으로 요약)",
      "category": "EXPERIENCE|EMOTION|PERSON|PLACE|LEARNING|WORK|RELATIONSHIP|HOBBY|HEALTH|FOOD|TRAVEL|OTHER",
      "emotionScore": -1.0~1.0,
      "importance": 0.0~1.0,
      "crebScore": 0.0~1.0,
      "keywords": ["키워드1", "키워드2", "키워드3"]
    }
  ],
  "analysis": {
    "filteredSentences": 배경정보로_필터링된_문장_수,
    "backgroundSentences": 배경정보_문장_수,
    "experienceSentences": 오늘의경험_문장_수,
    "totalEngrams": 생성된_엔그램_수,
    "dominantEmotion": "전체적인 감정 톤",
    "keyThemes": ["주요 테마1", "주요 테마2"],
    "memoryStrength": "WEAK|MODERATE|STRONG"
  }
}

**예시:**
입력: "평소에는 회사 일이 너무 바빠서 가족과 시간을 보내지 못했다. 항상 미안한 마음이 있었는데 오늘 아버지가 갑자기 전화를 하셔서 같이 저녁을 먹자고 하셨다. 오랜만에 아버지와 단둘이 식사를 하면서 많은 이야기를 나눴다. 아버지가 나를 자랑스러워한다고 말씀하시는데 갑자기 눈물이 났다. 그동안 바쁘다는 핑계로 소홀했던 것 같아서 죄송했다. 앞으로는 더 자주 연락드려야겠다고 다짐했다."

출력:
{
  "classification": {
    "backgroundInfo": [
      "평소에는 회사 일이 너무 바빠서 가족과 시간을 보내지 못했다",
      "항상 미안한 마음이 있었는데"
    ],
    "todaysExperience": [
      "오늘 아버지가 갑자기 전화를 하셔서 같이 저녁을 먹자고 하셨다",
      "오랜만에 아버지와 단둘이 식사를 하면서 많은 이야기를 나눴다",
      "아버지가 나를 자랑스러워한다고 말씀하시는데 갑자기 눈물이 났다",
      "그동안 바쁘다는 핑계로 소홀했던 것 같아서 죄송했다",
      "앞으로는 더 자주 연락드려야겠다고 다짐했다"
    ]
  },
  "engrams": [
    {
      "content": "아버지와 오랜만에 단둘이 저녁 식사를 했다",
      "category": "EXPERIENCE",
      "emotionScore": 0.7,
      "importance": 0.5,
      "crebScore": 0.6,
      "keywords": ["아버지", "저녁식사", "단둘이", "오랜만"]
    },
    {
      "content": "아버지가 나를 자랑스러워한다고 말씀하시며 감동받아 눈물을 흘렸다",
      "category": "EMOTION",
      "emotionScore": 0.9,
      "importance": 0.8,
      "crebScore": 0.9,
      "keywords": ["자랑스럽다", "감동", "눈물", "아버지"]
    },
    {
      "content": "가족에게 소홀했던 것에 대해 죄책감을 느꼈다",
      "category": "EMOTION",
      "emotionScore": -0.4,
      "importance": 0.4,
      "crebScore": 0.5,
      "keywords": ["죄책감", "소홀", "가족", "반성"]
    },
    {
      "content": "앞으로 가족과 더 자주 연락하겠다고 다짐했다",
      "category": "LEARNING",
      "emotionScore": 0.3,
      "importance": 0.3,
      "crebScore": 0.4,
      "keywords": ["다짐", "연락", "가족", "변화"]
    }
  ],
  "analysis": {
    "filteredSentences": 2,
    "backgroundSentences": 2,
    "experienceSentences": 5,
    "totalEngrams": 4,
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

        // 마크다운 코드 블록 제거 함수
        const cleanJsonString = (str: string): string => {
          // ```json과 ``` 제거
          return str
            .replace(/```json\s*/g, "")
            .replace(/```\s*/g, "")
            .trim();
        };

        // JSON 파싱
        const cleanedContent = cleanJsonString(response.content);
        console.log("Cleaned content:", cleanedContent); // 디버깅용
        const result = JSON.parse(cleanedContent);

        // 데이터베이스에 저장
        const savedEngrams = [];
        for (const engramData of result.engrams) {
          const engram = await dataSource.createEngram({
            content: engramData.content,
            category: engramData.category,
            emotionScore: engramData.emotionScore,
            importance: engramData.importance,
            crebScore: engramData.crebScore,
            keywords: engramData.keywords,
            entryId: input.entryId,
            userId: input.userId,
          });
          savedEngrams.push(engram);
        }

        // 새로 생성된 엔그램들 간의 시냅스 생성
        for (const engram of savedEngrams) {
          // 기존 엔그램들과의 시냅스 생성
          const existingEngrams = await dataSource.findEngrams({
            userId: input.userId,
            id: { not: engram.id },
          });

          for (const existingEngram of existingEngrams) {
            const similarity = calculateSimilarity(engram, existingEngram);

            if (similarity > 0.4) {
              // 임계값을 0.3에서 0.4로 상향
              // 양방향 시냅스 생성
              await dataSource.createManySynapses({
                synapses: [
                  {
                    fromEngramId: engram.id,
                    toEngramId: existingEngram.id,
                    strength: similarity,
                    type: determineSynapseType(engram, existingEngram),
                  },
                  {
                    fromEngramId: existingEngram.id,
                    toEngramId: engram.id,
                    strength: similarity,
                    type: determineSynapseType(existingEngram, engram),
                  },
                ],
                skipDuplicates: true,
              });
            }
          }
        }

        return {
          success: true,
          engrams: savedEngrams,
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
        // 유사도 계산
        const similarity = calculateSimilarity(sourceEngram, targetEngram);

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
              type: determineSynapseType(sourceEngram, targetEngram),
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
    PERSON: 0.4, // 사람 - 보통
    PLACE: 0.4, // 장소 - 보통
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
    keywords: string[];
    emotionScore: number;
    category: string;
    createdAt: Date | string;
  },
  engram2: {
    keywords: string[];
    emotionScore: number;
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
  const keywordWeight = 0.4 + 0.3 * (1 - avgRarity); // 0.4~0.7 범위 (일상적일수록 키워드 중요)
  const emotionWeight = 0.2 + 0.1 * avgRarity; // 0.2~0.3 범위 (희귀할수록 감정 중요)
  const categoryWeight = 0.1 + 0.2 * avgRarity; // 0.1~0.3 범위 (희귀할수록 카테고리 중요)
  const timeWeight = 0.1; // 시간은 고정

  // 1. 키워드 유사도 (동적 가중치)
  const commonKeywords = engram1.keywords.filter((k: string) =>
    engram2.keywords.includes(k)
  ).length;

  const minKeywords = Math.min(
    engram1.keywords.length,
    engram2.keywords.length
  );
  const keywordSimilarity = minKeywords > 0 ? commonKeywords / minKeywords : 0;

  // 공통 키워드가 2개 이상일 때만 높은 점수
  const keywordBonus = commonKeywords >= 2 ? 1.0 : 0.5;
  const adjustedKeywordSimilarity = keywordSimilarity * keywordBonus;

  similarity += adjustedKeywordSimilarity * keywordWeight;
  totalWeight += keywordWeight;

  // 2. 감정 유사도 (동적 가중치)
  const emotionDiff = Math.abs(engram1.emotionScore - engram2.emotionScore);
  const emotionSimilarity = emotionDiff < 0.5 ? 1 - emotionDiff : 0.2;
  similarity += emotionSimilarity * emotionWeight;
  totalWeight += emotionWeight;

  // 3. 카테고리 유사도 (동적 가중치 - 희귀할수록 중요)
  const categorySimilarity =
    engram1.category === engram2.category ? 0.6 + avgRarity * 0.4 : 0; // 희귀한 카테고리일수록 0.6~1.0 점수
  similarity += categorySimilarity * categoryWeight;
  totalWeight += categoryWeight;

  // 4. 시간적 근접성 (고정 가중치)
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
  engram1: { emotionScore: number; category: string; createdAt: Date | string },
  engram2: { emotionScore: number; category: string; createdAt: Date | string }
): "SEMANTIC" | "EMOTIONAL" | "TEMPORAL" | "ASSOCIATIVE" {
  const rarity1 = getCategoryRarityScore(engram1.category);
  const rarity2 = getCategoryRarityScore(engram2.category);
  const avgRarity = (rarity1 + rarity2) / 2;

  // 같은 카테고리이고 희귀한 카테고리면 의미적 연결 우선
  if (engram1.category === engram2.category && avgRarity > 0.5) {
    return "SEMANTIC";
  }

  // 감정 점수가 비슷하면 감정적 연결
  const emotionDiff = Math.abs(engram1.emotionScore - engram2.emotionScore);
  if (emotionDiff < 0.3) {
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
