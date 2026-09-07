import type { ReactNode } from "react";

const tones = {
  plain: "border-ink/12 bg-white/70 text-ink-700",
  teal: "border-teal/25 bg-teal-50 text-teal-700",
  gold: "border-gold/30 bg-gold-50 text-[#8a5f06]",
  ink: "border-ink/15 bg-ink/[0.04] text-ink-700",
} as const;

export function Chip({
  children,
  tone = "plain",
  className = "",
}: {
  children: ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1.5 font-mono text-micro tracking-[0.02em] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
