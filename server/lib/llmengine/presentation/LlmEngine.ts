import { LlmService } from '../application/LlmService'
import { LlmConfig, LlmResponse } from '../domain/types'
import { GeminiClient } from '../infrastructure/GeminiClient'

export class LlmEngine {
  private service: LlmService

  constructor(apiKey: string, options?: {
    model?: string
    maxTokens?: number
    temperature?: number
    timeout?: number
  }) {
    const config: LlmConfig = {
      apiKey,
      defaultModel: options?.model || 'gemini-2.0-flash-exp',
      defaultMaxTokens: options?.maxTokens || 2000,
      defaultTemperature: options?.temperature || 0.7,
      timeout: options?.timeout || 30000
    }

    const client = new GeminiClient(config)
    this.service = new LlmService(client)
  }

  async prompt(prompt: string): Promise<LlmResponse> {
    return await this.service.prompt(prompt, undefined)
  }

  async promptWithOptions(
    prompt: string,
    options: {
      model?: string
      maxTokens?: number
      temperature?: number
      systemMessage?: string
    }
  ): Promise<LlmResponse> {
    return await this.service.prompt(prompt, options)
  }

  async promptWithSystem(
    prompt: string,
    systemMessage: string
  ): Promise<LlmResponse> {
    return await this.service.promptWithSystem(prompt, systemMessage)
  }
} 