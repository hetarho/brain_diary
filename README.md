# 🧠 Brain - 엔그램 기반 뇌과학 일기 앱

Brain은 실제 뇌의 기억 처리 방식을 모방하여, 사용자의 일기를 뇌가 정보를 처리하는 최소 단위인 **엔그램(Engram)**으로 분해하고, 이들 간의 복잡한 연결망을 시뮬레이션하는 혁신적인 애플리케이션입니다.

## ✨ 핵심 컨셉: 뇌의 기억 시스템 모델링

### 1. 엔그램(Engram): 기억의 원자
모든 기억은 **엔그램(Engram)**이라는 최소 단위로 저장됩니다. 이는 특정 경험에 의해 물리적으로 변화하는 뇌의 뉴런 집합에 해당합니다. Brain 앱은 사용자의 일기 내용을 다음과 같은 속성을 가진 여러 엔그램으로 분해합니다.

-   **내용(Content)**: "카페에서 마신 커피", "비 오는 날의 풍경" 등 기억의 실제 내용
-   **맥락 정보(Context)**: 엔그램은 형성될 당시의 맥락을 자체적으로 포함합니다.
    -   `temporalMarker`: "어제 오후", "저녁 식사 후" 같은 시간적 맥락
    -   `spatialMarker`: "집", "도서관" 같은 공간적 맥락
    -   `emotionalTone`: 기억의 전반적인 긍정/부정 톤 (-1.0 ~ 1.0)
-   **뇌과학적 분류(`MemoryType`)**: 에피소드(EPISODIC), 의미(SEMANTIC), 절차(PROCEDURAL) 등 뇌과학에 기반한 11가지 유형으로 분류됩니다.

### 2. 시냅스 vs. 엔그램 링크: 기억은 어떻게 연결되는가?
엔그램들은 서로 어떻게 연결될까요? Brain은 뇌의 두 가지 다른 연결 메커니즘을 모델링합니다.

#### 가. `Synapse`: 물리적 배선 (How strongly are they wired?)
-   **개념**: 두 엔그램(뉴런 집합)이 얼마나 강하게 **물리적으로 결합**되어 있는지를 나타냅니다. 헵의 규칙("Fire together, wire together")에 따라, 함께 자주 활성화되는 엔그램 간의 시냅스는 강해집니다.
-   **역할**: 연상 작용의 기반. '커피'를 떠올렸을 때 '노트북'이 자연스럽게 연상되는 것은 두 엔그램 간의 시냅스 강도가 높기 때문입니다.
-   **주요 속성**: `strength`(강도), `plasticityRate`(가소성)

#### 나. `EngramLink`: 논리적 관계 (Why are they connected?)
-   **개념**: 두 기억 사이에 존재하는 **논리적, 맥락적 관계**를 정의합니다.
-   **역할**: 기억의 서사(Narrative)와 순서를 재구성합니다. "A 사건 **다음에** B 사건이 일어났다" (`TEMPORAL` 링크) 또는 "C와 D는 **같은 장소**에서 일어났다" (`SPATIAL` 링크)와 같은 관계를 명시합니다.
-   **주요 속성**: `linkType`(관계유형), `timeGap`(시간차)

> **비유**: `Synapse`가 도시의 **도로망(물리적 도로)**이라면, `EngramLink`는 그 도로를 달리는 **버스 노선(논리적 경로)**입니다. 하나의 도로는 여러 버스 노선이 공유할 수 있듯, 두 엔그램 사이의 물리적 연결(`Synapse`) 위에서 다양한 맥락적 관계(`EngramLink`)가 형성될 수 있습니다.

### 3. 상호보완적 학습 시스템: 해마와 대뇌피질
Brain은 기억이 저장되고 공고화되는 두 가지 주요 뇌 영역을 모델링합니다.

-   **`HippocampusStore` (해마)**: **빠른 학습 시스템**. 새로운 경험(에피소드 기억)을 즉각적으로 붙잡아 저장하는 단기 기억 저장소입니다.
-   **`CortexStore` (대뇌피질)**: **느린 학습 시스템**. 해마에 저장된 기억이 반복적으로 재활성화되면서, 일반화되고 압축된 형태로 대뇌피질에 영구 저장됩니다. 이 과정을 **시스템 공고화(Systems Consolidation)**라고 합니다.

### 4. 다차원적 감정 모델
감정은 기억 형성에 매우 중요한 역할을 합니다.

-   **`emotionalTone`**: 엔그램의 핵심적인 **긍정/부정가(Valence)**. "좋다/나쁘다" 수준의 기본적인 감정 톤.
-   **`EmotionTag`**: **구체적인 감정의 종류**. '기쁨', '슬픔', '기대' 등 다채로운 감정의 질감을 표현하여, 하나의 기억에 복합적인 감정이 얽혀있는 실제 경험을 모델링합니다.

## 🔬 뇌과학 원리 및 이론적 기반
Brain 앱의 아키텍처는 다음과 같은 핵심적인 뇌과학 이론과 원리에 깊이 영감을 받았습니다.

| 이론 / 원리 | 관련 모델 / 필드 | 설명 |
| :--- | :--- | :--- |
| **헵의 규칙 (Hebbian Rule)** | `Synapse` | "함께 발화하는 뉴런은 함께 연결된다." - 동시 활성화되는 엔그램 간의 물리적 연결이 강화되는 원리. |
| **에빙하우스 망각 곡선** | `Engram.decayRate` | 시간에 따라 기억이 지수적으로 감소하는 현상을 모델링. |
| **상호보완적 학습 시스템 (CLS)** | `HippocampusStore`, `CortexStore` | 새로운 경험은 해마(빠른 학습)에, 일반화된 지식은 대뇌피질(느린 학습)에 저장되는 2-트랙 시스템. |
| **기억 재공고화 (Reconsolidation)** | `ReconsolidationEvent` | 기억을 회상할 때마다 불안정해지고, 업데이트되거나 변형될 수 있는 현상을 모델링. |
| **기억 연결 (Memory Linking)** | `EngramLink` | 시간적으로 근접한 경험들이 뇌에서 서로 연결되어 하나의 에피소드를 형성하는 메커니즘. |
| **인코딩 특수성 원리** | `Engram`의 `temporal/spatialMarker` | 기억이 형성될 때의 맥락(시간, 장소)이 인출의 중요한 단서가 된다는 원리. |
| **플루칙의 감정의 바퀴** | `EmotionTag`, `EmotionType` | 기쁨, 슬픔 등 8가지 기본 감정을 통해 복합적인 인간의 감정을 모델링. |

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

-   **User**: 사용자 정보
-   **Entry**: 사용자가 작성한 원본 일기

#### Engram
기억의 원자. 시공간 및 감정적 맥락, 중요도, 기억 강도, 공고화 상태 등 기억의 모든 핵심 속성을 포함합니다.

#### Synapse
"함께 발화하는 뉴런은 함께 연결된다"는 헵의 규칙을 모델링. 두 엔그램 간의 물리적 연결 강도를 나타냅니다.

#### EngramLink
"A 다음에 B가 일어났다"와 같이, 두 엔그램 간의 시간적, 공간적, 인과적, 의미적 관계를 정의합니다.

#### HippocampusStore & CortexStore
기억의 상호보완적 학습 시스템(CLS) 이론을 모델링. 해마(단기/빠른 학습)와 대뇌피질(장기/느린 학습)의 역할을 구분합니다.

### 보조 모델

-   **ReconsolidationEvent**: 기억 재공고화(회상 시 변형) 이벤트 기록
-   **EmotionTag**: 다차원적 감정 태그 (기쁨, 슬픔, 분노 등)
-   **MemoryInterference**: 기억 간 간섭 관계 (순행, 역행 간섭)

## 🧪 API 엔드포인트 (tRPC)

새로운 아키텍처를 반영한 주요 API 엔드포인트 예시입니다.

### Entry (일기)
- `entry.create(content: string)`: 사용자의 일기 텍스트를 받아 `Entry`를 생성하고, 내부적으로 LLM을 호출하여 `Engram`, `Synapse`, `EngramLink`를 모두 생성하는 복합 트랜잭션을 수행합니다.

### Engram (엔그램)
- `engram.get(filter: EngramFilter)`: `userId`, `entryId`, `memoryType` 등 다양한 조건으로 엔그램을 조회합니다.
- `engram.rehearse(id: string)`: 특정 엔그램을 재활성화(rehearse)하여 `rehearsalCount`를 증가시키고 `currentStrength`를 재계산합니다. 기억 강화의 핵심 로직입니다.
- `engram.updateImportance(id: string, importance: float)`: 사용자가 직접 특정 기억의 중요도를 조절할 수 있게 합니다.

### Network (기억 네트워크)
- `network.getGraph(centerEngramId?: string)`: 특정 엔그램을 중심으로 연결된 다른 엔그램과 그 관계(`Synapse`, `EngramLink`)들을 조회하여, 기억 네트워크 그래프를 시각화하는데 필요한 데이터를 제공합니다.

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
