import {Mail} from "lucide-react";
import { LinkedInIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/[0.08] bg-cream-100/60">
      <div className="shell flex flex-col gap-8 py-12 sm:py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-title font-semibold tracking-[-0.02em] text-ink">
            {site.name}
            <span className="text-teal">.</span>
          </p>
          <p className="mt-2 font-mono text-micro tracking-[0.06em] text-ink-500">
            Software Engineer • Backend • Generative AI
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={site.linkedin.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 bg-white/70 text-ink-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/35 hover:text-teal hover:shadow-soft"
          >
            <LinkedInIcon className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label={`Email ${site.name}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 bg-white/70 text-ink-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/35 hover:text-teal hover:shadow-soft"
          >
            <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="shell border-t border-ink/[0.07] py-6">
        <p className="text-center font-mono text-micro tracking-[0.08em] text-ink-300">
          © 2026 {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
