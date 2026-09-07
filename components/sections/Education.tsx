import { Award, GraduationCap } from "lucide-react";
import { Reveal, RevealItem } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { certifications, education } from "@/lib/site";

/**
 * Education and Certifications sit side by side, so both are built from the
 * same panel treatment and stretch to a shared height — otherwise the dense
 * degree card visually outweighs the certification list next to it.
 */
export default function Education() {
  return (
    <section
      aria-labelledby="education-heading"
      className="border-t border-ink/[0.07] py-24 sm:py-28 lg:py-32"
    >
      <div className="shell grid items-stretch gap-10 lg:grid-cols-2 lg:gap-8">
        {/* ---------------- Education ---------------- */}
        <Reveal stagger={0.08} className="flex flex-col">
          <RevealItem>
            <Eyebrow>Education</Eyebrow>
          </RevealItem>
          <RevealItem as="h2" className="mt-5 text-section font-semibold text-ink">
            <span id="education-heading">Education.</span>
          </RevealItem>

          <RevealItem className="mt-8 flex flex-1 flex-col rounded-panel border border-ink/[0.08] bg-white/75 p-6 shadow-soft sm:p-8">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="text-title font-semibold text-ink">
                  {education.degree}
                </h3>
                <p className="mt-2 text-body text-ink-500">{education.institution}</p>
              </div>
            </div>

            <div className="mt-auto flex flex-wrap items-end justify-between gap-6 pt-8">
              <p className="font-mono text-micro tracking-[0.04em] text-ink-300">
                {education.duration}
              </p>
              <div className="rounded-2xl border border-gold/30 bg-gold-50 px-5 py-3.5">
                <p className="font-display text-head font-semibold text-gold">
                  {education.cgpa}
                </p>
                <p className="mt-1.5 font-mono text-micro uppercase tracking-[0.14em] text-[#8a5f06]">
                  CGPA
                </p>
              </div>
            </div>
          </RevealItem>
        </Reveal>

        {/* ---------------- Certifications ---------------- */}
        <Reveal stagger={0.08} delay={0.08} className="flex flex-col">
          <RevealItem>
            <Eyebrow>Certifications</Eyebrow>
          </RevealItem>
          <RevealItem as="h2" className="mt-5 text-section font-semibold text-ink">
            Certifications.
          </RevealItem>

          <RevealItem className="mt-8 flex flex-1 flex-col rounded-panel border border-ink/[0.08] bg-white/75 p-6 shadow-soft sm:p-8">
            <ul className="flex flex-1 flex-col justify-center divide-y divide-ink/[0.07]">
              {certifications.map((cert) => (
                <li key={cert.title} className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cream-200 text-ink-700 transition-colors duration-400 group-hover:bg-teal-50 group-hover:text-teal">
                    <Award className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-body font-semibold leading-snug text-ink">
                      {cert.title}
                    </span>
                    <span className="mt-1 block font-mono text-micro tracking-[0.04em] text-ink-300">
                      {cert.issuer}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
