'use client'

import { useState } from 'react'
import { trpc } from '../../server/trpc/client'
import { useUser } from '../contexts/UserContext'


export function EngramGenerator() {
  const [diaryContent, setDiaryContent] = useState('')
  const [selectedEngramId, setSelectedEngramId] = useState<string | null>(null)

  // UserContext 사용
  const { user: currentUser, isLoading: userLoading } = useUser()

  // tRPC 훅 사용
  const generateEngrams = trpc.engram.generate.useMutation()
  const createTestEntry = trpc.engram.createTestEntry.useMutation()
  const { data: userEngrams, refetch } = trpc.engram.getByUser.useQuery(
    { userId: currentUser?.id || '' },
    { enabled: !!currentUser?.id }
  )
  const { data: connectedEngrams } = trpc.engram.getConnectedEngrams.useQuery(
    { engramId: selectedEngramId || '', minStrength: 0.5 },
    { enabled: !!selectedEngramId }
  )

  const handleGenerate = async () => {
    if (!diaryContent.trim() || !currentUser) return

    try {
      // 1. 테스트 일기 생성
      const entry = await createTestEntry.mutateAsync({
        userId: currentUser.id,
        content: diaryContent
      })

      // 2. 엔그램 생성
      const result = await generateEngrams.mutateAsync({
        diaryContent,
        userId: currentUser.id,
        entryId: entry.id
      })
      
      console.log('생성된 엔그램:', result)
      
      // 분류 결과 표시
      if (result.analysis) {
        console.log('분석 결과:', result.analysis)
      }
      
      setDiaryContent('')
      refetch() // 엔그램 목록 새로고침
    } catch (error) {
      console.error('엔그램 생성 실패:', error)
    }
  }

  // 로딩 중일 때 표시
  if (userLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">사용자 정보를 불러오는 중...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">🧠 엔그램 생성기</h2>
      
      {/* 사용자 정보 표시 */}
      {currentUser && (
        <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
          <p className="text-sm text-green-700">
            👤 로그인됨: {currentUser.name} ({currentUser.email})
          </p>
        </div>
      )}
      
      {/* 일기 입력 */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          일기 내용을 입력하세요
        </label>
        <textarea
          value={diaryContent}
          onChange={(e) => setDiaryContent(e.target.value)}
          className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none"
          placeholder="오늘 하루 어떤 일이 있었나요?"
        />
      </div>

      {/* 생성 버튼 */}
      <button
        onClick={handleGenerate}
        disabled={generateEngrams.isPending || !diaryContent.trim() || !currentUser}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
      >
        {generateEngrams.isPending ? '엔그램 생성 중...' : 
         !currentUser ? '사용자 로딩 중...' : '엔그램 생성'}
      </button>

      {/* 에러 표시 */}
      {generateEngrams.error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {generateEngrams.error.message}
        </div>
      )}

      {/* 엔그램 목록 */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">생성된 엔그램들</h3>
        
        {/* 최근 분석 결과 표시 */}
        {generateEngrams.data?.analysis && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold mb-2 text-gray-500">📊 분석 결과</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-gray-600">배경 정보:</span>
                <span className="ml-1 font-medium text-gray-500">{generateEngrams.data.analysis.backgroundSentences}개</span>
              </div>
              <div>
                <span className="text-gray-600">오늘의 경험:</span>
                <span className="ml-1 font-medium text-gray-500">{generateEngrams.data.analysis.experienceSentences}개</span>
              </div>
              <div>
                <span className="text-gray-600">생성된 엔그램:</span>
                <span className="ml-1 font-medium text-gray-500">{generateEngrams.data.analysis.totalEngrams}개</span>
              </div>
              <div>
                <span className="text-gray-600">기억 강도:</span>
                <span className="ml-1 font-medium text-gray-500">{generateEngrams.data.analysis.memoryStrength}</span>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-gray-600">주요 감정:</span>
              <span className="ml-1 font-medium text-gray-500">{generateEngrams.data.analysis.dominantEmotion}</span>
            </div>
            <div className="mt-1">
              <span className="text-gray-600">주요 테마:</span>
              <span className="ml-1 text-gray-500">{generateEngrams.data.analysis.keyThemes?.join(', ')}</span>
            </div>
          </div>
        )}

        {/* 분류 정보 표시 */}
        {generateEngrams.data?.classification && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold mb-3">🔍 문장 분류 결과</h4>
            
            {generateEngrams.data.classification.backgroundInfo?.length > 0 && (
              <div className="mb-3">
                <h5 className="text-sm font-medium text-gray-700 mb-1">📋 배경 정보 (저장되지 않음)</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  {generateEngrams.data.classification.backgroundInfo.map((info: string, index: number) => (
                    <li key={index} className="pl-2 border-l-2 border-gray-300">
                      {info}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {generateEngrams.data.classification.todaysExperience?.length > 0 && (
              <div>
                <h5 className="text-sm font-medium text-green-700 mb-1">⭐ 오늘의 경험 (엔그램으로 저장됨)</h5>
                <ul className="text-sm text-green-600 space-y-1">
                  {generateEngrams.data.classification.todaysExperience.map((exp: string, index: number) => (
                    <li key={index} className="pl-2 border-l-2 border-green-300">
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        
        {userEngrams && userEngrams.length > 0 ? (
          <div className="grid gap-4">
            {userEngrams.map((engram) => (
              <div key={engram.id}>
                <EngramCard 
                  engram={engram} 
                  onEngramClick={setSelectedEngramId}
                  isSelected={selectedEngramId === engram.id}
                />
                
                {/* 선택된 엔그램 아래에 연결된 엔그램들 표시 */}
                {selectedEngramId === engram.id && connectedEngrams && (
                  <div className="mt-4 ml-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-l-4 border-purple-300">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-purple-800">
                        🧠 연결된 기억들 (연상률 50% 이상)
                      </h4>
                      <button
                        onClick={() => setSelectedEngramId(null)}
                        className="text-purple-600 hover:text-purple-800 text-sm"
                      >
                        ✕
                      </button>
                    </div>
                    
                    {(connectedEngrams.outgoing.length > 0 || connectedEngrams.incoming.length > 0) ? (
                      <div className="space-y-4">
                        {connectedEngrams.outgoing.length > 0 && (
                          <div>
                            <h5 className="text-xs font-medium text-purple-700 mb-2">
                              → 연상되는 기억들 ({connectedEngrams.outgoing.length}개)
                            </h5>
                            <div className="grid gap-2">
                              {connectedEngrams.outgoing.map(({ synapse, engram }) => (
                                <ConnectedEngramCard 
                                  key={engram.id} 
                                  engram={engram} 
                                  synapse={synapse}
                                  onEngramClick={setSelectedEngramId}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {connectedEngrams.incoming.length > 0 && (
                          <div>
                            <h5 className="text-xs font-medium text-purple-700 mb-2">
                              ← 이 기억을 떠올리게 하는 기억들 ({connectedEngrams.incoming.length}개)
                            </h5>
                            <div className="grid gap-2">
                              {connectedEngrams.incoming.map(({ synapse, engram }) => (
                                <ConnectedEngramCard 
                                  key={engram.id} 
                                  engram={engram} 
                                  synapse={synapse}
                                  onEngramClick={setSelectedEngramId}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="text-purple-600 text-center py-2 text-sm">
                        연상률 50% 이상의 연결된 기억이 없습니다.
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">아직 생성된 엔그램이 없습니다.</p>
        )}
      </div>
    </div>
  )
}

function EngramCard({ engram, onEngramClick, isSelected }: { 
  engram: {
    id: string
    content: string
    category: string
    emotionScore: number
    importance: number
    crebScore: number
    keywords: string[]
    rehearsalCount: number
  },
  onEngramClick?: (engramId: string) => void
  isSelected?: boolean
}) {
  const rehearseMutation = trpc.engram.rehearse.useMutation()
  const strengthenSynapsesMutation = trpc.engram.strengthenSynapses.useMutation()

  const handleRehearse = () => {
    rehearseMutation.mutate({ id: engram.id })
  }

  const handleCardClick = () => {
    // 시냅스 강화 및 연결된 엔그램 표시
    strengthenSynapsesMutation.mutate({ engramId: engram.id })
    onEngramClick?.(engram.id)
  }

  return (
    <div 
      className={`border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer ${
        isSelected 
          ? 'border-purple-300 bg-purple-50 shadow-md' 
          : 'border-gray-200'
      }`}
      onClick={handleCardClick}
    >
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
          {engram.category}
        </span>
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleRehearse()
            }}
            className="text-sm text-blue-500 hover:text-blue-700"
            title="기억 강화 (재열람)"
          >
            🔄
          </button>
        </div>
      </div>
      
      <p className={`text-gray-200 mb-3 ${isSelected ? 'text-gray-700' : ''}`}>{engram.content}</p>
      
      <div className="flex gap-4 text-xs text-gray-500">
        <span title="감정 점수 (-1.0 ~ +1.0)">감정: {engram.emotionScore.toFixed(1)}</span>
        <span title="주관적 중요도 (0.0 ~ 1.0)">중요도: {engram.importance.toFixed(1)}</span>
        <span title="생물학적 기억 강도 (0.0 ~ 1.0)">CREB: {engram.crebScore.toFixed(1)}</span>
        <span>재열람: {engram.rehearsalCount}회</span>
      </div>
      
      <div className="mt-2">
        <div className="flex flex-wrap gap-1">
          {engram.keywords.map((keyword: string, index: number) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ConnectedEngramCard({ engram, synapse, onEngramClick }: {
  engram: {
    id: string
    content: string
    category: string
    emotionScore: number
    importance: number
    crebScore: number
    keywords: string[]
    rehearsalCount: number
  },
  synapse: {
    id: string
    strength: number
    type: string
  },
  onEngramClick?: (engramId: string) => void
}) {
  const getSynapseTypeColor = (type: string) => {
    switch (type) {
      case 'SEMANTIC': return 'bg-blue-100 text-blue-700'
      case 'EMOTIONAL': return 'bg-red-100 text-red-700'
      case 'TEMPORAL': return 'bg-green-100 text-green-700'
      case 'ASSOCIATIVE': return 'bg-purple-100 text-purple-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getSynapseTypeIcon = (type: string) => {
    switch (type) {
      case 'SEMANTIC': return '🔗'
      case 'EMOTIONAL': return '💭'
      case 'TEMPORAL': return '⏰'
      case 'ASSOCIATIVE': return '🌟'
      default: return '🔗'
    }
  }

  return (
    <div 
      className="border border-purple-200 rounded-lg p-3 hover:shadow-md transition-all cursor-pointer bg-white/70"
      onClick={() => onEngramClick?.(engram.id)}
      style={{ opacity: 0.7 + (synapse.strength * 0.3) }} // 연결 강도에 따라 투명도 조절
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex gap-2">
          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
            {engram.category}
          </span>
          <span className={`text-xs px-2 py-1 rounded ${getSynapseTypeColor(synapse.type)}`}>
            {getSynapseTypeIcon(synapse.type)} {synapse.type}
          </span>
        </div>
        <div className="text-xs text-purple-600 font-medium">
          연결강도: {(synapse.strength * 100).toFixed(0)}%
        </div>
      </div>
      
      <p className="text-gray-800 mb-2 text-sm">{engram.content}</p>
      
      <div className="flex gap-3 text-xs text-gray-500">
        <span>감정: {engram.emotionScore.toFixed(1)}</span>
        <span>중요도: {engram.importance.toFixed(1)}</span>
        <span>CREB: {engram.crebScore.toFixed(1)}</span>
      </div>
      
      <div className="mt-2">
        <div className="flex flex-wrap gap-1">
          {engram.keywords.slice(0, 3).map((keyword: string, index: number) => (
            <span
              key={index}
              className="text-xs bg-purple-50 text-purple-600 px-1 py-0.5 rounded"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
} 