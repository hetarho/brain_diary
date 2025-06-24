"use client";

import { EngramGenerator } from "./components/EngramGenerator";
import { useAuth } from "./lib/auth/hooks";
import Link from "next/link";

export default function Home() {
  const { user, isLoading, isAuthenticated, logout } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* 헤더 */}
      <header className=" shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-50">
                Brain Diary
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              {isAuthenticated && user ? (
                <>
                  <span className="text-sm text-gray-200">
                    안녕하세요, {user.name || user.email}님
                  </span>
                  <button
                    onClick={() => logout()}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    로그아웃
                  </button>
                </>
              ) : (
                <Link
                  href="/auth/signin"
                  className="text-sm text-blue-600 hover:text-blue-800"
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
          {isAuthenticated ? (
            <EngramGenerator />
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-50 mb-4">
                뇌과학 기반 일기 앱에 오신 것을 환영합니다
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                로그인하여 AI가 분석하는 당신의 기억을 탐험해보세요
              </p>
              <Link
                href="/auth/signin"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
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
