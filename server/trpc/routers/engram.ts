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

## 🧠 핵심 뇌과학 이론
1. **엔그램(Engram)**: 기억의 물리적 흔적으로, 특정 뉴런 집단의 활성화 패턴
2. **시냅스 가소성**: 헵의 법칙 - "함께 발화하는 뉴런은 함께 연결된다"
3. **기억 인코딩**: 해마-피질 시스템의 상호작용으로 단기기억이 장기기억으로 전환
4. **감정과 기억**: 편도체 활성화가 노르에피네프린 분비를 촉진하여 기억을 강화

## ⚠️ 중요도 vs 기억 강도 구분
- **중요도(importance)**: 전전두엽의 의식적 가치 판단 (장기적 의미)
- **기억 강도(currentStrength)**: 편도체/해마의 생물학적 각인 (감정적 각성, 새로움)

예: "갑자기 나타난 개에 놀람" → 중요도 0.1 (일상적), 강도 0.7 (강한 놀라움)

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

### 2. 분류 카테고리 (MemoryType) ⚠️ 절대 emotion과 혼동하지 마세요!
**카테고리는 기억의 유형을 나타냅니다. 감정이 아닙니다!**

✅ **올바른 카테고리 (12개만 사용 가능)**:
- EXPERIENCE: 구체적인 경험이나 사건
- PERSON: 사람과의 관계나 상호작용
- PLACE: 장소나 공간에 대한 기억
- LEARNING: 깨달음, 배움, 성찰
- MENTAL: 생각, 계획, 상상, 인지적 활동
- FEELING: 순수한 감정 상태, 느낌
- WORK: 업무 관련 활동
- RELATIONSHIP: 인간관계의 변화나 상태
- HOBBY: 취미, 여가 활동
- HEALTH: 건강, 몸 상태
- TRAVEL: 여행, 이동
- OTHER: 기타

❌ **절대 category에 사용하면 안 되는 값들 (이것들은 emotion입니다!)**:
- JOY, SADNESS, ANGER, FEAR, SURPRISE, DISGUST, TRUST, ANTICIPATION

⚠️ **중요 경고**: 
- category 필드에는 위의 12가지 MemoryType 중 하나만 사용하세요
- ANTICIPATION, JOY 등은 emotion이지 category가 아닙니다!
- "기대하는 내용"이라도 category는 MENTAL이나 FEELING 등으로 분류하세요

### 3. 감정 태그 (EmotionTag) - Plutchik의 감정 바퀴 이론
각 엔그램에 대해 1-3개의 주요 감정을 태그로 추가하세요:

### 3. 감정 태그 (emotionTags) - 변연계 활성화 패턴
**뇌과학 이론**: Plutchik의 감정 바퀴와 변연계(편도체, 시상하부, 대상회) 활성화 패턴

**8가지 기본 감정과 뇌 영역**:
- **JOY (기쁨)**: 복측 피개부(VTA), 측좌핵 → 도파민 분비
- **SADNESS (슬픔)**: 전대상피질(ACC), 섬엽 → 사회적 고통
- **ANGER (분노)**: 편도체, 시상하부 → 투쟁 반응
- **FEAR (공포)**: 편도체, 중뇌수도관주위회백질 → 도피/동결
- **SURPRISE (놀라움)**: 상구, 편도체 → 주의 전환
- **DISGUST (혐오)**: 섬엽, 기저핵 → 회피 반응
- **TRUST (신뢰)**: 복내측 전전두피질, 측두두정접합부 → 사회적 연결
- **ANTICIPATION (기대)**: 전전두피질, 선조체 → 보상 예측

**각 감정의 측정 지표**:
- **intensity (0.0-1.0)**: 해당 뇌 영역의 활성화 강도
  - 0.0-0.3: 약한 활성화 (미묘한 감정)
  - 0.4-0.6: 중간 활성화 (명확한 감정)
  - 0.7-1.0: 강한 활성화 (압도적 감정)

- **valence (-1.0 ~ 1.0)**: 접근/회피 동기
  - -1.0: 강한 회피 (위협, 혐오)
  - 0.0: 중립
  - 1.0: 강한 접근 (보상, 애착)

- **arousal (0.0-1.0)**: 교감신경계 활성화
  - 0.0-0.3: 낮은 각성 (평온, 무기력)
  - 0.4-0.6: 중간 각성 (일상적 활동)
  - 0.7-1.0: 높은 각성 (흥분, 스트레스)

### 4. 중요도 (importance) (0.0 ~ 1.0) - 전전두엽 피질의 가치 판단
**뇌과학 이론**: 전전두엽 피질(PFC)은 경험의 개인적 의미와 장기적 가치를 평가합니다.

중요도는 **의식적 판단**과 **장기적 가치**를 반영합니다:
- 0.0-0.2: 일상적, 반복적 (루틴 활동)
- 0.3-0.4: 약간의 개인적 의미
- 0.5-0.6: 중간 수준의 의미 (기억할 만한 경험)
- 0.7-0.8: 개인적으로 중요한 사건
- 0.9-1.0: 인생의 전환점

**평가 기준**:
- 미래에 미칠 영향
- 개인 가치관과의 연관성
- 목표 달성과의 관련성
- 인간관계에서의 의미
- 자아 정체성과의 연결

### 5. 기억 강도 (currentStrength) (0.0 ~ 1.0) - 편도체와 해마의 인코딩 강도
**뇌과학 이론**: 편도체는 감정적 각성을, 해마는 새로움과 맥락을 처리합니다. 
강한 감정이나 놀라움은 노르에피네프린 분비를 촉진해 기억을 강화합니다.

기억 강도는 **생물학적 각인**의 세기를 반영합니다:

**편도체 활성화 요인** (감정적 각성):
- 놀라움/충격: +0.3~0.5
- 공포/위협: +0.4~0.6
- 강한 기쁨: +0.3~0.4
- 분노/좌절: +0.2~0.4
- 슬픔/상실: +0.3~0.5

**해마 활성화 요인** (새로움과 맥락):
- 완전히 새로운 경험: +0.3~0.4
- 예상치 못한 상황: +0.2~0.3
- 강한 감각적 자극: +0.2~0.3
- 패턴 위반: +0.2~0.3

**기억 강도 계산**:
1. 기본값 = importance * 0.3
2. 편도체 활성화 점수 추가 (최대 0.6)
3. 해마 활성화 점수 추가 (최대 0.4)
4. 최종값은 1.0으로 제한

**예시**:
- "갑자기 튀어나온 강아지에 놀람" → 중요도: 0.1 (일상적), 강도: 0.7 (강한 놀라움)
- "승진 발표" → 중요도: 0.8 (인생 중요), 강도: 0.9 (감정+새로움)
- "점심 메뉴 고민" → 중요도: 0.1, 강도: 0.1
- "첫 키스" → 중요도: 0.7, 강도: 1.0 (강한 감정+새로움)
- "교통사고 목격" → 중요도: 0.3, 강도: 0.8 (충격+공포)

### 6. 키워드 추출
- 각 엔그램당 2-5개의 핵심 키워드
- 검색과 연결에 활용될 수 있는 단어들
- 고유명사(사람 이름, 장소명)를 우선적으로 포함

## 출력 형식:

**중요: 마크다운 코드 블록을 사용하지 말고, 순수 JSON만 반환해주세요.**

⚠️ **최종 검증 체크리스트**:
1. ✅ category는 반드시 다음 12개 중 하나여야 함: EXPERIENCE, PERSON, PLACE, LEARNING, MENTAL, FEELING, WORK, RELATIONSHIP, HOBBY, HEALTH, TRAVEL, OTHER
2. ✅ emotion은 반드시 다음 8개 중 하나여야 함: JOY, SADNESS, ANGER, FEAR, SURPRISE, DISGUST, TRUST, ANTICIPATION
3. ❌ category에 JOY, ANTICIPATION 등의 감정을 넣지 않았는지 확인
4. ❌ emotion에 EXPERIENCE, LEARNING 등의 카테고리를 넣지 않았는지 확인

다음 JSON 형식으로 응답해주세요:

{
  "classification": {
    "backgroundInfo": ["배경 정보로 분류된 문장들"],
    "todaysExperience": ["오늘의 경험으로 분류된 문장들"]
  },
  "engrams": [
    {
      "content": "추출된 기억 내용 (한 문장으로 요약)",
      "category": "EXPERIENCE|PERSON|PLACE|LEARNING|WORK|RELATIONSHIP|HOBBY|HEALTH|TRAVEL|OTHER|MENTAL|FEELING",
      "emotionTags": [
        {
          "emotion": "JOY|SADNESS|ANGER|FEAR|SURPRISE|DISGUST|TRUST|ANTICIPATION",
          "intensity": 0.0~1.0,
          "valence": -1.0~1.0,
          "arousal": 0.0~1.0
        }
      ],
      "importance": 0.0~1.0,
      "currentStrength": 0.0~1.0,
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

🚨 **절대적 규칙 - 반드시 지켜주세요!** 🚨
1. category 필드: 오직 이 12개만 사용 → EXPERIENCE, PERSON, PLACE, LEARNING, MENTAL, FEELING, WORK, RELATIONSHIP, HOBBY, HEALTH, TRAVEL, OTHER
2. emotion 필드: 오직 이 8개만 사용 → JOY, SADNESS, ANGER, FEAR, SURPRISE, DISGUST, TRUST, ANTICIPATION
3. ❌ ANTICIPATION은 category가 아닙니다! emotion입니다!
4. ❌ "기대하는 내용"이어도 category는 MENTAL 또는 EXPERIENCE 등으로 분류하세요!
5. ❌ category에 감정 관련 단어를 절대 넣지 마세요!

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
      "아버지가 나를 자랑스러워한다고 말씀하시며 감동받아 눈물을 흘렸다",
      "그동안 바쁘다는 핑계로 소홀했던 것 같아서 죄송했다",
      "앞으로는 더 자주 연락드려야겠다고 다짐했다"
    ]
  },
  "engrams": [
    {
      "content": "아버지와 오랜만에 단둘이 저녁 식사를 했다",
      "category": "EXPERIENCE",
      "emotionTags": [
        {
          "emotion": "JOY",
          "intensity": 0.7,
          "valence": 0.8,
          "arousal": 0.5
        },
        {
          "emotion": "TRUST",
          "intensity": 0.6,
          "valence": 0.7,
          "arousal": 0.3
        }
      ],
      "importance": 0.5,
      "currentStrength": 0.6,
      "keywords": ["아버지", "저녁식사", "단둘이", "오랜만"]
    },
    {
      "content": "아버지가 나를 자랑스러워한다고 말씀하시며 감동받아 눈물을 흘렸다",
      "category": "PERSON",
      "emotionTags": [
        {
          "emotion": "JOY",
          "intensity": 0.9,
          "valence": 0.9,
          "arousal": 0.8
        },
        {
          "emotion": "SURPRISE",
          "intensity": 0.6,
          "valence": 0.7,
          "arousal": 0.7
        }
      ],
      "importance": 0.8,
      "currentStrength": 0.9,
      "keywords": ["자랑스럽다", "감동", "눈물", "아버지"]
    },
    {
      "content": "가족에게 소홀했던 것에 대해 죄책감을 느꼈다",
      "category": "RELATIONSHIP",
      "emotionTags": [
        {
          "emotion": "SADNESS",
          "intensity": 0.6,
          "valence": -0.4,
          "arousal": 0.4
        },
        {
          "emotion": "TRUST",
          "intensity": 0.3,
          "valence": 0.2,
          "arousal": 0.2
        }
      ],
      "importance": 0.4,
      "currentStrength": 0.5,
      "keywords": ["죄책감", "소홀", "가족", "반성"]
    },
    {
      "content": "앞으로 가족과 더 자주 연락하겠다고 다짐했다",
      "category": "LEARNING",
      "emotionTags": [
        {
          "emotion": "ANTICIPATION",
          "intensity": 0.5,
          "valence": 0.6,
          "arousal": 0.4
        },
        {
          "emotion": "TRUST",
          "intensity": 0.4,
          "valence": 0.5,
          "arousal": 0.3
        }
      ],
      "importance": 0.3,
      "currentStrength": 0.4,
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

        // Valid MemoryType values
        const validMemoryTypes = [
          "EXPERIENCE",
          "PERSON", 
          "PLACE",
          "LEARNING",
          "MENTAL",
          "FEELING",
          "WORK",
          "RELATIONSHIP",
          "HOBBY",
          "HEALTH",
          "TRAVEL",
          "OTHER"
        ];

        // 데이터베이스에 저장
        const savedEngrams = [];
        for (const engramData of result.engrams) {
          // Validate category
          if (!validMemoryTypes.includes(engramData.category)) {
            console.error(`Invalid category: ${engramData.category}. Defaulting to OTHER.`);
            engramData.category = "OTHER";
          }

          const engram = await dataSource.createEngram({
            content: engramData.content,
            category: engramData.category,
            importance: engramData.importance,
            currentStrength: engramData.currentStrength,
            keywords: engramData.keywords,
            entryId: input.entryId,
            userId: input.userId,
          });
          
          // 감정 태그 저장
          for (const emotionTag of engramData.emotionTags) {
            await dataSource.createEmotionTag({
              engramId: engram.id,
              emotion: emotionTag.emotion,
              intensity: emotionTag.intensity,
              valence: emotionTag.valence,
              arousal: emotionTag.arousal,
            });
          }
          
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
            // 각 엔그램의 감정 태그 가져오기
            const engramEmotionTags = await dataSource.getEmotionTagsByEngram(engram.id);
            const existingEngramEmotionTags = await dataSource.getEmotionTagsByEngram(existingEngram.id);
            
            const similarity = calculateSimilarity(
              { ...engram, emotionTags: engramEmotionTags },
              { ...existingEngram, emotionTags: existingEngramEmotionTags }
            );

            if (similarity > 0.4) {
              // 임계값을 0.3에서 0.4로 상향
              // 양방향 시냅스 생성
              await dataSource.createManySynapses({
                synapses: [
                  {
                    fromEngramId: engram.id,
                    toEngramId: existingEngram.id,
                    strength: similarity,
                    type: determineSynapseType(
                      { ...engram, emotionTags: engramEmotionTags },
                      { ...existingEngram, emotionTags: existingEngramEmotionTags }
                    ),
                  },
                  {
                    fromEngramId: existingEngram.id,
                    toEngramId: engram.id,
                    strength: similarity,
                    type: determineSynapseType(
                      { ...existingEngram, emotionTags: existingEngramEmotionTags },
                      { ...engram, emotionTags: engramEmotionTags }
                    ),
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
        // 각 엔그램의 감정 태그 가져오기
        const sourceEmotionTags = await dataSource.getEmotionTagsByEngram(sourceEngram.id);
        const targetEmotionTags = await dataSource.getEmotionTagsByEngram(targetEngram.id);
        
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
    keywords: string[];
    emotionTags: { emotion: string; intensity: number; valence: number; arousal: number }[];
    category: string;
    createdAt: Date | string;
  },
  engram2: {
    keywords: string[];
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
  // 공통 감정 찾기
  const emotions1 = engram1.emotionTags.map(tag => tag.emotion);
  const emotions2 = engram2.emotionTags.map(tag => tag.emotion);
  const commonEmotions = emotions1.filter(e => emotions2.includes(e));
  
  // 감정 강도의 평균 차이 계산
  let emotionSimilarity = 0;
  if (commonEmotions.length > 0) {
    // 공통 감정이 있으면 높은 점수
    emotionSimilarity = 0.5 + (commonEmotions.length / Math.max(emotions1.length, emotions2.length)) * 0.5;
    
    // 감정 강도(intensity)의 유사성도 고려
    const avgIntensity1 = engram1.emotionTags.reduce((sum, tag) => sum + tag.intensity, 0) / engram1.emotionTags.length || 0;
    const avgIntensity2 = engram2.emotionTags.reduce((sum, tag) => sum + tag.intensity, 0) / engram2.emotionTags.length || 0;
    const intensityDiff = Math.abs(avgIntensity1 - avgIntensity2);
    emotionSimilarity *= (1 - intensityDiff * 0.3); // 강도 차이가 크면 점수 감소
  } else if (engram1.emotionTags.length > 0 && engram2.emotionTags.length > 0) {
    // 공통 감정은 없지만 둘 다 감정이 있는 경우, valence 비교
    const avgValence1 = engram1.emotionTags.reduce((sum, tag) => sum + tag.valence, 0) / engram1.emotionTags.length;
    const avgValence2 = engram2.emotionTags.reduce((sum, tag) => sum + tag.valence, 0) / engram2.emotionTags.length;
    const valenceDiff = Math.abs(avgValence1 - avgValence2);
    emotionSimilarity = Math.max(0, 0.3 - valenceDiff * 0.15); // valence가 비슷하면 약간의 점수
  }
  
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
  engram1: { emotionTags: { emotion: string; intensity: number; valence: number; arousal: number }[]; category: string; createdAt: Date | string },
  engram2: { emotionTags: { emotion: string; intensity: number; valence: number; arousal: number }[]; category: string; createdAt: Date | string }
): "SEMANTIC" | "EMOTIONAL" | "TEMPORAL" | "ASSOCIATIVE" {
  const rarity1 = getCategoryRarityScore(engram1.category);
  const rarity2 = getCategoryRarityScore(engram2.category);
  const avgRarity = (rarity1 + rarity2) / 2;

  // 같은 카테고리이고 희귀한 카테고리면 의미적 연결 우선
  if (engram1.category === engram2.category && avgRarity > 0.5) {
    return "SEMANTIC";
  }

  // 공통 감정이 있으면 감정적 연결
  const emotions1 = engram1.emotionTags.map(tag => tag.emotion);
  const emotions2 = engram2.emotionTags.map(tag => tag.emotion);
  const hasCommonEmotions = emotions1.some(e => emotions2.includes(e));
  
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
