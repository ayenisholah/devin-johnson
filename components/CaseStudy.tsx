import type { CASES } from "@/lib/content";

type CaseStudyItem = (typeof CASES)[number];

export function CaseStudy({ item }: { item: CaseStudyItem }) {
  return (
    <article className="card-hover grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-[clamp(24px,4vw,52px)] rounded-[14px] border border-border bg-surface p-[clamp(24px,3vw,38px)]">
      <div>
        <div className="mb-4 flex items-center gap-2.5 font-mono text-xs">
          <span className="font-semibold text-accent">{item.company}</span>
          <span className="text-faint">·</span>
          <span className="text-faint">{item.period}</span>
        </div>
        <h3 className="m-0 mb-3 text-[clamp(20px,2.4vw,27px)] font-semibold leading-[1.18] tracking-[-.015em] text-fg">
          {item.title}
        </h3>
        <p className="m-0 mb-5 text-pretty text-[15px] leading-[1.7] text-muted">{item.desc}</p>
        <div className="flex flex-wrap gap-[7px]">
          {item.stack.map((tech) => (
            <span key={tech} className="rounded-[5px] border border-border px-[9px] py-[5px] font-mono text-[11.5px] text-muted">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3.5">
        {item.results.map(([value, label], index) => (
          <div key={value} className={`flex items-baseline gap-3.5 ${index > 0 ? "border-t border-border pt-3.5" : ""}`}>
            <span className="min-w-[74px] font-mono text-[22px] font-semibold text-accent">{value}</span>
            <span className="text-sm leading-normal text-muted">{label}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
