import { z } from 'zod'
import { router, publicProcedure } from '../trpc'
import { LlmEngine } from '../../lib/llmengine'
import { prisma } from '../../lib/prisma'
import { v4 as uuidv4 } from 'uuid'

// Zod 스키마 정의
const generateEngramsSchema = z.object({
  diaryContent: z.string().min(10),
  userId: z.string(),
  entryId: z.string()
})

export const engramRouter = router({
  // 테스트 사용자 생성 (개발용)
  createTestUser: publicProcedure
    .input(z.object({ 
      name: z.string().default('테스트 사용자'),
      email: z.string().email()
    }))
    .mutation(async ({ input }) => {
      try {
        // 이메일로 이미 존재하는지 확인
        const existingUser = await prisma.user.findFirst({
          where: { email: input.email }
        })
        
        if (existingUser) {
          return existingUser
        }

        // 새 사용자 생성 (UUID 사용)
        const user = await prisma.user.create({
          data: {
            id: uuidv4(),
            name: input.name,
            email: input.email,
            provider: 'GOOGLE',
            providerId: uuidv4()
          }
        })
        return user
      } catch (error) {
        console.error('User creation error:', error)
        throw new Error('사용자 생성 중 오류가 발생했습니다')
      }
    }),

  // 테스트 일기 생성 (개발용)
  createTestEntry: publicProcedure
    .input(z.object({
      userId: z.string(),
      content: z.string()
    }))
    .mutation(async ({ input }) => {
      try {
        // 새 일기 생성 (ID는 자동 생성)
        const entry = await prisma.entry.create({
          data: {
            content: input.content,
            userId: input.userId
          }
        })
        return entry
      } catch (error) {
        console.error('Entry creation error:', error)
        throw new Error('일기 생성 중 오류가 발생했습니다')
      }
    }),

  // 엔그램 생성
  generate: publicProcedure
    .input(generateEngramsSchema)
    .mutation(async ({ input }) => {
      try {
        // LLM 엔진으로 엔그램 생성
        const llm = new LlmEngine(process.env.GEMINI_API_KEY!)
        
        const systemMessage = `당신은 뇌과학 전문가이자 기억 분석 AI입니다. 사용자의 일기를 분석하여 뇌과학 이론에 기반한 엔그램(기억의 최소 단위)으로 분해해주세요.

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

### 4. 중요도 (0.0 ~ 1.0)
- 0.0-0.3: 일상적, 반복적인 내용
- 0.4-0.6: 보통 수준의 의미
- 0.7-0.9: 중요한 사건이나 깨달음
- 1.0: 인생을 바꿀 만한 중대한 사건

### 5. CREB 점수 (0.0 ~ 1.0)
- 기억 형성 가능성을 나타냄
- 감정적 강도, 새로움, 중요도를 종합적으로 고려
- 높을수록 장기 기억으로 남을 가능성이 높음

### 6. 키워드 추출
- 각 엔그램당 2-5개의 핵심 키워드
- 검색과 연결에 활용될 수 있는 단어들

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
입력: "평소에는 아버지차라서 별로 감흥이 없었는데 막상 차를 폐차시킨다고 하니까 슬펐다"

출력:
{
  "classification": {
    "backgroundInfo": ["평소에는 아버지차라서 별로 감흥이 없었다"],
    "todaysExperience": ["막상 차를 폐차시킨다고 하니까 슬펐다"]
  },
  "engrams": [
    {
      "content": "아버지 차를 폐차한다는 소식에 슬픔을 느꼈다",
      "category": "EMOTION",
      "emotionScore": -0.6,
      "importance": 0.7,
      "crebScore": 0.8,
      "keywords": ["아버지", "폐차", "슬픔", "이별"]
    }
  ],
  "analysis": {
    "filteredSentences": 1,
    "backgroundSentences": 1,
    "experienceSentences": 1,
    "totalEngrams": 1,
    "dominantEmotion": "슬픔",
    "keyThemes": ["가족", "이별"],
    "memoryStrength": "STRONG"
  }
}`

        const response = await llm.promptWithSystem(
          `다음 일기를 분석하여 엔그램으로 분해해주세요:\n\n${input.diaryContent}`,
          systemMessage
        )

        if (!response.success || !response.content) {
          throw new Error('엔그램 생성에 실패했습니다')
        }

        // 마크다운 코드 블록 제거 함수
        const cleanJsonString = (str: string): string => {
          // ```json과 ``` 제거
          return str
            .replace(/```json\s*/g, '')
            .replace(/```\s*/g, '')
            .trim()
        }

        // JSON 파싱
        const cleanedContent = cleanJsonString(response.content)
        console.log('Cleaned content:', cleanedContent) // 디버깅용
        const result = JSON.parse(cleanedContent)
        
        // 데이터베이스에 저장
        const savedEngrams = []
        for (const engramData of result.engrams) {
          const engram = await prisma.engram.create({
            data: {
              content: engramData.content,
              category: engramData.category,
              emotionScore: engramData.emotionScore,
              importance: engramData.importance,
              crebScore: engramData.crebScore,
              keywords: engramData.keywords,
              embedding: Array.from({ length: 1536 }, () => Math.random() - 0.5), // 임시 임베딩
              rehearsalCount: 0,
              isStarred: false,
              consolidationState: 'FRESH',
              entryId: input.entryId,
              userId: input.userId
            }
          })
          savedEngrams.push(engram)
        }

        return {
          success: true,
          engrams: savedEngrams,
          analysis: result.analysis,
          classification: result.classification
        }

      } catch (error) {
        console.error('Engram generation error:', error)
        throw new Error('엔그램 생성 중 오류가 발생했습니다')
      }
    }),

  // 사용자별 엔그램 조회
  getByUser: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      const engrams = await prisma.engram.findMany({
        where: { userId: input.userId },
        orderBy: { createdAt: 'desc' }
      })
      return engrams
    }),

  // 일기별 엔그램 조회
  getByEntry: publicProcedure
    .input(z.object({ entryId: z.string() }))
    .query(async ({ input }) => {
      const engrams = await prisma.engram.findMany({
        where: { entryId: input.entryId },
        orderBy: { createdAt: 'desc' }
      })
      return engrams
    }),

  // 엔그램 재열람 (기억 강화)
  rehearse: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const engram = await prisma.engram.update({
        where: { id: input.id },
        data: {
          rehearsalCount: { increment: 1 },
          importance: { increment: 0.1 },
          updatedAt: new Date()
        }
      })
      return engram
    }),

  // 엔그램 즐겨찾기
  star: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const engram = await prisma.engram.update({
        where: { id: input.id },
        data: {
          isStarred: true,
          importance: { increment: 0.2 },
          updatedAt: new Date()
        }
      })
      return engram
    }),

  // 엔그램 즐겨찾기 해제
  unstar: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const engram = await prisma.engram.update({
        where: { id: input.id },
        data: {
          isStarred: false,
          updatedAt: new Date()
        }
      })
      return engram
    })
}) 