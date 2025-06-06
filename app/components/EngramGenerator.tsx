'use client'

import { useState } from 'react'
import { trpc } from '../../server/trpc/client'


export function EngramGenerator() {
  const [diaryContent, setDiaryContent] = useState('')
  const [currentUser, setCurrentUser] = useState<{ id: string; email: string } | null>(null)

  // tRPC 훅 사용
  const generateEngrams = trpc.engram.generate.useMutation()
  const createTestUser = trpc.engram.createTestUser.useMutation()
  const createTestEntry = trpc.engram.createTestEntry.useMutation()
  const { data: userEngrams, refetch } = trpc.engram.getByUser.useQuery(
    { userId: currentUser?.id || '' },
    { enabled: !!currentUser?.id }
  )

  const handleGenerate = async () => {
    if (!diaryContent.trim()) return

    try {
      // 1. 테스트 사용자 생성 (없을 때만)
      const user = await createTestUser.mutateAsync({
        name: '테스트 사용자',
        email: 'test@example.com'
      })
      
      setCurrentUser(user)

      // 2. 테스트 일기 생성
      const entry = await createTestEntry.mutateAsync({
        userId: user.id,
        content: diaryContent
      })

      // 3. 엔그램 생성
      const result = await generateEngrams.mutateAsync({
        diaryContent,
        userId: user.id,
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

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">🧠 엔그램 생성기</h2>
      
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
        disabled={generateEngrams.isPending || !diaryContent.trim()}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
      >
        {generateEngrams.isPending ? '엔그램 생성 중...' : '엔그램 생성'}
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
              <EngramCard key={engram.id} engram={engram} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">아직 생성된 엔그램이 없습니다.</p>
        )}
      </div>
    </div>
  )
}

function EngramCard({ engram }: { 
  engram: {
    id: string
    content: string
    category: string
    emotionScore: number
    importance: number
    crebScore: number
    keywords: string[]
    isStarred: boolean
    rehearsalCount: number
  }
}) {
  const starMutation = trpc.engram.star.useMutation()
  const unstarMutation = trpc.engram.unstar.useMutation()
  const rehearseMutation = trpc.engram.rehearse.useMutation()

  const handleStar = () => {
    if (engram.isStarred) {
      unstarMutation.mutate({ id: engram.id })
    } else {
      starMutation.mutate({ id: engram.id })
    }
  }

  const handleRehearse = () => {
    rehearseMutation.mutate({ id: engram.id })
  }

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
          {engram.category}
        </span>
        <div className="flex gap-2">
          <button
            onClick={handleStar}
            className={`text-sm ${engram.isStarred ? 'text-yellow-500' : 'text-gray-400'}`}
          >
            ⭐
          </button>
          <button
            onClick={handleRehearse}
            className="text-sm text-blue-500 hover:text-blue-700"
          >
            🔄
          </button>
        </div>
      </div>
      
      <p className="text-gray-200 mb-3">{engram.content}</p>
      
      <div className="flex gap-4 text-xs text-gray-500">
        <span>감정: {engram.emotionScore.toFixed(1)}</span>
        <span>중요도: {engram.importance.toFixed(1)}</span>
        <span>CREB: {engram.crebScore.toFixed(1)}</span>
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