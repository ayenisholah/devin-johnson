import { CASES } from "@/lib/content";
import { CaseStudy } from "./CaseStudy";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Work() {
  return (
    <section id="work" data-nav="work" className="section-pad border-y border-border bg-bg-2">
      <div className="container-shell">
        <SectionHeader idx="02" label="Selected work" tight />
        <Reveal>
          <h2 className="m-0 mb-10 text-[clamp(24px,3.4vw,38px)] font-semibold tracking-[-.02em] text-fg">
            Systems shipped to production.
          </h2>
        </Reveal>
        <div className="flex flex-col gap-5">
          {CASES.map((item) => (
            <Reveal key={item.company}>
              <CaseStudy item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
