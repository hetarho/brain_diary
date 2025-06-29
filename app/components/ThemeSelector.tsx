"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@/src/shared";

const ThemeSelector = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme: currentTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">테마 선택</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {[
          { name: "rainbow", label: "레인보우" },
          { name: "ocean", label: "오션" },
          { name: "midnight", label: "미드나잇" },
          { name: "blossom", label: "블러썸" },
        ].map((theme) => (
          <Button
            key={theme.name}
            variant={theme.name === currentTheme ? "default" : "secondary"}
            onClick={() => setTheme(theme.name)}
          >
            {theme.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
