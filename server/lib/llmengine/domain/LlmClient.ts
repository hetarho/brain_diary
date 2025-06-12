import { LlmRequest, LlmResponse } from './types'

export interface LlmClient {
  call(request: LlmRequest): Promise<LlmResponse>
} 