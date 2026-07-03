"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme !== "light";
  const label = mounted ? (isDark ? "LIGHT" : "DARK") : "LIGHT";

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      title="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="ml-1 inline-flex h-[34px] items-center gap-[7px] rounded-[7px] border border-border bg-transparent px-[11px] font-mono text-[11.5px] tracking-[.08em] text-muted hover:border-border-2 hover:text-fg"
    >
      <span className="h-[9px] w-[9px] rounded-full border-[1.5px] border-accent bg-accent shadow-[inset_-3px_0_0_var(--bg-2)]" aria-hidden="true" />
      {label}
    </button>
  );
}
