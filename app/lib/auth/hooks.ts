'use client'

import { useSession as useNextAuthSession, signIn as nextAuthSignIn, signOut as nextAuthSignOut } from "next-auth/react"

// NextAuth v5 표준 인증 훅
export function useAuth() {
  const { data: session, status } = useNextAuthSession()
  
  return {
    user: session?.user || null,
    isLoading: status === "loading",
    login: () => nextAuthSignIn("google"),
    logout: () => nextAuthSignOut(),
    isAuthenticated: !!session?.user,
  }
}

// 직접 next-auth 훅들도 export
export const useSession = useNextAuthSession
export const signIn = nextAuthSignIn  
export const signOut = nextAuthSignOut 