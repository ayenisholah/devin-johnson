"use client";

import { useEffect, useState } from "react";
import { PROFILE } from "@/lib/content";
import { ThemeToggle } from "./ThemeToggle";

const LINKS = [
  ["about", "about"],
  ["work", "work"],
  ["experience", "experience"],
  ["skills", "skills"],
  ["contact", "contact"]
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        setScrolled((window.scrollY || window.pageYOffset || 0) > 8);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[data-nav]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.getAttribute("data-nav") ?? "");
        });
      },
      { threshold: 0, rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur-[14px] ${
        scrolled ? "border-border shadow-[0_14px_34px_-28px_rgba(0,0,0,.8)]" : "border-transparent"
      }`}
      style={{
        background: scrolled
          ? "color-mix(in srgb, var(--bg) 80%, transparent)"
          : "color-mix(in srgb, var(--bg) 60%, transparent)"
      }}
    >
      <div className="container-shell flex h-[66px] items-center justify-between gap-6">
        <a href="#top" className="flex shrink-0 items-center gap-3 text-fg no-underline">
          <span className="grid h-[34px] w-[34px] place-items-center rounded-lg border border-border-2 font-mono text-sm font-semibold text-accent">
            DJ
          </span>
          <span className="font-mono text-sm font-medium tracking-[.02em]">devin.johnson</span>
        </a>

        <div className="flex flex-wrap items-center justify-end gap-1.5">
          {LINKS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-md px-3 py-2 font-mono text-[12.5px] tracking-[.04em] no-underline hover:text-fg ${
                active === id ? "nav-active" : "text-muted"
              }`}
            >
              {label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href={PROFILE.resume}
            download
            className="button-primary ml-0.5 inline-flex h-[34px] items-center gap-2 rounded-[7px] border border-accent bg-accent px-3.5 font-mono text-xs font-semibold tracking-[.02em] text-accent-contrast no-underline"
          >
            résumé ↓
          </a>
        </div>
      </div>
    </nav>
  );
}
