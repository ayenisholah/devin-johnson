import { CONTACT_BODY, CONTACT_TITLE, PROFILE } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <section id="contact" data-nav="contact" className="section-pad-contact">
      <div className="container-shell">
        <SectionHeader idx="05" label="Contact" />
        <Reveal>
          <h2 className="m-0 mb-2.5 text-balance text-[clamp(32px,5.4vw,62px)] font-semibold leading-[1.05] tracking-[-.025em] text-fg">
            {CONTACT_TITLE.replace("scales.", "")}<span className="text-accent">scales</span>.
          </h2>
        </Reveal>
        <Reveal>
          <p className="m-0 mb-10 max-w-[56ch] text-pretty text-[clamp(15px,1.35vw,17.5px)] leading-[1.7] text-muted">{CONTACT_BODY}</p>
        </Reveal>
        <Reveal>
          <a
            href={`mailto:${PROFILE.email}`}
            className="text-link inline-block border-b-2 border-border pb-1.5 font-mono text-[clamp(20px,3.6vw,40px)] font-medium tracking-[-.01em] text-fg no-underline"
          >
            {PROFILE.email}
          </a>
        </Reveal>
        <Reveal>
          <div className="mt-11 flex flex-wrap gap-3">
            <a href={`mailto:${PROFILE.email}`} className="button-primary inline-flex items-center gap-[9px] rounded-[9px] border border-accent bg-accent px-[18px] py-[13px] font-mono text-[13px] font-semibold text-accent-contrast no-underline">
              Email me →
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="button-outline inline-flex items-center gap-[9px] rounded-[9px] border border-border-2 bg-transparent px-[18px] py-[13px] font-mono text-[13px] font-medium text-fg no-underline">
              LinkedIn ↗
            </a>
            <a href={PROFILE.phoneHref} className="button-outline inline-flex items-center gap-[9px] rounded-[9px] border border-border-2 bg-transparent px-[18px] py-[13px] font-mono text-[13px] font-medium text-fg no-underline">
              {PROFILE.phone}
            </a>
            <a href={PROFILE.resume} download className="button-outline inline-flex items-center gap-[9px] rounded-[9px] border border-border-2 bg-transparent px-[18px] py-[13px] font-mono text-[13px] font-medium text-fg no-underline">
              Résumé ↓
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
