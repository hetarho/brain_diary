'use client'

import { useState } from 'react'
import { trpc } from '../../server/trpc/client'
import { useUser } from '../contexts/UserContext'


export function EngramGenerator() {
  const [diaryContent, setDiaryContent] = useState('')
  const [selectedEngramId, setSelectedEngramId] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState(() => {
    // 기본값을 오늘 날짜로 설정
    const today = new Date()
    return today.toISOString().split('T')[0] // YYYY-MM-DD 형식
  })

  // UserContext 사용
  const { user: currentUser, isLoading: userLoading } = useUser()

  // tRPC 훅 사용
  const generateEngrams = trpc.engram.generate.useMutation()
  const createTestEntry = trpc.engram.createTestEntry.useMutation()
  const deleteEntry = trpc.engram.deleteEntry.useMutation()
  const { data: userEngrams, refetch } = trpc.engram.getByUser.useQuery(
    { userId: currentUser?.id || '' },
    { enabled: !!currentUser?.id }
  )
  const { data: userEntries, refetch: refetchEntries } = trpc.engram.getEntriesByUser.useQuery(
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
        content: diaryContent,
        createdAt: selectedDate
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
      refetchEntries() // 일기 목록 새로고침
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
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">
              일기 내용을 입력하세요
            </label>
          </div>
          <div className="w-48">
            <label className="block text-sm font-medium mb-2">
              📅 일기 날짜
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg text-sm"
              max={new Date().toISOString().split('T')[0]} // 오늘 이후 날짜는 선택 불가
            />
          </div>
        </div>
        <textarea
          value={diaryContent}
          onChange={(e) => setDiaryContent(e.target.value)}
          className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none"
          placeholder="어떤 일이 있었나요?"
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

      {/* 생성된 일기들 */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">📝 생성된 일기들</h3>
        
        {userEntries && userEntries.length > 0 ? (
          <div className="grid gap-4 mb-8">
            {userEntries.map((entry) => (
              <EntryCard 
                key={entry.id} 
                entry={entry} 
                onDelete={async (entryId) => {
                  try {
                    await deleteEntry.mutateAsync({ entryId })
                    refetchEntries() // 일기 목록 새로고침
                    refetch() // 엔그램 목록도 새로고침
                  } catch (error) {
                    console.error('일기 삭제 실패:', error)
                  }
                }}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 mb-8">아직 작성된 일기가 없습니다.</p>
        )}
      </div>

      {/* 엔그램 목록 */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">🧠 생성된 엔그램들</h3>
        
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

  const getCategoryRarityInfo = (category: string) => {
    const rarityScores: Record<string, { score: number; label: string; color: string }> = {
      TRAVEL: { score: 0.9, label: '매우 희귀', color: 'bg-red-100 text-red-700' },
      HOBBY: { score: 0.7, label: '희귀', color: 'bg-orange-100 text-orange-700' },
      LEARNING: { score: 0.6, label: '보통', color: 'bg-yellow-100 text-yellow-700' },
      EXPERIENCE: { score: 0.5, label: '보통', color: 'bg-yellow-100 text-yellow-700' },
      PERSON: { score: 0.4, label: '보통', color: 'bg-yellow-100 text-yellow-700' },
      PLACE: { score: 0.4, label: '보통', color: 'bg-yellow-100 text-yellow-700' },
      EMOTION: { score: 0.3, label: '일상적', color: 'bg-green-100 text-green-700' },
      RELATIONSHIP: { score: 0.3, label: '일상적', color: 'bg-green-100 text-green-700' },
      WORK: { score: 0.2, label: '매우 일상적', color: 'bg-blue-100 text-blue-700' },
      FOOD: { score: 0.1, label: '매우 일상적', color: 'bg-blue-100 text-blue-700' },
      HEALTH: { score: 0.2, label: '매우 일상적', color: 'bg-blue-100 text-blue-700' },
      OTHER: { score: 0.3, label: '일상적', color: 'bg-green-100 text-green-700' }
    }
    return rarityScores[category] || { score: 0.3, label: '일상적', color: 'bg-green-100 text-green-700' }
  }

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
        <div className="flex gap-2">
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {engram.category}
          </span>
          <span className={`text-xs px-2 py-1 rounded ${getCategoryRarityInfo(engram.category).color}`}>
            {getCategoryRarityInfo(engram.category).label}
          </span>
        </div>
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

function EntryCard({ entry, onDelete }: {
  entry: {
    id: string
    content: string
    createdAt: Date | string
    _count: { engrams: number }
  },
  onDelete: (entryId: string) => void
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  const formatDate = (date: Date | string) => {
    const dateObj = new Date(date)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    
    // 오늘, 어제 표시
    if (dateObj.toDateString() === today.toDateString()) {
      return `오늘 (${dateObj.toLocaleString('ko-KR', { hour: '2-digit', minute: '2-digit' })})`
    } else if (dateObj.toDateString() === yesterday.toDateString()) {
      return `어제 (${dateObj.toLocaleString('ko-KR', { hour: '2-digit', minute: '2-digit' })})`
    } else {
      return dateObj.toLocaleString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }
  }

  const truncateContent = (content: string, maxLength: number = 100) => {
    if (content.length <= maxLength) return content
    return content.substring(0, maxLength) + '...'
  }

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
            📝 원본 일기
          </span>
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
            🧠 {entry._count.engrams}개 엔그램
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-blue-500 hover:text-blue-700"
            title={isExpanded ? "접기" : "전체 보기"}
          >
            {isExpanded ? "📄" : "📖"}
          </button>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="text-sm text-red-500 hover:text-red-700"
            title="일기 삭제"
          >
            🗑️
          </button>
        </div>
      </div>

      <div className="text-sm text-gray-500 mb-2">
        {formatDate(entry.createdAt)}
      </div>

      <div className="text-gray-800 mb-3">
        {isExpanded ? entry.content : truncateContent(entry.content)}
      </div>

      {/* 삭제 확인 모달 */}
      {showDeleteConfirm && (
        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700 mb-3">
            ⚠️ 이 일기를 삭제하면 연결된 {entry._count.engrams}개의 엔그램과 모든 시냅스도 함께 삭제됩니다. 정말 삭제하시겠습니까?
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => {
                onDelete(entry.id)
                setShowDeleteConfirm(false)
              }}
              className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
            >
              삭제
            </button>
            <button
              onClick={() => setShowDeleteConfirm(false)}
              className="px-3 py-1 bg-gray-300 text-gray-700 text-sm rounded hover:bg-gray-400"
            >
              취소
            </button>
          </div>
        </div>
      )}
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