"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import Squiggle from "@/components/ui/Squiggle";
import { site } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Softens the portrait's cropped torso into the page instead of a hard cut. */
const FADE_MASK = "linear-gradient(to bottom, #000 88%, transparent 100%)";

export default function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, reduce ? 1 : 0]);

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0 : 0.75, ease: EASE, delay: reduce ? 0 : delay },
  });

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-24 pb-14 sm:pt-28"
    >
      {/* Ambient wash — breathes gently on every device */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[85vh] origin-top bg-[radial-gradient(62%_52%_at_78%_20%,rgba(47,147,130,0.1),transparent_66%),radial-gradient(48%_42%_at_12%_58%,rgba(229,160,27,0.08),transparent_62%)]"
        animate={reduce ? undefined : { opacity: [1, 0.72, 1], scale: [1, 1.05, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div style={{ opacity: contentOpacity }} className="shell relative z-10">
        {/* ---------------- Masthead ---------------- */}
        <motion.div
          {...rise(0)}
          className="flex flex-wrap items-center justify-between gap-3 font-mono text-micro uppercase tracking-[0.16em] text-ink-500"
        >
          <p className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-teal/45" />
            {site.role}
            <span aria-hidden="true" className="text-ink-300">
              /
            </span>
            <span className="hidden sm:inline">Backend &amp; Generative AI</span>
            <span className="sm:hidden">Backend + AI</span>
          </p>
          <p className="hidden items-center gap-2.5 md:flex">
            <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
              {!reduce ? (
                <span className="absolute inset-0 animate-ping rounded-full bg-teal/60" />
              ) : null}
              <span className="relative h-1.5 w-1.5 rounded-full bg-teal" />
            </span>
            {site.location}
          </p>
        </motion.div>

        {/* ---------------- Statement + portrait ---------------- */}
        <div className="mt-10 grid items-end gap-y-10 lg:grid-cols-12 lg:gap-x-10 sm:mt-14">
          {/* Left: the statement — photo takes the visual weight, this stays modest */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <motion.h1
              id="hero-heading"
              {...rise(0.08)}
              className="font-display font-semibold leading-[1.03] tracking-[-0.03em]"
            >
              <span className="block text-hero text-ink">Prajwal Chikkur.</span>
              <span className="relative mt-1 inline-block text-hero text-gold">
                Software Engineer.
                <Squiggle className="absolute -bottom-1.5 left-0 h-3 w-full sm:h-3.5" />
              </span>
            </motion.h1>

            <motion.p
              {...rise(0.18)}
              className="mt-7 max-w-lg text-body font-medium leading-[1.6] text-ink-700 sm:text-lead"
            >
              {site.tagline}
            </motion.p>

            <motion.p
              {...rise(0.24)}
              className="mt-4 max-w-lg text-small leading-[1.75] text-ink-500"
            >
              {site.intro}
            </motion.p>

            <motion.div {...rise(0.32)} className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#projects" size="lg">
                View My Work
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Let&rsquo;s Connect
                <Send className="h-4 w-4" aria-hidden="true" />
              </Button>
            </motion.div>
          </div>

          {/* Right: the dominant portrait — large, grounded, and static */}
          <motion.div
            {...rise(0.15)}
            className="relative order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end"
          >
            {/* Soft color panel behind the photo for graphic weight */}
            <span
              aria-hidden="true"
              className="absolute bottom-0 right-[8%] h-[86%] w-[78%] rounded-panel bg-gradient-to-b from-teal-50 to-gold-50/60 sm:right-[4%]"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-[4%] left-1/2 h-[9%] w-[52%] -translate-x-1/2 rounded-[50%] bg-ink/15 blur-lg sm:left-auto sm:right-[18%] sm:translate-x-0"
            />
            <Image
              src="/prajwal-hero.png"
              alt={`Illustrated portrait of ${site.name}`}
              width={818}
              height={1100}
              priority
              style={{ maskImage: FADE_MASK, WebkitMaskImage: FADE_MASK }}
              className="relative h-[clamp(320px,46vw,560px)] w-auto"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
