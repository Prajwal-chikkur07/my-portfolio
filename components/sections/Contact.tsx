import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Reveal, RevealItem } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { LinkedInIcon } from "@/components/ui/icons";
import { contact, site } from "@/lib/site";

const rows = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    Icon: Mail,
  },
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phoneHref}`,
    Icon: Phone,
  },
  {
    label: "LinkedIn",
    value: site.linkedin.label,
    href: site.linkedin.url,
    Icon: LinkedInIcon,
  },
] as const;

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 overflow-hidden border-t border-ink/[0.07] bg-cream-100/60 pb-28 pt-16 sm:pb-32 sm:pt-20 lg:pb-40 lg:pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(47,147,130,0.1),transparent_65%)]"
      />

      <div className="shell relative">
        <Reveal stagger={0.09} className="flex flex-col items-center text-center">
          <RevealItem>
            <Eyebrow>Contact</Eyebrow>
          </RevealItem>

          <RevealItem
            as="h2"
            className="mt-6 max-w-3xl text-section font-semibold text-ink"
          >
            <span id="contact-heading">
              Have an interesting{" "}
              <span className="italic text-teal">problem</span> to solve?
            </span>
          </RevealItem>

          <RevealItem
            as="p"
            className="mt-6 max-w-xl text-body leading-[1.75] text-ink-500"
          >
            {contact.body}
          </RevealItem>

          <RevealItem className="mt-10">
            <Button href={`mailto:${site.email}`} size="lg">
              Get In Touch
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Button>
          </RevealItem>

          <RevealItem className="mt-4 flex items-center gap-2 font-mono text-micro tracking-[0.04em] text-ink-300">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {site.location}
          </RevealItem>
        </Reveal>

        <Reveal
          stagger={0.08}
          delay={0.1}
          className="mx-auto mt-16 grid max-w-4xl gap-4 sm:mt-20 sm:grid-cols-3"
        >
          {rows.map(({ label, value, href, Icon }) => {
            const external = href.startsWith("http");
            return (
              <RevealItem key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                  className="group flex h-full flex-col gap-3 rounded-panel border border-ink/[0.08] bg-cream p-6 transition-all duration-500 hover:-translate-y-1 hover:border-teal/25 hover:bg-white hover:shadow-lift"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cream-200 text-ink-700 transition-colors duration-500 group-hover:bg-teal group-hover:text-cream">
                    <Icon className="h-[17px] w-[17px]" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-micro uppercase tracking-[0.18em] text-ink-300">
                    {label}
                  </span>
                  <span className="break-words text-body font-medium leading-snug text-ink transition-colors duration-500 group-hover:text-teal">
                    {value}
                  </span>
                </a>
              </RevealItem>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
