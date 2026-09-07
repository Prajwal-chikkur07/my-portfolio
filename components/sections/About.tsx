import { Reveal, RevealItem } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { about, site } from "@/lib/site";
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 pb-24 pt-14 sm:pb-28 sm:pt-16 lg:pb-36 lg:pt-20"
    >
      <div className="shell">
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal stagger={0.08} className="flex flex-col items-start">
              <RevealItem>
                <Eyebrow>About</Eyebrow>
              </RevealItem>
              <RevealItem
                as="h2"
                className="mt-5 text-section font-semibold text-ink"
              >
                <span id="about-heading">
                  Building systems that{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">actually work.</span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-1 z-0 h-[0.36em] bg-gold-200/70"
                    />
                  </span>
                </span>
              </RevealItem>
              <RevealItem className="mt-7 flex items-center gap-2 font-mono text-micro tracking-[0.04em] text-ink-500">
                <MapPin className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
                Originally from {site.hometown}, based in {site.location}
              </RevealItem>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal stagger={0.1} delay={0.06} className="space-y-6">
              {about.paragraphs.map((text, i) => (
                <RevealItem
                  as="p"
                  key={text}
                  className={
                    i === 0
                      ? "text-lead font-medium text-ink"
                      : "text-body leading-[1.8] text-ink-500 sm:text-body"
                  }
                >
                  {text}
                </RevealItem>
              ))}
            </Reveal>
          </div>
        </div>

        {/* Metrics band */}
        <Reveal
          stagger={0.09}
          delay={0.05}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-panel border border-ink/[0.08] bg-ink/[0.07] shadow-soft sm:mt-20 lg:grid-cols-4"
        >
          {about.stats.map((stat) => (
            <RevealItem
              key={stat.label}
              className="group bg-cream px-5 py-8 transition-colors duration-500 hover:bg-white sm:px-7 sm:py-10"
            >
              <p className="font-display text-stat font-semibold text-ink transition-colors duration-500 group-hover:text-teal">
                {stat.value}
              </p>
              <p className="mt-3 max-w-[22ch] font-mono text-micro leading-[1.6] tracking-[0.03em] text-ink-500">
                {stat.label}
              </p>
              {"context" in stat && (
                <p className="mt-1 max-w-[22ch] font-mono text-micro leading-[1.6] tracking-[0.03em] text-ink-300">
                  {stat.context}
                </p>
              )}
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
