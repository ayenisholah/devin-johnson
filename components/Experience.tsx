import { ROLES } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" data-nav="experience" className="section-pad">
      <div className="container-shell">
        <SectionHeader idx="03" label="Experience" />
        <div>
          {ROLES.map((role, index) => (
            <Reveal key={`${role.company}-${role.period}`} delayMs={index * 80}>
              <article className="grid grid-cols-1 gap-5 border-t border-border py-8 md:grid-cols-[minmax(0,180px)_1fr] md:gap-10">
                <div>
                  <div className="font-mono text-xs leading-relaxed text-faint">{role.period}</div>
                  {role.current ? (
                    <div className="mt-3.5 font-mono text-[11px] uppercase tracking-[.12em] text-accent">● CURRENT</div>
                  ) : null}
                </div>
                <div>
                  <h3 className="m-0 mb-2 text-[clamp(18px,2vw,23px)] font-semibold text-fg">{role.title}</h3>
                  <div className="mb-3.5 font-mono text-[13px] text-accent">{role.company}</div>
                  <p className="m-0 mb-3.5 max-w-[66ch] text-pretty text-[14.5px] leading-[1.65] text-muted">{role.summary}</p>
                  <ul className="m-0 flex list-none flex-col gap-[9px] p-0">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-[14.5px] leading-[1.55] text-muted">
                        <span className="shrink-0 font-mono text-accent" aria-hidden="true">▸</span>
                        <span className="text-pretty">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
