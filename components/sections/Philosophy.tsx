import { Reveal, RevealItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { philosophy } from "@/lib/site";

const ACCENTS = [
  "text-teal",
  "text-gold",
  "text-teal",
  "text-gold",
] as const;

export default function Philosophy() {
  return (
    <section
      aria-labelledby="philosophy-heading"
      className="relative overflow-hidden border-y border-ink/[0.07] bg-cream-100/60 py-24 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55] [background-image:radial-gradient(rgba(20,41,58,0.09)_1px,transparent_1px)] [background-size:26px_26px]"
      />
      <div className="shell relative">
        <SectionHeader
          eyebrow="Principles"
          title={<span id="philosophy-heading">How I think about engineering.</span>}
          align="center"
        />

        <Reveal
          stagger={0.09}
          delay={0.05}
          className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4"
        >
          {philosophy.map((item, i) => (
            <RevealItem
              key={item.index}
              as="article"
              className="group relative flex flex-col rounded-panel border border-ink/[0.08] bg-cream p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-lift"
            >
              <span
                className={`font-mono text-micro font-medium tracking-[0.18em] ${ACCENTS[i]}`}
              >
                {item.index}
              </span>
              <h3 className="mt-5 text-title font-semibold leading-tight tracking-[-0.02em] text-ink">
                {item.title}
              </h3>
              <p className="mt-3.5 text-small leading-[1.7] text-ink-500">
                {item.body}
              </p>
              <span
                aria-hidden="true"
                className={`mt-6 h-px w-10 origin-left scale-x-100 bg-current transition-transform duration-500 group-hover:scale-x-[2.4] ${ACCENTS[i]} opacity-50`}
              />
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
