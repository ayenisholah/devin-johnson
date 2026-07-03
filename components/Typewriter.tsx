"use client";

import { useEffect, useState } from "react";
import { WORDS } from "@/lib/content";

export function Typewriter() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setTyped(WORDS[0]);
      return;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer = 0;

    const tick = () => {
      const full = WORDS[wordIndex];

      if (!deleting) {
        charIndex += 1;
        setTyped(full.slice(0, charIndex));
        if (charIndex >= full.length) {
          deleting = true;
          timer = window.setTimeout(tick, 1600);
          return;
        }
        timer = window.setTimeout(tick, 78);
        return;
      }

      charIndex -= 1;
      setTyped(full.slice(0, charIndex));
      if (charIndex <= 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % WORDS.length;
        timer = window.setTimeout(tick, 280);
        return;
      }
      timer = window.setTimeout(tick, 40);
    };

    timer = window.setTimeout(tick, 750);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <span className="mt-1.5 block text-accent">
      {typed}
      <span className="type-cursor" aria-hidden="true" />
    </span>
  );
}
