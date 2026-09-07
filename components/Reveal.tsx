"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Fade-up container. Children marked with <RevealItem> stagger inside it. */
export function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  y = 26,
  amount = "some",
  stagger = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  y?: number;
  /**
   * Fraction of the target that must be visible to trigger, or "some"/"all".
   * A fixed ratio is unreachable for containers taller than the viewport
   * (e.g. long stacked lists on mobile), so callers wrapping tall content
   * should stick with the "some" default rather than passing a number.
   */
  amount?: number | "some" | "all";
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.7,
        ease: EASE,
        delay: reduce ? 0 : delay,
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delay,
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      /*
       * Reduced motion skips the reveal entirely rather than animating it to
       * zero duration: an instant anchor jump can otherwise scroll past a
       * section before its observer ever fires, leaving the content hidden.
       */
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </MotionTag>
  );
}

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;
  return (
    <MotionTag className={className} variants={revealItem}>
      {children}
    </MotionTag>
  );
}
