import { marqueeItems } from "@/lib/site";

/** Continuous ticker of the working stack — pure CSS, duplicated for a seamless loop. */
export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section
      aria-label="Core technologies"
      className="relative border-y border-ink/[0.07] bg-cream-100/70 py-5"
    >
      <div
        className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_9%,black_91%,transparent)]"
      >
        <ul className="animate-marquee flex w-max shrink-0 items-center gap-9 pr-9">
          {items.map((item, i) => (
            <li
              key={`${item}-${i}`}
              className="flex items-center gap-9 font-mono text-micro tracking-[0.08em] text-ink-500"
              aria-hidden={i >= marqueeItems.length}
            >
              {item}
              <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-gold/70" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
