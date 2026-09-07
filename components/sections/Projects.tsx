"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Reveal, RevealItem } from "@/components/Reveal";
import { Chip } from "@/components/ui/Chip";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.1c-3.16.69-3.83-1.36-3.83-1.36-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.65 1.24 3.3.95.1-.73.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.13 1.16a10.9 10.9 0 0 1 5.7 0c2.17-1.47 3.13-1.16 3.13-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55 4.51-1.5 7.77-5.76 7.77-10.78C23.25 5.48 18.27.5 12 .5Z" />
    </svg>
  );
}

export default function Projects() {
  const [open, setOpen] = useState<string | null>(projects[0].name);
  const reduce = useReducedMotion();

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-24 sm:py-28 lg:py-32">
      <div className="shell">
        <SectionHeader
          eyebrow="Selected work"
          title={<span id="projects-heading">Some things I&rsquo;ve built.</span>}
          lead="Personal builds exploring retrieval-augmented generation, conversational AI and tool-using agents."
        />

        <Reveal className="mt-14 space-y-5 sm:mt-16" stagger={0.1}>
          {projects.map((project) => {
            const isOpen = open === project.name;
            const panelId = `project-${project.index}-details`;

            return (
              <RevealItem
                key={project.name}
                as="article"
                className="group relative overflow-hidden rounded-panel border border-ink/[0.08] bg-white/70 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-teal/20 hover:bg-white hover:shadow-lift"
              >
                {/* Hover wash */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_92%_10%,rgba(47,147,130,0.09),transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />

                {/* Oversized index, set as a watermark */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-6 right-4 select-none font-display text-hero font-semibold leading-none tracking-[-0.05em] text-ink/[0.045] transition-all duration-700 group-hover:text-teal/[0.07] lg:right-8"
                >
                  {project.index}
                </span>

                <div className="relative p-6 sm:p-8">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="min-w-0">
                      <span className="font-mono text-micro tracking-[0.18em] text-teal">
                        {project.index}
                      </span>
                      <h3 className="mt-2.5 font-display text-head font-semibold leading-[1.15] tracking-[-0.025em] text-ink sm:text-head">
                        {project.name}
                      </h3>
                      <p className="mt-2 font-mono text-micro tracking-[0.06em] text-gold">
                        {project.subtitle}
                      </p>
                      <p className="mt-5 max-w-2xl text-body leading-[1.75] text-ink-500">
                        {project.description}
                      </p>

                      <ul className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <li key={tag}>
                            <Chip tone={tag === "RAG" || tag === "MCP" ? "teal" : "plain"}>
                              {tag}
                            </Chip>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-3 md:flex-col-reverse md:items-end">
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : project.name)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-cream/70 px-4 py-2.5 text-label font-semibold text-ink transition-all duration-300 hover:border-teal/35 hover:bg-teal-50 hover:text-teal-700"
                      >
                        {isOpen ? (
                          <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                        ) : (
                          <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                        )}
                        {isOpen ? "Hide details" : "Key features"}
                      </button>

                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-white/70 px-4 py-2.5 text-label font-semibold text-ink transition-all duration-300 hover:border-teal/35 hover:bg-teal-50 hover:text-teal-700"
                        >
                          <GithubIcon className="h-3.5 w-3.5" />
                          GitHub
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={panelId}
                        key="panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="mt-7 border-t border-dashed border-ink/12 pt-6">
                          <p className="font-mono text-micro uppercase tracking-[0.18em] text-ink-300">
                            Key features
                          </p>
                          <ul className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
                            {project.features.map((feature, i) => (
                              <motion.li
                                key={feature}
                                initial={reduce ? undefined : { opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.35, delay: i * 0.04, ease: EASE }}
                                className="flex items-baseline gap-3 text-small text-ink-700"
                              >
                                <span
                                  aria-hidden="true"
                                  className="h-1.5 w-1.5 shrink-0 translate-y-[-0.1rem] rotate-45 bg-gold"
                                />
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </RevealItem>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
