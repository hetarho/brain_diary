"use client";

import { Link, useAuth } from "@client/features";
import { EngramGenerator, Header, ThemeSelector } from "@client/widgets";

export default function HomePage() {
  const { user, isLoading, isAuthenticated, logout } = useAuth();

  if (isLoading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "var(--background)" }}
      >
        <div
          className="animate-spin rounded-full h-32 w-32 border-b-2"
          style={{ borderColor: "var(--primary)" }}
        ></div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--background)" }}
    >
      <Header
        isAuthenticated={isAuthenticated}
        user={{ name: user?.name || "", email: user?.email || "" }}
        logout={logout}
      />
      <ThemeSelector />

      {/* 메인 콘텐츠 */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {isAuthenticated ? (
            <div>
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                나의 엔그램
              </h2>
              <EngramGenerator />
            </div>
          ) : (
            <div className="text-center theme-card p-8 rounded-lg">
              <h2
                className="text-3xl font-bold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                뇌과학 기반 일기 앱에 오신 것을 환영합니다
              </h2>
              <p
                className="text-lg mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                로그인하여 AI가 분석하는 당신의 기억을 탐험해보세요
              </p>
              <Link
                href="/auth/signin"
                className="theme-button-primary inline-flex items-center"
              >
                시작하기
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
