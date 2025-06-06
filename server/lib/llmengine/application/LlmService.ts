import { GeminiClient } from '../infrastructure/GeminiClient'
import { LlmRequest, LlmResponse, LlmConfig } from '../domain/types'

export class LlmService {
  private client: GeminiClient

  constructor(config: LlmConfig) {
    this.client = new GeminiClient(config)
  }

  async prompt(
    prompt: string, 
    options?: {
      model?: string
      maxTokens?: number
      temperature?: number
      systemMessage?: string
    }
  ): Promise<LlmResponse> {
    const request: LlmRequest = {
      prompt,
      model: options?.model,
      maxTokens: options?.maxTokens,
      temperature: options?.temperature,
      systemMessage: options?.systemMessage
    }

    return await this.client.call(request)
  }

  async promptWithSystem(
    prompt: string,
    systemMessage: string,
    options?: {
      model?: string
      maxTokens?: number
      temperature?: number
    }
  ): Promise<LlmResponse> {
    return await this.prompt(prompt, {
      ...options,
      systemMessage
    })
  }
} 