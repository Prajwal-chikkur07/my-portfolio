"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Building2, CalendarDays, Check, ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";
import { Reveal, RevealItem } from "@/components/Reveal";
import AiPipeline from "@/components/ui/AiPipeline";
import { Chip } from "@/components/ui/Chip";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experience } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  const [open, setOpen] = useState<string | null>(experience.projects[0].name);
  const reduce = useReducedMotion();

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative border-t border-ink/[0.07] bg-cream-100/50 pb-14 pt-12 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16"
    >
      <div className="shell">
        <SectionHeader
          eyebrow="Current role"
          title={<span id="experience-heading">Experience.</span>}
          lead="Backend, AI and automation work shipped to production."
        />

        <div className="relative mt-14 sm:mt-16">
          {/* Timeline rail */}
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-3 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-teal/45 via-ink/12 to-transparent sm:block"
          />

          <Reveal className="relative sm:pl-12" stagger={0.1}>
            {/* Node */}
            <span
              aria-hidden="true"
              className="absolute left-0 top-2.5 hidden h-4 w-4 items-center justify-center rounded-full border-2 border-teal bg-cream sm:flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            </span>

            {/* Employer — the parent level: no card, larger type */}
            <RevealItem>
              <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5 border-b border-ink/12 pb-7">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal text-cream shadow-soft">
                    <Building2 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-stat font-semibold leading-none tracking-[-0.03em] text-ink">
                      {experience.company}
                    </h3>
                    <p className="mt-2.5 font-mono text-micro uppercase tracking-[0.16em] text-teal">
                      {experience.role}
                    </p>
                  </div>
                </div>

                <dl className="flex flex-col gap-2 font-mono text-micro tracking-[0.04em] text-ink-500 sm:items-end">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-3.5 w-3.5 text-ink-300" aria-hidden="true" />
                    <dt className="sr-only">Duration</dt>
                    <dd>{experience.duration}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-ink-300" aria-hidden="true" />
                    <dt className="sr-only">Location</dt>
                    <dd>{experience.location}</dd>
                  </div>
                </dl>
              </div>
            </RevealItem>

            {/* Nested project accordions — click a name to open the detail */}
            <RevealItem>
              <p className="mt-8 font-mono text-micro uppercase tracking-[0.18em] text-ink-300">
                Projects
              </p>
            </RevealItem>

            <div className="mt-4 space-y-3.5">
              {experience.projects.map((project) => {
                const isOpen = open === project.name;
                const panelId = `experience-${project.index}-panel`;

                return (
                  <RevealItem
                    key={project.name}
                    as="article"
                    className={`group relative rounded-card border transition-all duration-[400ms] ${
                      isOpen
                        ? "border-teal/25 bg-white shadow-soft"
                        : "border-ink/[0.08] bg-white/55 hover:border-teal/20 hover:bg-white/80"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-[2.8rem] top-8 hidden h-2 w-2 rounded-full bg-teal/45 ring-4 ring-cream-100 sm:block"
                    />

                    {/* Trigger */}
                    <h4>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : project.name)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="flex w-full items-center justify-between gap-5 rounded-card px-5 py-5 text-left sm:px-6"
                      >
                        <span className="min-w-0">
                          <span className="flex items-baseline gap-3">
                            <span
                              aria-hidden="true"
                              className="font-mono text-micro tracking-[0.18em] text-ink-300"
                            >
                              {project.index}
                            </span>
                            <span className="font-display text-title font-semibold tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-teal-700">
                              {project.name}
                            </span>
                          </span>
                          <span className="mt-1.5 block pl-[2.1rem] font-mono text-micro tracking-[0.06em] text-gold">
                            {project.subtitle}
                          </span>
                        </span>

                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/12 bg-cream/70 text-ink-700 transition-colors duration-300 group-hover:border-teal/35 group-hover:text-teal">
                          <motion.span
                            className="inline-flex"
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: reduce ? 0 : 0.35, ease: EASE }}
                          >
                            <ChevronDown className="h-4 w-4" aria-hidden="true" />
                          </motion.span>
                        </span>
                      </button>
                    </h4>

                    {/* Panel */}
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          id={panelId}
                          key="panel"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: reduce ? 0 : 0.42, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-x-10 gap-y-8 border-t border-dashed border-ink/12 px-5 pb-6 pt-6 sm:px-6 lg:grid-cols-12">
                            {/* Left: narrative */}
                            <div className="lg:col-span-7">
                              <p className="max-w-xl text-body leading-[1.75] text-ink-700">
                                {project.description}
                              </p>

                              <ul className="mt-7 space-y-3">
                                {project.contributions.map((point) => (
                                  <li key={point} className="flex gap-3">
                                    <span
                                      aria-hidden="true"
                                      className="mt-[0.3rem] inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal"
                                    >
                                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                                    </span>
                                    <span className="text-small leading-[1.7] text-ink-500">
                                      {point}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Right: stack + diagram */}
                            <div className="lg:col-span-5">
                              <p className="font-mono text-micro uppercase tracking-[0.18em] text-ink-300">
                                Stack
                              </p>
                              <ul className="mt-3.5 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                  <li key={tag}>
                                    <Chip tone={tag === "GenAI" ? "gold" : "plain"}>{tag}</Chip>
                                  </li>
                                ))}
                              </ul>

                              {project.metrics.length > 0 ? (
                                <div className="mt-7">
                                  <p className="font-mono text-micro uppercase tracking-[0.18em] text-ink-300">
                                    Impact
                                  </p>
                                  <div className="mt-3.5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                                    {project.metrics.map((metric, i) => (
                                      <div
                                        key={metric.label}
                                        className={`rounded-card border px-5 py-5 ${
                                          i === 0
                                            ? "border-teal/25 bg-teal-50"
                                            : "border-gold/30 bg-gold-50"
                                        }`}
                                      >
                                        <p
                                          className={`font-display text-head font-semibold leading-none tracking-[-0.04em] ${
                                            i === 0 ? "text-teal" : "text-gold"
                                          }`}
                                        >
                                          {metric.value}
                                        </p>
                                        <p className="mt-2.5 text-label font-medium leading-snug text-ink-700">
                                          {metric.label}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ) : null}

                              {project.name === "Sprout" ? (
                                <div className="mt-7">
                                  <AiPipeline />
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </RevealItem>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
