"use client";

import { useEffect, useRef, useState } from "react";

const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

export function Counter({
  target,
  prefix,
  suffix,
  decimals,
  start
}: {
  target: number;
  prefix: string;
  suffix: string;
  decimals: number;
  start: boolean;
}) {
  const [value, setValue] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!start && !reduced) return;
    if (reduced) {
      setValue(target);
      return;
    }

    const duration = 1700;
    const started = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - started) / duration);
      setValue(target * easeOutCubic(t));
      if (t < 1) raf.current = window.requestAnimationFrame(step);
    };

    raf.current = window.requestAnimationFrame(step);
    return () => {
      if (raf.current !== null) window.cancelAnimationFrame(raf.current);
    };
  }, [start, target]);

  const formatted = `${prefix}${value.toFixed(decimals)}${suffix}`;
  const finalValue = `${prefix}${target.toFixed(decimals)}${suffix}`;

  return (
    <div
      className="text-[clamp(38px,4.6vw,54px)] font-semibold leading-none tracking-[-.03em] text-fg"
      aria-label={finalValue}
    >
      <span aria-hidden="true">{formatted}</span>
    </div>
  );
}
