import { GoogleGenAI } from "@google/genai";
import { GeminiClient } from "./GeminiClient";
import {
  LlmRequest,
  LlmResponse,
  LlmConfig,
} from "@/server/lib/llmengine/domain/types";

const mockGenerateContent = jest.fn();
// @google/genai 라이브러리를 모의 처리합니다.
jest.mock("@google/genai", () => {
  const mockGoogleGenAI = jest.fn(() => ({
    models: {
      generateContent: mockGenerateContent,
    },
  }));
  return {
    GoogleGenAI: mockGoogleGenAI,
  };
});

const MockGoogleGenAI = GoogleGenAI as jest.Mock;

describe("GeminiClient", () => {
  const testConfig: LlmConfig = {
    apiKey: "test-api-key",
    defaultModel: "default-model",
    defaultMaxTokens: 1000,
    defaultTemperature: 0.8,
    timeout: 30000,
  };
  let client: GeminiClient;

  beforeEach(() => {
    // 각 테스트 실행 전 모의 객체 초기화
    MockGoogleGenAI.mockClear();
    mockGenerateContent.mockClear();
    client = new GeminiClient(testConfig);

    // console.log 와 console.error를 모의 처리하여 테스트 출력을 깔끔하게 유지
    jest.spyOn(console, "log").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    // 모의 처리한 console 함수 복원
    jest.restoreAllMocks();
  });

  it("올바른 API 키로 GoogleGenAI 인스턴스를 생성해야 합니다.", () => {
    expect(MockGoogleGenAI).toHaveBeenCalledTimes(1);
    expect(MockGoogleGenAI).toHaveBeenCalledWith({ apiKey: testConfig.apiKey });
  });

  describe("call", () => {
    it("성공적으로 API를 호출하고 응답을 LlmResponse 형식으로 파싱해야 합니다.", async () => {
      // Arrange
      const request: LlmRequest = {
        prompt: "테스트 프롬프트",
        model: "custom-model",
        maxTokens: 500,
        temperature: 0.5,
      };
      const fakeApiResponse = {
        text: "API 응답입니다.",
        usageMetadata: {
          promptTokenCount: 10,
          candidatesTokenCount: 20,
          totalTokenCount: 30,
        },
      };
      mockGenerateContent.mockResolvedValue(fakeApiResponse);

      // Act
      const response = await client.call(request);

      // Assert
      expect(mockGenerateContent).toHaveBeenCalledTimes(1);
      expect(mockGenerateContent).toHaveBeenCalledWith({
        model: request.model,
        contents: request.prompt,
        config: {
          maxOutputTokens: request.maxTokens,
          temperature: request.temperature,
        },
      });

      const expectedResponse: LlmResponse = {
        success: true,
        content: fakeApiResponse.text,
        usage: {
          promptTokens: 10,
          completionTokens: 20,
          totalTokens: 30,
        },
      };
      expect(response).toEqual(expectedResponse);
    });

    it("시스템 메시지가 포함된 요청을 올바르게 처리해야 합니다.", async () => {
      // Arrange
      const request: LlmRequest = {
        prompt: "사용자 질문",
        systemMessage: "너는 훌륭한 AI야.",
      };
      mockGenerateContent.mockResolvedValue({ text: "응답" });

      // Act
      await client.call(request);

      // Assert
      expect(mockGenerateContent).toHaveBeenCalledTimes(1);
      expect(mockGenerateContent).toHaveBeenCalledWith(
        expect.objectContaining({
          contents: `${request.systemMessage}\n\n${request.prompt}`,
        })
      );
    });

    it("요청에 옵션 값이 없으면 설정의 기본값을 사용해야 합니다.", async () => {
      // Arrange
      const request: LlmRequest = { prompt: "기본값 테스트" };
      mockGenerateContent.mockResolvedValue({ text: "응답" });

      // Act
      await client.call(request);

      // Assert
      expect(mockGenerateContent).toHaveBeenCalledWith({
        model: testConfig.defaultModel,
        contents: request.prompt,
        config: {
          maxOutputTokens: testConfig.defaultMaxTokens,
          temperature: testConfig.defaultTemperature,
        },
      });
    });

    it("API 에러가 발생하면 success: false 와 에러 메시지를 반환해야 합니다.", async () => {
      // Arrange
      const request: LlmRequest = { prompt: "에러 테스트" };
      const fakeError = new Error("API Failure");
      mockGenerateContent.mockRejectedValue(fakeError);

      // Act
      const response = await client.call(request);

      // Assert
      expect(response.success).toBe(false);
      expect(response.content).toBeUndefined();
      expect(response.error).toBe("API Failure");
    });

    it("API 응답에 텍스트가 없으면 에러를 던지고 처리해야 합니다.", async () => {
      // Arrange
      const request: LlmRequest = { prompt: "빈 응답 테스트" };
      mockGenerateContent.mockResolvedValue({ text: null }); // text가 없는 응답

      // Act
      const response = await client.call(request);

      // Assert
      expect(response.success).toBe(false);
      expect(response.error).toBe("No content received from Gemini API");
    });
  });
});
