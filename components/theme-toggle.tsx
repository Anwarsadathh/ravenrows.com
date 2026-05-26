"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-white/70 text-[var(--foreground)] transition hover:scale-[1.03] hover:bg-white dark:bg-white/5"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}