import { PROFILE, TERMINAL } from "@/lib/content";

export function TerminalCard() {
  return (
    <div className="overflow-hidden rounded-[14px] border border-border bg-surface shadow-float">
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-[13px]">
        <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" aria-hidden="true" />
        <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" aria-hidden="true" />
        <span className="ml-2 font-mono text-xs text-faint">devin@portfolio — ~/profile</span>
      </div>
      <div className="terminal-scroll overflow-x-auto px-5 py-5 pb-[22px] font-mono text-[13px] leading-[1.95] text-muted">
        <div><span className="text-accent">$</span> whoami</div>
        <div className="text-fg">{PROFILE.name} — {PROFILE.title}</div>
        <div className="mt-2.5"><span className="text-accent">$</span> cat focus.json</div>
        <div><span className="text-faint">{"{"}</span></div>
        <div className="pl-[18px]"><span className="text-accent">{JSON.stringify("systems")}</span>: <span className="text-fg">{JSON.stringify(TERMINAL.systems)}</span>,</div>
        <div className="pl-[18px]"><span className="text-accent">{JSON.stringify("impact")}</span>&nbsp;: <span className="text-fg">{JSON.stringify(TERMINAL.impact)}</span>,</div>
        <div className="pl-[18px]"><span className="text-accent">{JSON.stringify("stack")}</span>&nbsp;&nbsp;: <span className="text-fg">{JSON.stringify(TERMINAL.stack)}</span>,</div>
        <div className="pl-[18px]"><span className="text-accent">{JSON.stringify("uptime")}</span>&nbsp;: <span className="text-fg">{JSON.stringify(TERMINAL.uptime)}</span></div>
        <div><span className="text-faint">{"}"}</span></div>
        <div className="mt-2.5"><span className="text-accent">$</span> <span className="terminal-cursor" aria-hidden="true" /></div>
      </div>
    </div>
  );
}
