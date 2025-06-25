import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt", // Edge runtime 호환성을 위해 JWT 전략 사용
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    // 권한 확인만 담당 (true/false 반환)
    authorized: async ({ auth }) => {
      const isLoggedIn = !!auth?.user;
      if (!isLoggedIn) {
        return false;
      }

      return true;
    },

    // 리다이렉트 로직 담당
    redirect: async ({ url, baseUrl }) => {
      // 상대 경로면 baseUrl과 결합
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`;
      }

      // 같은 도메인이면 허용
      if (new URL(url).origin === baseUrl) {
        return url;
      }

      // 다른 도메인이면 홈으로
      return baseUrl;
    },

    async signIn({ user, account }) {
      // PrismaAdapter가 자동으로 User/Account를 생성하므로 별도 로직 불필요
      // 필요하다면 여기서 추가 검증 로직 추가 가능
      console.log(`🔐 로그인: ${user.email} via ${account?.provider}`);
      return true;
    },
    async jwt({ token, user, trigger }) {
      // 첫 로그인 시에만 user 정보가 있음
      if (user) {
        // PrismaAdapter에 의해 이미 생성된 사용자의 ID를 토큰에 추가
        token.id = user.id;
      }

      // 토큰 업데이트 시 (세션 갱신) 사용자 정보 유지
      if (trigger === "update" && token.id) {
        try {
          // 필요시 최신 사용자 정보 조회
          const dbUser = await prisma.user.findUnique({
            where: { id: token.id as string },
          });
          if (dbUser) {
            token.name = dbUser.name;
            token.email = dbUser.email;
            token.picture = dbUser.image;
          }
        } catch (error) {
          console.error("사용자 정보 조회 오류:", error);
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (session?.user && token) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  events: {
    async createUser({ user }) {
      console.log(`🎉 새 사용자 생성: ${user.email}`);
    },
    async signIn({ user, account }) {
      console.log(`✅ 로그인 완료: ${user.email} via ${account?.provider}`);
    },
  },
});

// NextAuth 타입 확장
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
