"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeSelector = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="p-6 theme-card rounded-lg">
      <h2
        className="text-xl font-bold mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        테마 선택
      </h2>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          className="theme-button-primary"
          onClick={() => setTheme("pastel")}
        >
          파스텔
        </button>
        <button
          className="theme-button-secondary"
          onClick={() => setTheme("bright-palette")}
        >
          라이트
        </button>
        <button
          className="px-6 py-3 rounded-lg font-medium transition-all"
          style={{
            backgroundColor: "var(--muted)",
            color: "var(--text-primary)",
            border: "1px solid var(--border)",
          }}
          onClick={() => setTheme("dark-palette")}
        >
          다크
        </button>
      </div>
    </div>
  );
};

export default ThemeSelector;
