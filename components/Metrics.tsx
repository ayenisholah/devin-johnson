"use client";

import { useEffect, useRef, useState } from "react";
import { METRICS } from "@/lib/content";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

export function Metrics() {
  const ref = useRef<HTMLElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      setStart(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-y border-border bg-bg-2" aria-label="Impact metrics">
      <div className="container-shell grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))]">
        {METRICS.map((metric, index) => (
          <Reveal key={metric.label} delayMs={index * 80}>
            <div className={`border-l border-t-2 border-l-border border-t-accent px-[26px] py-[clamp(30px,4vw,44px)] ${index === METRICS.length - 1 ? "border-r border-r-border" : ""}`}>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[.16em] text-faint">{metric.label}</div>
              <Counter start={start} target={metric.target} prefix={metric.prefix} suffix={metric.suffix} decimals={metric.decimals} />
              <div className="mt-3 font-mono text-xs text-muted">{metric.note}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
