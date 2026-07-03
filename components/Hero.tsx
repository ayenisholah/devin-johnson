import { HERO_BODY, HERO_KICKER, HERO_LEAD, PROFILE } from "@/lib/content";
import { Reveal } from "./Reveal";
import { TerminalCard } from "./TerminalCard";
import { Typewriter } from "./Typewriter";

export function Hero() {
  return (
    <section id="top" className="hero-grid relative py-[clamp(56px,9vh,104px)] pb-[clamp(40px,6vh,64px)]">
      <div className="container-shell relative flex flex-wrap items-center gap-[clamp(36px,5vw,64px)]">
        <div className="min-w-[min(100%,440px)] flex-1 basis-[440px]">
          {PROFILE.available ? (
            <Reveal>
              <div className="mb-[26px] inline-flex items-center gap-[9px] rounded-full border border-border bg-surface px-3.5 py-[7px]">
                <span className="status-dot h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                <span className="font-mono text-[11px] uppercase tracking-[.16em] text-muted">Available for senior AI roles</span>
              </div>
            </Reveal>
          ) : null}

          <Reveal className="mb-[18px] font-mono text-[12.5px] uppercase tracking-[.2em] text-accent">
            {HERO_KICKER}
          </Reveal>

          <Reveal>
            <h1 className="m-0 text-balance text-[clamp(38px,6.2vw,72px)] font-semibold leading-[1.03] tracking-[-.025em] text-fg">
              {HERO_LEAD}
              <Typewriter />
            </h1>
          </Reveal>

          <Reveal>
            <p className="m-0 mt-[26px] max-w-[60ch] text-pretty text-[clamp(15px,1.35vw,17.5px)] leading-[1.72] text-muted">
              {HERO_BODY}
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-[34px] flex flex-wrap gap-3">
              <a href="#work" className="button-primary inline-flex items-center gap-2.5 rounded-[9px] border border-accent bg-accent px-5 py-3.5 font-mono text-[13px] font-semibold tracking-[.02em] text-accent-contrast no-underline">
                View selected work →
              </a>
              <a href="#contact" className="button-outline inline-flex items-center gap-2.5 rounded-[9px] border border-border-2 bg-transparent px-5 py-3.5 font-mono text-[13px] font-medium tracking-[.02em] text-fg no-underline">
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="min-w-[min(100%,340px)] flex-1 basis-[380px]">
          <TerminalCard />
        </Reveal>
      </div>
    </section>
  );
}
