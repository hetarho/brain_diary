"use client";

import { EngramGenerator } from "./components/EngramGenerator";
import { useAuth } from "./lib/auth/hooks";
import ThemeSelector from "./components/ThemeSelector";
import Link from "next/link";

export default function Home() {
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
      {/* 헤더 */}
      <header
        className="shadow-sm border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1
                className="text-xl font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Brain Diary
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              {isAuthenticated && user ? (
                <>
                  <Link href="/canvas">
                    <button className="text-sm hover:opacity-80 transition-opacity text-primary">
                      캔버스
                    </button>
                  </Link>
                  <span
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    안녕하세요, {user.name || user.email}님
                  </span>
                  <button
                    onClick={() => logout()}
                    className="text-sm hover:opacity-80 transition-opacity"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    로그아웃
                  </button>
                </>
              ) : (
                <Link
                  href="/auth/signin"
                  className="text-sm hover:opacity-80 transition-opacity"
                  style={{ color: "var(--primary)" }}
                >
                  로그인
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* 테마 선택기 */}
          <div className="mb-8">
            <ThemeSelector />
          </div>

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
