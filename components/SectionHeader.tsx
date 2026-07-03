import { Reveal } from "./Reveal";

export function SectionHeader({ idx, label, tight = false }: { idx: string; label: string; tight?: boolean }) {
  return (
    <Reveal className={`flex items-center gap-4 ${tight ? "mb-[14px]" : "mb-10"}`}>
      <span className="font-mono text-xs tracking-[.2em] text-accent">{idx}</span>
      <span className="font-mono text-xs uppercase tracking-[.2em] text-faint">/ {label}</span>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </Reveal>
  );
}
