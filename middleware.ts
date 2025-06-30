export { auth as middleware } from '@/src/server/lib/auth/config'

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
} 