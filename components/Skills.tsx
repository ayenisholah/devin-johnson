import { SKILLS } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section id="skills" data-nav="skills" className="section-pad border-y border-border bg-bg-2">
      <div className="container-shell">
        <SectionHeader idx="04" label="Skills & stack" tight />
        <Reveal>
          <h2 className="m-0 mb-10 text-[clamp(24px,3.4vw,38px)] font-semibold tracking-[-.02em] text-fg">
            The toolkit, end to end.
          </h2>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
          {SKILLS.map((group) => (
            <Reveal key={group.idx}>
              <div className="rounded-xl border border-border bg-surface px-[22px] py-[22px] pb-6">
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="font-mono text-[11px] text-accent">{group.idx}</span>
                  <span className="font-mono text-[12.5px] uppercase tracking-[.08em] text-fg">{group.label}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag-hover cursor-default rounded-md border border-border px-2.5 py-1.5 font-mono text-xs text-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
