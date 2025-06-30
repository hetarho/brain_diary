import { GoogleGenAI } from "@google/genai";
import { LlmRequest, LlmResponse, LlmConfig } from "../domain/types";
import { LlmClient } from "../domain/LlmClient";

export class GeminiClient implements LlmClient {
  private ai: GoogleGenAI;

  constructor(private config: LlmConfig) {
    this.ai = new GoogleGenAI({ apiKey: this.config.apiKey });
  }

  async call(request: LlmRequest): Promise<LlmResponse> {
    try {
      const model = request.model || this.config.defaultModel;

      // 시스템 메시지와 사용자 프롬프트 결합
      let contents = request.prompt;
      if (request.systemMessage) {
        contents = `${request.systemMessage}\n\n${request.prompt}`;
      }

      console.log(contents);

      const response = await this.ai.models.generateContent({
        model,
        contents,
        config: {
          maxOutputTokens: request.maxTokens || this.config.defaultMaxTokens,
          temperature: request.temperature ?? this.config.defaultTemperature,
        },
      });

      if (!response.text) {
        throw new Error("No content received from Gemini API");
      }

      return {
        success: true,
        content: response.text,
        usage: {
          promptTokens: response.usageMetadata?.promptTokenCount || 0,
          completionTokens: response.usageMetadata?.candidatesTokenCount || 0,
          totalTokens: response.usageMetadata?.totalTokenCount || 0,
        },
      };
    } catch (error) {
      console.error("Gemini Client Error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }
}
