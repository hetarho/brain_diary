# 🧠 Brain - 엔그램 기반 뇌과학 일기 앱

Brain은 실제 뇌의 기억 처리 방식을 모방하여 일기를 작은 기억 조각(엔그램)으로 분해하고 관리하는 혁신적인 애플리케이션입니다.

## ✨ 주요 기능

### 🔬 뇌과학 기반 엔그램 생성
- **12가지 메모리 카테고리**: EXPERIENCE, EMOTION, PERSON, PLACE, FOOD, OBJECT, CONCEPT, SKILL, GOAL, MEMORY, REFLECTION, OTHER
- **감정 점수**: -1.0(부정) ~ 1.0(긍정)
- **중요도**: 0.0(낮음) ~ 1.0(높음) 
- **CREB 점수**: 0.0(약함) ~ 1.0(강함) - 기억 강화 정도
- **키워드 추출**: 각 엔그램의 핵심 키워드 자동 추출

### 🤖 AI 기반 분석
- **Gemini 2.0 Flash** 모델 활용
- 일기 내용을 뇌과학적 관점에서 분석
- 자동 엔그램 분해 및 카테고리 분류
- 감정 상태 및 기억 강도 평가

### 🔄 기억 강화 시스템
- **엔그램 재열람**: 기억 강화를 위한 반복 학습
- **즐겨찾기**: 중요한 엔그램 표시
- **연관 기억**: 관련 엔그램들 간의 연결

## 🏗️ 기술 스택

### Frontend
- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **tRPC** (타입 안전한 API)

### Backend
- **tRPC Server**
- **Prisma ORM**
- **PostgreSQL** (Supabase)
- **Gemini 2.0 Flash API**

### 아키텍처
- **클린 아키텍처** (전체 프로젝트)
- **레이어드 아키텍처** (LLM 엔진)
- **의존성 역전 원칙** 적용

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

# 스키마를 데이터베이스에 푸시
npm run db:push
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

### CREB 점수
CREB(cAMP response element-binding protein)는 기억 형성에 중요한 역할을 하는 전사 인자입니다. 앱에서는 이를 기억 강도의 지표로 활용합니다.

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

# Prisma 클라이언트 생성
npm run db:generate

# 데이터베이스 스키마 푸시
npm run db:push

# 데이터베이스 마이그레이션
npm run db:migrate

# Prisma Studio 실행
npm run db:studio
```

## 🚀 배포

### Vercel + Supabase (권장)
1. Vercel에 프로젝트 연결
2. 환경변수 설정
3. 자동 배포

### 환경변수 설정 (배포용)
```bash
GEMINI_API_KEY=your-gemini-api-key
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
DATABASE_URL=your-supabase-database-url
```

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
