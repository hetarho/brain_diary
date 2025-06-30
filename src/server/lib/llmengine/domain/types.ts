export interface LlmRequest {
  prompt: string
  model?: string
  maxTokens?: number
  temperature?: number
  systemMessage?: string
}

export interface LlmResponse {
  success: boolean
  content?: string
  error?: string
  usage?: {
    promptTokens: number
    completionTokens: number
    totalTokens: number
  }
}

export interface LlmConfig {
  apiKey: string
  defaultModel: string
  defaultMaxTokens: number
  defaultTemperature: number
  timeout: number
} 