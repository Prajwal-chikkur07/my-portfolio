import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full text-small font-semibold tracking-[-0.01em] transition-all duration-300 ease-[var(--ease-out-soft)] active:scale-[0.98]";

const sizes = {
  md: "px-6 py-3",
  lg: "px-7 py-3.5 sm:px-8 sm:py-4",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-teal text-cream shadow-soft hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-lift",
  secondary:
    "border-[1.5px] border-ink/25 bg-cream/60 text-ink hover:-translate-y-0.5 hover:border-teal/50 hover:bg-teal-50 hover:text-teal-700 hover:shadow-soft",
  ghost: "text-ink hover:text-teal",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const isExternal = /^https?:/.test(href);
  const isPlainAnchor =
    href.startsWith("#") ||
    isExternal ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.endsWith(".pdf");

  if (isPlainAnchor) {
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noreferrer noopener" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
