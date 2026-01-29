"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    // prevents layout shift + hydration mismatch
    return (
      <div className="h-9 w-9 rounded-full border border-border opacity-0" />
    );
  }

  const current = theme === "system" ? systemTheme : theme;
  const isDark = current === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        group inline-flex h-9 w-9 items-center justify-center
        rounded-full border border-border
        bg-background/60 backdrop-blur
        transition
        hover:bg-[rgb(var(--border))]/20
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--foreground))]/20
        active:scale-95
      "
      title={isDark ? "Switch to light" : "Switch to dark"}
    >
      {/* Sun */}
      <span
        className={`
          absolute text-sm transition-transform duration-300
          ${isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}
        `}
      >
        ☀️
      </span>

      {/* Moon */}
      <span
        className={`
          absolute text-sm transition-transform duration-300
          ${isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"}
        `}
      >
        🌙
      </span>
    </button>
  );
}
