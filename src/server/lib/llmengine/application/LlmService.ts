import { LlmClient } from '../domain/LlmClient'
import { LlmRequest, LlmResponse } from '../domain/types'

export class LlmService {
  constructor(private client: LlmClient) {}

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
      ...options,
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
      systemMessage,
    })
  }
} 