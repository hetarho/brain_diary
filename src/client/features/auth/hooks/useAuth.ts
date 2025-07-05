"use client";

import {
  useSession as useNextAuthSession,
  signIn as nextAuthSignIn,
  signOut as nextAuthSignOut,
} from "next-auth/react";

export default function useAuth() {
  const { data: session, status } = useNextAuthSession();

  return {
    user: session?.user || null,
    isLoading: status === "loading",
    login: () => nextAuthSignIn("google"),
    logout: () => nextAuthSignOut(),
    isAuthenticated: !!session?.user,
  };
}
