'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { trpc } from '../../server/trpc/client'

interface User {
  id: string
  name: string
  email: string
  provider: string
  providerId: string
  avatar?: string | null
  createdAt: Date | string
  updatedAt: Date | string
}

interface UserContextType {
  user: User | null
  isLoading: boolean
  login: () => Promise<void>
  logout: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // tRPC 훅
  const createTestUser = trpc.engram.createTestUser.useMutation()

  const login = async () => {
    console.log('🔐 UserContext: 로그인 시작')
    setIsLoading(true)
    
    try {
      console.log('📤 UserContext: 테스트 사용자 생성/조회 중...')
      
      const userData = await createTestUser.mutateAsync({
        name: '테스트 사용자',
        email: 'test@example.com'
      })
      
      console.log('✅ UserContext: 로그인 성공:', userData)
      setUser(userData)
    } catch (error) {
      console.error('❌ UserContext: 로그인 실패:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    console.log('🚪 UserContext: 로그아웃')
    setUser(null)
  }

  // 컴포넌트 마운트 시 자동 로그인
  useEffect(() => {
    console.log('🚀 UserContext: 자동 로그인 시도')
    login()
  }, []) // 빈 의존성 배열로 한 번만 실행
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <UserContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
} 