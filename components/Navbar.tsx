"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const reduce = useReducedMotion();

  /* Compact-on-scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll-spy for the active nav item */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Lock body scroll + close on Escape while the mobile sheet is open */
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={false}
        animate={{
          paddingTop: scrolled ? 10 : 20,
          paddingBottom: scrolled ? 10 : 20,
        }}
        transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}
        className={`transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
          scrolled
            ? "border-b border-ink/[0.07] bg-cream/80 shadow-[0_1px_20px_-12px_rgba(20,41,58,0.25)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="shell flex items-center justify-between gap-4"
        >
          {/* Wordmark */}
          <a
            href="#home"
            className="group relative shrink-0 font-display text-title font-semibold tracking-[-0.03em] text-ink"
          >
            Prajwal Chikkur
            <span className="text-teal">.</span>
            <span
              aria-hidden="true"
              className="absolute -right-2.5 top-1 h-1.5 w-1.5 rounded-full bg-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-small font-medium transition-colors duration-300 ${
                      isActive ? "text-teal" : "text-ink-700 hover:text-ink"
                    }`}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active"
                        transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
                        className="absolute inset-0 -z-10 rounded-full bg-teal-50 ring-1 ring-teal/15"
                      />
                    ) : null}
                    <span
                      aria-hidden="true"
                      className={`h-1 w-1 rounded-full bg-teal transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={site.resume}
              download
              className="hidden items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-small font-semibold text-cream shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-lift sm:inline-flex"
            >
              <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 bg-white/70 text-ink transition-colors hover:border-ink/25 lg:hidden"
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </motion.div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 -z-10 bg-ink/25 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: reduce ? 0 : 0.35, ease: EASE }}
              className="shell lg:hidden"
            >
              <div className="mt-2 overflow-hidden rounded-panel border border-ink/[0.08] bg-cream shadow-lift">
                <ul className="flex flex-col p-3">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: reduce ? 0 : 0.05 + i * 0.045,
                        duration: 0.35,
                        ease: EASE,
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-body font-medium transition-colors ${
                          active === link.href
                            ? "bg-teal-50 text-teal"
                            : "text-ink-700 active:bg-ink/[0.04]"
                        }`}
                      >
                        {link.label}
                        <span className="font-mono text-micro text-ink-300">
                          0{i + 1}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <div className="border-t border-ink/[0.07] p-3">
                  <a
                    href={site.resume}
                    download
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-2xl bg-teal px-5 py-3.5 text-body font-semibold text-cream"
                  >
                    <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
                    Download CV
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
