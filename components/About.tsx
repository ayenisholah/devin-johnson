import { ABOUT_FACTS, ABOUT_P1, ABOUT_P2, ABOUT_TITLE, FOCUS_CHIPS } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" data-nav="about" className="section-pad">
      <div className="container-shell">
        <SectionHeader idx="01" label="About" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-[clamp(32px,5vw,64px)]">
          <Reveal>
            <h2 className="m-0 mb-6 text-balance text-[clamp(26px,3.6vw,40px)] font-semibold leading-[1.08] tracking-[-.02em] text-fg">
              {ABOUT_TITLE}
            </h2>
            <p className="m-0 mb-[18px] text-pretty text-[clamp(15px,1.3vw,17px)] leading-[1.75] text-muted">{ABOUT_P1}</p>
            <p className="m-0 text-pretty text-[clamp(15px,1.3vw,17px)] leading-[1.75] text-muted">{ABOUT_P2}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {FOCUS_CHIPS.map((chip) => (
                <span key={chip} className="tag-hover rounded-md border border-border px-[11px] py-[7px] font-mono text-xs text-muted">
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="overflow-hidden rounded-[14px] border border-border bg-surface shadow-float">
              <div className="grid aspect-square place-items-center bg-surface-2 font-mono text-xs uppercase tracking-[.16em] text-faint">
                Headshot
              </div>
              <div className="border-t border-border px-[18px] py-[18px] pb-5">
                {ABOUT_FACTS.map(([key, value], index) => (
                  <div key={key} className={`flex justify-between gap-2.5 py-[7px] font-mono text-[12.5px] ${index > 0 ? "border-t border-border" : ""}`}>
                    <span className="text-faint">{key}</span>
                    <span className="text-right text-fg">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
