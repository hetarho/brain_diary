import { LlmEngine } from './LlmEngine'
import { LlmService } from '@/src/server/lib/llmengine/application/LlmService'
import { GeminiClient } from '@/src/server/lib/llmengine/infrastructure/GeminiClient'
import { LlmConfig, LlmResponse } from '@/src/server/lib/llmengine/domain/types'

// 의존하는 모듈들을 모의 처리합니다.
jest.mock('@/server/lib/llmengine/application/LlmService')
jest.mock('@/server/lib/llmengine/infrastructure/GeminiClient')

const MockLlmService = LlmService as jest.MockedClass<typeof LlmService>
const MockGeminiClient = GeminiClient as jest.MockedClass<typeof GeminiClient>

describe('LlmEngine', () => {
  const apiKey = 'test-api-key'

  beforeEach(() => {
    // 각 테스트 실행 전 모의 객체 초기화
    MockLlmService.mockClear()
    MockGeminiClient.mockClear()
  })

  it('올바른 설정으로 GeminiClient와 LlmService를 초기화해야 합니다.', () => {
    // Act
    new LlmEngine(apiKey)

    // Assert
    // 1. GeminiClient가 올바른 config로 생성되었는지 확인
    expect(MockGeminiClient).toHaveBeenCalledTimes(1)
    const expectedConfig: Partial<LlmConfig> = {
      apiKey,
      defaultModel: 'gemini-2.0-flash-exp'
    }
    expect(MockGeminiClient).toHaveBeenCalledWith(expect.objectContaining(expectedConfig))

    // 2. 생성된 client 인스턴스가 LlmService 생성자에 주입되었는지 확인
    const mockGeminiClientInstance = MockGeminiClient.mock.instances[0]
    expect(MockLlmService).toHaveBeenCalledTimes(1)
    expect(MockLlmService).toHaveBeenCalledWith(mockGeminiClientInstance)
  })

  describe('Method Delegation', () => {
    let engine: LlmEngine
    let serviceInstance: jest.MockedObject<LlmService>

    beforeEach(() => {
        engine = new LlmEngine(apiKey)
        serviceInstance = MockLlmService.mock.instances[0] as jest.MockedObject<LlmService>
    })

    it('prompt 메소드가 LlmService.prompt를 호출해야 합니다.', async () => {
      // Arrange
      const testPrompt = '테스트 프롬프트'
      const fakeResponse: LlmResponse = { success: true, content: '응답' }
      // LlmService의 prompt 메소드가 특정 값을 반환하도록 설정
      serviceInstance.prompt.mockResolvedValue(fakeResponse)

      // Act
      const result = await engine.prompt(testPrompt)

      // Assert
      expect(serviceInstance.prompt).toHaveBeenCalledTimes(1)
      expect(serviceInstance.prompt).toHaveBeenCalledWith(testPrompt, undefined) // options는 없으므로 undefined
      expect(result).toEqual(fakeResponse)
    })

    it('promptWithOptions 메소드가 LlmService.prompt를 옵션과 함께 호출해야 합니다.', async () => {
        // Arrange
        const testPrompt = '옵션 테스트'
        const options = { model: 'test-model' }
        const fakeResponse: LlmResponse = { success: true, content: '옵션 응답' }
        serviceInstance.prompt.mockResolvedValue(fakeResponse)
  
        // Act
        const result = await engine.promptWithOptions(testPrompt, options)
  
        // Assert
        expect(serviceInstance.prompt).toHaveBeenCalledTimes(1)
        expect(serviceInstance.prompt).toHaveBeenCalledWith(testPrompt, options)
        expect(result).toEqual(fakeResponse)
    })

    it('promptWithSystem 메소드가 LlmService.promptWithSystem을 호출해야 합니다.', async () => {
        // Arrange
        const testPrompt = '시스템 메시지 테스트'
        const systemMessage = '너는 테스트 봇이야.'
        const fakeResponse: LlmResponse = { success: true, content: '시스템 응답' }
        serviceInstance.promptWithSystem.mockResolvedValue(fakeResponse)
  
        // Act
        const result = await engine.promptWithSystem(testPrompt, systemMessage)
  
        // Assert
        expect(serviceInstance.promptWithSystem).toHaveBeenCalledTimes(1)
        expect(serviceInstance.promptWithSystem).toHaveBeenCalledWith(testPrompt, systemMessage)
        expect(result).toEqual(fakeResponse)
    })
  })
}) 