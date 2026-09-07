"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowDown,
  Cpu,
  MousePointerClick,
  Route,
  Send,
  Workflow,
} from "lucide-react";
import { useState } from "react";
import { aiPipeline } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const ICONS = {
  request: Send,
  router: Route,
  models: Cpu,
  processing: Workflow,
  observability: Activity,
} as const;

const MODELS = ["Claude", "Gemini", "Sarvam"] as const;

/**
 * Interactive walk-through of Sprout's model-routing path.
 *
 * The detail copy lives in a fixed-height panel below the stage list rather
 * than inside the rows: expanding in place would reflow the list under the
 * pointer and make hovering fight itself.
 */
export default function AiPipeline() {
  const [activeId, setActiveId] = useState<string>("router");
  const reduce = useReducedMotion();
  const active = aiPipeline.find((s) => s.id === activeId) ?? aiPipeline[0];

  return (
    <div className="rounded-panel border border-ink/[0.08] bg-cream-100/70 p-5 sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <h5 className="font-mono text-micro tracking-[0.06em] text-teal">
          AI Infrastructure
        </h5>
        {/* Reads as a control, not a caption — the diagram's interactivity was easy to miss */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/25 bg-teal-50 px-2.5 py-1 font-mono text-micro tracking-[0.04em] text-teal-700">
          <MousePointerClick className="h-3 w-3" aria-hidden="true" />
          Select a stage
        </span>
      </div>

      <ol className="mt-5">
        {aiPipeline.map((stage, i) => {
          const Icon = ICONS[stage.id];
          const isActive = activeId === stage.id;
          const isLast = i === aiPipeline.length - 1;

          return (
            <li key={stage.id}>
              <button
                type="button"
                onClick={() => setActiveId(stage.id)}
                onMouseEnter={() => setActiveId(stage.id)}
                onFocus={() => setActiveId(stage.id)}
                aria-pressed={isActive}
                className={`flex w-full items-center gap-3.5 rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${
                  isActive
                    ? "border-teal/30 bg-white shadow-soft"
                    : "border-transparent bg-white/45 hover:border-ink/10 hover:bg-white/80"
                }`}
              >
                <span
                  className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                    isActive ? "bg-teal text-cream" : "bg-cream-200 text-ink-500"
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>

                <span
                  className={`min-w-0 flex-1 truncate text-small font-semibold tracking-[-0.01em] transition-colors duration-300 ${
                    isActive ? "text-ink" : "text-ink-700"
                  }`}
                >
                  {stage.title}
                </span>

                <span className="font-mono text-micro tracking-[0.14em] text-ink-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>

              {!isLast ? (
                <div className="flex h-5 items-center pl-[1.15rem]">
                  <span
                    aria-hidden="true"
                    className={`h-full w-px transition-colors duration-300 ${
                      isActive ? "bg-teal/45" : "bg-ink/12"
                    }`}
                  />
                  <ArrowDown
                    className={`h-3 w-3 -translate-x-[0.42rem] transition-colors duration-300 ${
                      isActive ? "text-teal/70" : "text-ink-300"
                    }`}
                    aria-hidden="true"
                  />
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>

      {/* Detail for the selected stage — fixed footprint, so the list never moves */}
      <div aria-live="polite" className="relative mt-4 min-h-[7.5rem]">
        {/* Caret + accent rail tie the panel back to the highlighted row */}
        <span
          aria-hidden="true"
          className="absolute -top-[7px] left-5 h-3 w-3 rotate-45 border-l border-t border-teal/30 bg-white"
        />
        <div className="rounded-2xl border border-teal/20 border-l-[3px] border-l-teal bg-white/70 px-4 py-3.5">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              initial={reduce ? undefined : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: reduce ? 0 : 0.25, ease: EASE }}
            >
              <p className="font-mono text-micro tracking-[0.05em] text-teal">
                {active.title}
              </p>
              <p className="mt-2 text-small text-ink-500">{active.detail}</p>
              {active.id === "models" ? (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {MODELS.map((m) => (
                    <li
                      key={m}
                      className="rounded-full border border-gold/35 bg-gold-50 px-2.5 py-1 font-mono text-micro tracking-[0.04em] text-[#8a5f06]"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
