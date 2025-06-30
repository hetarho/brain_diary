import { LlmService } from './LlmService'
import { LlmClient } from '@/src/server/lib/llmengine/domain/LlmClient'
import { LlmRequest, LlmResponse } from '@/src/server/lib/llmengine/domain/types'

// 가짜 LlmClient 객체를 만듭니다.
const mockClient: jest.Mocked<LlmClient> = {
  call: jest.fn(),
}

describe('LlmService', () => {
  let llmService: LlmService

  beforeEach(() => {
    jest.clearAllMocks()
    llmService = new LlmService(mockClient)
    
    // 기본 모의 응답을 설정하여 테스트 간 간섭을 방지합니다.
    mockClient.call.mockResolvedValue({ success: true, content: '기본 응답' })
  })

  describe('prompt', () => {
    it('주어진 prompt와 options로 client.call을 호출하고 결과를 반환해야 합니다.', async () => {
      // Arrange: 모의 client가 반환할 가짜 응답을 설정합니다.
      const fakePrompt = '오늘 날씨는?'
      const fakeOptions = { temperature: 0.1 }
      const fakeResponse: LlmResponse = {
        success: true,
        content: '맑음',
      }

      // 모의 call 메소드가 fakeResponse를 반환하도록 설정
      mockClient.call.mockResolvedValue(fakeResponse)

      // Act: 테스트 대상 메소드를 실행합니다.
      const result = await llmService.prompt(fakePrompt, fakeOptions)

      // Assert: 예상대로 동작했는지 검증합니다.
      // 1. call 메소드가 한 번 호출되었는지 확인
      expect(mockClient.call).toHaveBeenCalledTimes(1)

      // 2. call 메소드가 올바른 인자(LlmRequest)와 함께 호출되었는지 확인
      const expectedRequest: LlmRequest = {
        prompt: fakePrompt,
        ...fakeOptions,
      }
      expect(mockClient.call).toHaveBeenCalledWith(expectedRequest)

      // 3. 최종 반환된 결과가 모의 client가 반환한 값과 동일한지 확인
      expect(result).toEqual(fakeResponse)
    })

    it('client.call에서 에러가 발생하면 예외를 던져야 합니다.', async () => {
      // Arrange
      const fakePrompt = '에러 발생시키기'
      const fakeError = new Error('API Error')
      mockClient.call.mockRejectedValue(fakeError)

      // Act & Assert
      await expect(llmService.prompt(fakePrompt)).rejects.toThrow(fakeError)
    })
  })

  describe('promptWithSystem', () => {
    it('systemMessage를 options에 포함하여 prompt를 호출해야 합니다.', async () => {
        // Arrange
        const fakePrompt = '시스템 프롬프트 테스트'
        const fakeSystemMessage = '너는 챗봇이야'
        const fakeOptions = { model: 'test-model' }
        const promptSpy = jest.spyOn(llmService, 'prompt')

        // Act
        await llmService.promptWithSystem(fakePrompt, fakeSystemMessage, fakeOptions)

        // Assert
        expect(promptSpy).toHaveBeenCalledTimes(1)
        expect(promptSpy).toHaveBeenCalledWith(fakePrompt, {
            ...fakeOptions,
            systemMessage: fakeSystemMessage
        })
    })
  })
}) 