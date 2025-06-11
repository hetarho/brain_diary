# 🧠 Brain - 엔그램 기반 뇌과학 일기 앱

Brain은 실제 뇌의 기억 처리 방식을 모방하여 일기를 작은 기억 조각(엔그램)으로 분해하고 관리하는 혁신적인 애플리케이션입니다.

## ✨ 주요 기능

### 🔬 뇌과학 기반 엔그램 생성
- **10가지 메모리 카테고리**: EXPERIENCE, PERSON, PLACE, LEARNING, WORK, RELATIONSHIP, HOBBY, HEALTH, TRAVEL, OTHER
- **중요도**: 0.0(낮음) ~ 1.0(높음) 
- **기억 강도**: 0.0(약함) ~ 1.0(강함) - 시간에 따라 감소
- **키워드 추출**: 각 엔그램의 핵심 키워드 자동 추출

### 🧪 고급 기억 메커니즘
- **시간 기반 감쇄**: 에빙하우스 망각 곡선에 따른 자연스러운 기억 감소
- **시냅스 가소성**: LTP/LTD를 통한 기억 간 연결 강화/약화
- **재공고화**: 기억 회상 시 업데이트 가능한 상태 전환
- **기억 간섭**: 유사한 기억들 간의 상호 영향 시뮬레이션

### 🎭 다차원 감정 분석
- **8가지 기본 감정**: 기쁨, 슬픔, 분노, 두려움, 놀람, 혐오, 신뢰, 기대
- **감정 강도**: 각 감정의 세기 측정
- **감정 원자가**: 긍정/부정 스펙트럼
- **각성도**: 감정의 활성화 정도

### 🌍 맥락 정보 저장
- **시공간 정보**: 장소, 시간, 날씨, 계절
- **사회적 맥락**: 함께한 사람, 활동
- **신체적 상태**: 피로도, 건강 상태 등
- **상태 의존적 회상**: 비슷한 맥락에서 더 잘 기억됨

### 🤖 AI 기반 분석
- **Gemini 2.0 Flash** 모델 활용
- 일기 내용을 뇌과학적 관점에서 분석
- 자동 엔그램 분해 및 카테고리 분류
- 감정 상태 및 기억 강도 평가

### 🔄 기억 강화 시스템
- **엔그램 재열람**: 기억 강화를 위한 반복 학습
- **즐겨찾기**: 중요한 엔그램 표시
- **연관 기억**: 관련 엔그램들 간의 시냅스 연결
- **공고화 상태 추적**: FRESH → CONSOLIDATING → CONSOLIDATED → DECAYING

## 🏗️ 기술 스택

### Frontend
- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **tRPC** 

### Backend
- **tRPC Server**
- **Prisma ORM**
- **PostgreSQL** 
- **Gemini 2.0 Flash API**

## 🚀 시작하기

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경변수 설정
`.env` 파일을 생성하고 다음 내용을 추가하세요:

```bash
# Gemini API
GEMINI_API_KEY=your-gemini-api-key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
DATABASE_URL=postgresql://postgres:your-password@db.your-project-id.supabase.co:5432/postgres
```

### 3. 데이터베이스 설정
```bash
# Prisma 클라이언트 생성
npm run db:generate

# 스키마를 데이터베이스에 마이그레이션
# (로컬 DB에 테이블 등을 생성합니다)
npm run db:migrate
```

### 4. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 `http://localhost:3000`에 접속하세요.

## 📁 프로젝트 구조

```
brain/
├── app/                          # Next.js App Router
│   ├── components/              # React 컴포넌트
│   ├── api/trpc/               # tRPC API 라우트
│   └── ...
├── server/                      # 백엔드 로직
│   ├── lib/
│   │   ├── llmengine/          # LLM 엔진 (레이어드 아키텍처)
│   │   │   ├── domain/         # 도메인 타입
│   │   │   ├── infrastructure/ # Gemini 클라이언트
│   │   │   ├── application/    # 비즈니스 로직
│   │   │   └── presentation/   # 외부 인터페이스
│   │   └── prisma.ts           # Prisma 클라이언트
│   ├── trpc/                   # tRPC 라우터
│   │   ├── routers/
│   │   │   └── engram.ts       # 엔그램 관련 API
│   │   ├── root.ts             # 메인 라우터
│   │   └── ...
│   └── prisma/
│       └── schema.prisma       # 데이터베이스 스키마
└── ...
```

## 📊 데이터베이스 스키마

### 핵심 모델

#### Engram (엔그램)
기억의 최소 단위를 나타내는 핵심 모델:
- 내용, 임베딩, 중요도
- 기억 강도 (currentStrength) - 시간에 따라 감소
- 시간 기반 감쇄 속성 (lastActivatedAt, decayRate)
- 공고화 상태 추적
- 감정은 별도의 EmotionTag 모델로 다차원적 분석

#### Synapse (시냅스)
엔그램 간의 연결을 나타냄:
- 연결 강도 (0-1)
- LTP/LTD 메커니즘 (활성화 횟수, 가소성 비율)
- 메타플라스티시티 (동적 임계값 조정)
- 활성화 이력 추적

#### 보조 모델

- **ReconsolidationEvent**: 기억 재공고화 이벤트 기록
- **EmotionTag**: 다차원적 감정 태그
- **MemoryContext**: 기억 형성 시 맥락 정보
- **MemoryInterference**: 기억 간 간섭 관계
- **HippocampusStore**: 단기 기억 저장소 (빠른 학습)
- **CortexStore**: 장기 기억 저장소 (느린 학습, 일반화)

## 🧪 API 엔드포인트

### tRPC 라우터 (`/api/trpc`)

#### 엔그램 관련
- `engram.generate`: 일기를 엔그램으로 변환
- `engram.getByUser`: 사용자별 엔그램 조회
- `engram.getByEntry`: 일기별 엔그램 조회
- `engram.rehearse`: 엔그램 재열람 (기억 강화)
- `engram.star`: 엔그램 즐겨찾기
- `engram.unstar`: 엔그램 즐겨찾기 해제

#### 테스트용
- `engram.createTestUser`: 테스트 사용자 생성
- `engram.createTestEntry`: 테스트 일기 생성

## 🔬 뇌과학 원리

### 엔그램(Engram)이란?
엔그램은 뇌에서 기억이 저장되는 물리적 흔적을 의미합니다. Brain 앱은 이 개념을 활용하여:

1. **기억 분해**: 복잡한 경험을 작은 기억 단위로 분해
2. **카테고리 분류**: 뇌의 다양한 영역에서 처리되는 정보 유형별 분류
3. **감정 연결**: 편도체에서 처리되는 감정 정보 연결
4. **반복 강화**: 해마에서 일어나는 기억 강화 과정 모방

### 시간 기반 기억 감쇄 (에빙하우스 망각 곡선)
실제 뇌처럼 시간이 지남에 따라 기억이 자연스럽게 흐려지는 현상을 구현:
- **지수적 감쇄**: 시간에 따른 기억 강도의 지수적 감소
- **간격 효과**: 적절한 간격을 두고 반복하면 더 오래 기억됨
- **개인차 반영**: 사용자별 다른 망각률 적용 가능

### 시냅스 가소성 (Synaptic Plasticity)

#### LTP (Long-Term Potentiation, 장기 강화)
- **헵의 법칙**: "함께 발화하는 뉴런은 함께 연결된다"
- 관련 기억들이 동시에 활성화되면 연결이 강해짐
- 학습과 기억의 세포 수준 메커니즘

#### LTD (Long-Term Depression, 장기 억제)
- 불필요한 연결을 약화시켜 네트워크 효율성 증가
- 새로운 학습을 위한 공간 확보
- 잘못된 연상 연결 제거

### 재공고화 (Reconsolidation)
기억을 회상할 때 일시적으로 불안정해지고 수정 가능한 상태가 됨:
- **RETRIEVAL**: 회상에 의한 재활성화
- **ASSOCIATION**: 연관 기억에 의한 활성화
- **EMOTIONAL**: 감정적 자극에 의한 변화
- **CONTEXTUAL**: 맥락적 단서에 의한 업데이트

### 다차원적 감정 분석 (Plutchik의 감정 바퀴)
8가지 기본 감정을 세 가지 차원으로 분석:
- **강도 (Intensity)**: 감정의 세기 (0-1)
- **원자가 (Valence)**: 긍정/부정 (-1 ~ +1)
- **각성도 (Arousal)**: 활성화 정도 (0-1)

### 맥락 의존적 기억 (Context-Dependent Memory)
기억이 형성될 때의 환경이 회상에 영향:
- **인코딩 특수성 원리**: 같은 맥락에서 더 잘 기억됨
- **프루스트 현상**: 감각적 단서가 과거 기억을 불러일으킴
- **상태 의존적 학습**: 비슷한 신체/감정 상태에서 회상 촉진

### 기억 간섭 (Memory Interference)
- **순행 간섭**: 이전 기억이 새 기억 학습을 방해
- **역행 간섭**: 새 기억이 이전 기억 회상을 방해
- **맥락적 간섭**: 유사한 상황의 기억들이 서로 혼동

### 보완 학습 시스템 (CLS Theory)
해마-피질 시스템의 상호작용:

#### 해마 (빠른 학습)
- 새로운 경험의 즉각적 저장
- 에피소드 기억 (언제, 어디서, 무엇을)
- 패턴 분리: 유사한 기억 구분

#### 피질 (느린 학습)
- 점진적 지식 통합
- 의미 기억 (일반적 지식)
- 일반화와 추상화

### 기억 강도 시스템
실제 뇌의 CREB 단백질처럼 기억의 강도를 나타내는 시스템:
- 시간에 따라 자연스럽게 감소 (에빙하우스 망각 곡선)
- 재활성화를 통해 강화 가능
- 0에 가까워지면 망각 상태로 전환

## 🛠️ 개발 스크립트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린팅
npm run lint

# Prisma 클라이언트 생성 (schema.prisma 변경 후 항상 실행)
npm run db:generate

# 데이터베이스 스키마 푸시 (프로토타이핑용, 마이그레이션 파일 없음)
# 경고: 프로덕션 환경에서는 사용하지 마세요.
npm run db:push

# 데이터베이스 마이그레이션 (버전 관리되는 정식 스키마 변경)
npm run db:migrate

# Prisma Studio 실행 (DB GUI)
npm run db:studio
```

## 🚀 배포

이 프로젝트는 **Vercel**과 **Supabase**를 사용하여 배포하는 것을 권장합니다.

### 1. Supabase 데이터베이스 준비
1.  Supabase 프로젝트를 생성합니다.
2.  프로젝트의 **Database** 설정 페이지에서 **Connection string**을 복사합니다. 이 값이 `DATABASE_URL`이 됩니다.

### 2. Vercel 프로젝트 설정
1.  GitHub 저장소를 Vercel에 연결하여 새 프로젝트를 생성합니다.
2.  Vercel 프로젝트의 **Settings > Environment Variables** 메뉴에서 아래의 환경변수들을 등록합니다.

| 환경변수 | 값 | 설명 |
| :--- | :--- | :--- |
| `DATABASE_URL` | `postgresql://postgres:[YOUR-PASSWORD]@[...].supabase.co:5432/postgres` | Prisma가 DB에 연결하기 위한 **비밀 연결 문자열**. Supabase에서 복사한 값을 그대로 사용합니다. **절대 외부에 노출되면 안됩니다.** |
| `GEMINI_API_KEY` | `your-gemini-api-key` | Google Gemini API 키. |
| `NEXT_PUBLIC_SUPABASE_URL` | `https://[...].supabase.co` | Supabase 클라이언트(Front-end)용 URL. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `your-anon-key` | Supabase 클라이언트(Front-end)용 공개 키. |

3.  Vercel은 `prisma`를 자동으로 인식하여, 배포 시 `npm run build` 스크립트가 실행될 때 `prisma generate`와 `prisma migrate deploy`를 자동으로 실행해줍니다. 따라서 별도의 배포 스크립트 설정은 필요하지 않습니다.

4.  main 브랜치에 코드를 푸시하면 자동으로 빌드 및 배포가 진행됩니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 🧠 영감

이 프로젝트는 다음 뇌과학 연구들에서 영감을 받았습니다:
- 엔그램 이론 (Richard Semon, 1904)
- 기억 강화 연구 (Eric Kandel)
- 해마의 기억 형성 과정
- CREB 단백질과 장기 기억

---

**Brain**으로 당신의 기억을 과학적으로 관리해보세요! 🧠✨
