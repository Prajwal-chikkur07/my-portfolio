"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Boxes, Braces, Cloud, FlaskConical, LayoutPanelLeft, Sparkles } from "lucide-react";
import { Reveal, RevealItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillGroups } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const META = {
  programming: { icon: Braces, accent: "text-teal", ring: "group-hover:border-teal/30" },
  backend: { icon: Boxes, accent: "text-teal", ring: "group-hover:border-teal/30" },
  infra: { icon: Cloud, accent: "text-ink-700", ring: "group-hover:border-ink/25" },
  genai: { icon: Sparkles, accent: "text-gold", ring: "group-hover:border-gold/40" },
  testing: { icon: FlaskConical, accent: "text-teal", ring: "group-hover:border-teal/30" },
  frontend: { icon: LayoutPanelLeft, accent: "text-teal", ring: "group-hover:border-teal/30" },
} as const;

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-24 sm:py-28 lg:py-32">
      <div className="shell">
        <SectionHeader
          eyebrow="Skills"
          title={<span id="skills-heading">Tools I build with.</span>}
          lead="The stack behind the backend services, AI pipelines and automation work — grouped by where it sits in a system."
        />

        <div className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((group, groupIndex) => {
            const meta = META[group.id];
            const Icon = meta.icon;
            /* Row one pairs the short list with the wide one; row two runs in thirds. */
            const span = groupIndex === 1 ? "lg:col-span-4" : "lg:col-span-2";

            return (
              <Reveal
                key={group.id}
                as="article"
                delay={groupIndex * 0.06}
                stagger={0.03}
                amount={0.15}
                className={`group relative flex flex-col rounded-panel border border-ink/[0.08] bg-white/70 p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-lift sm:p-7 ${meta.ring} ${span}`}
              >
                <RevealItem className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-ink/[0.08] bg-cream-100 transition-colors duration-500 group-hover:bg-cream-200">
                    <Icon className={`h-[18px] w-[18px] ${meta.accent}`} aria-hidden="true" />
                  </span>
                  <h3 className="text-title font-semibold tracking-[-0.015em] text-ink">
                    {group.title}
                  </h3>
                  {/* Sequential card index — an item count here read as a broken sequence */}
                  <span className="ml-auto font-mono text-micro text-ink-300">
                    {String(groupIndex + 1).padStart(2, "0")}
                  </span>
                </RevealItem>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <motion.li
                      key={item}
                      variants={{
                        hidden: { opacity: 0, y: 10, scale: 0.96 },
                        show: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: { duration: 0.4, ease: EASE, delay: i * 0.022 },
                        },
                      }}
                    >
                      <motion.span
                        whileHover={reduce ? undefined : { y: -2 }}
                        transition={{ duration: 0.2 }}
                        className="inline-flex cursor-default items-center rounded-chip border border-ink/[0.09] bg-cream/80 px-3 py-1.5 text-label font-medium text-ink-700 transition-colors duration-300 hover:border-teal/35 hover:bg-teal-50 hover:text-teal-700"
                      >
                        {item}
                      </motion.span>
                    </motion.li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
