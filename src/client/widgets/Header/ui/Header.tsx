import { Link } from "@client/shared";

export default function Header({
  isAuthenticated,
  user,
  logout,
}: {
  isAuthenticated: boolean;
  user: {
    name: string;
    email: string;
  };
  logout: () => void;
}) {
  return (
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
              >
                로그인
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
