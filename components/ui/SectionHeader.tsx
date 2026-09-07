import type { ReactNode } from "react";
import { Reveal, RevealItem } from "@/components/Reveal";

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 font-mono text-eyebrow font-medium uppercase text-teal ${className}`}
    >
      <span aria-hidden="true" className="h-px w-8 bg-teal/45" />
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <Reveal
      className={`flex flex-col ${centered ? "items-center text-center" : "items-start"}`}
      stagger={0.08}
    >
      <RevealItem>
        <Eyebrow>{eyebrow}</Eyebrow>
      </RevealItem>
      <RevealItem as="h2" className="mt-5 max-w-3xl text-section font-semibold text-ink">
        {title}
      </RevealItem>
      {lead ? (
        <RevealItem
          as="p"
          className={`mt-5 max-w-xl text-body leading-relaxed text-ink-500 ${centered ? "mx-auto" : ""}`}
        >
          {lead}
        </RevealItem>
      ) : null}
    </Reveal>
  );
}
