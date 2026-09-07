"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Marker-pen underline that draws in beneath the highlighted headline word. */
export default function Squiggle({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="0 0 420 18"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <motion.path
        d="M4 12c58-8 118-10 176-7 62 3 110 9 236-1"
        stroke="var(--color-gold)"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: reduce ? 0 : 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.85 }}
      />
    </svg>
  );
}
