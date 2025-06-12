# LlmEngine Module

## 1. 개요

`LlmEngine`은 애플리케이션 내에서 LLM(Large Language Model)과의 상호작용을 담당하는 내부 라이브러리입니다. 현재 Google의 Gemini 모델을 사용하며, 향후 다른 LLM 모델로도 유연하게 확장할 수 있는 구조를 목표로 합니다.

## 2. 설계 원칙

이 모듈은 유지보수성, 확장성, 테스트 용이성을 높이기 위해 다음과 같은 설계 원칙을 따릅니다.

- **계층형 아키텍처 (Layered Architecture)**: 코드를 역할과 책임에 따라 Presentation, Application, Infrastructure, Domain의 4가지 주요 계층으로 분리합니다.
- **관심사 분리 (Separation of Concerns)**: 각 계층은 자신만의 명확한 책임을 가지며, 다른 계층의 내부 구현에 대해 알 필요가 없습니다. 예를 들어, 비즈니스 로직은 실제 API 통신 방법에 대해 알지 못합니다.
- **의존성 역전 원칙 (Dependency Inversion Principle)**: 상위 계층(e.g., Application)은 하위 계층(e.g., Infrastructure)의 구체적인 구현에 의존하지 않고, 추상화(인터페이스)에 의존합니다. 이를 통해 하위 계층의 구현을 쉽게 교체할 수 있습니다.

## 3. 아키텍처

```
+-----------------------------------------------------------------+
|   외부 호출 (e.g., tRPC Routers, API Controllers)                 |
+-----------------------------------------------------------------+
                         |
                         v
+------------------[ Presentation ]-------------------------------+
|                                                                 |
|   LlmEngine:                                                    |
|    - 외부 시스템에 간단한 인터페이스 제공 (Facade Pattern)         |
|    - 설정(Config) 관리 및 Service 초기화                         |
|                                                                 |
+-----------------------------------------------------------------+
                         |
                         v
+------------------[ Application ]--------------------------------+
|                                                                 |
|   LlmService:                                                   |
|    - 핵심 비즈니스 로직 및 유스케이스(Use Case) 처리               |
|    - `prompt`, `promptWithSystem` 등 구체적인 기능 구현          |
|    - 실제 작업은 Infrastructure 계층에 위임                        |
|                                                                 |
+-----------------------------------------------------------------+
                         |
                         v
+------------------[ Infrastructure ]-----------------------------+
|                                                                 |
|   GeminiClient:                                                 |
|    - 외부 시스템(Google Gemini API)과의 통신 담당                |
|    - API 요청/응답 형식 변환                                     |
|    - (@google/genai SDK 사용)                                   |
|                                                                 |
+-----------------------------------------------------------------+
                         |
                         v
+---------------------[ Domain ]----------------------------------+
|                                                                 |
|   types.ts:                                                     |
|    - LlmRequest, LlmResponse, LlmConfig 등                       |
|    - 모든 계층에서 공유되는 핵심 데이터 구조 및 타입 정의            |
|    - 특정 기술에 종속되지 않는 순수한 데이터                       |
|                                                                 |
+-----------------------------------------------------------------+
```

### 3.1. 각 계층의 역할

- **Presentation (`presentation/LlmEngine.ts`)**
  - **역할**: 모듈의 진입점(Entry Point).
  - **책임**: 외부 세계에 가장 간단하고 명확한 API를 제공합니다. 내부의 복잡한 로직을 숨기고 `Application` 계층으로 요청을 위임하는 퍼사드(Facade) 역할을 합니다.

- **Application (`application/LlmService.ts`)**
  - **역할**: 애플리케이션의 핵심 비즈니스 로직.
  - **책임**: `prompt` 생성, 시스템 메시지 주입 등 실제 사용 사례(Use Case)를 처리합니다. `Domain`의 모델을 사용하여 `Infrastructure` 계층과 통신합니다.

- **Infrastructure (`infrastructure/GeminiClient.ts`)**
  - **역할**: 외부 세계와의 통신.
  - **책임**: 외부 API(@google/genai)와의 실제 통신을 담당합니다. API가 요구하는 데이터 형식으로 변환하고, 응답을 `Domain` 모델로 변환하여 반환합니다. 오류 처리, 로깅 등을 수행합니다.

- **Domain (`domain/types.ts`)**
  - **역할**: 모듈의 핵심 데이터 모델.
  - **책임**: `LlmRequest`, `LlmResponse`와 같이 계층 간에 전달되는 데이터의 구조(타입)를 정의합니다. 이 계층은 다른 어떤 계층에도 의존하지 않는 가장 순수한 부분입니다.

## 4. 사용 방법

```typescript
import { LlmEngine } from '@/server/lib/llmengine';

const engine = new LlmEngine('YOUR_API_KEY');

async function main() {
  const response = await engine.prompt('오늘 날씨 어때?');
  if (response.success) {
    console.log(response.content);
  }
}
``` 