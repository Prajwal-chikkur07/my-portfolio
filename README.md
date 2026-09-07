# Prajwal Chikkur — Portfolio

Personal portfolio for **Prajwal Chikkur**, Software Engineer working across backend
systems, Generative AI and automation.

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4,
Framer Motion and Lucide icons.

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run lint
```

---

## Project structure

```
app/
  layout.tsx              root layout: fonts, SEO metadata, Person JSON-LD
  page.tsx                composes the section components in order
  globals.css             design tokens (@theme), base styles, utilities
  opengraph-image.tsx     1200×630 social card, generated at build time
  twitter-image.tsx       re-exports the OG card
  icon.tsx                generated favicon
  sitemap.ts / robots.ts

components/
  Navbar.tsx              sticky nav, compact-on-scroll, scroll-spy, mobile sheet
  Footer.tsx
  Reveal.tsx              fade-up / stagger wrappers used by every section
  AvatarTracker.tsx       cursor-tracking portrait (see below)
  sections/               Hero, Marquee, About, Experience, Projects,
                          Philosophy, Skills, Education, Contact
  ui/                     Button, Chip, SectionHeader, DashedCurve,
                          Squiggle, AiPipeline, icons

lib/site.ts               ALL site copy, in one typed module
resume/                   print-ready HTML source for the CV
public/avatar/            8 head-pose frames for the hero portrait
public/Prajwal-Chikkur-Resume.pdf
```

**All copy lives in `lib/site.ts`.** Edit content there — no strings are hard-coded
into the section components.

---

## The cursor-tracking portrait

`components/AvatarTracker.tsx` turns the hero portrait toward the pointer.

The eight frames in `public/avatar/` were sliced from a single sprite sheet. Each
frame's gaze direction was measured rather than guessed: for every frame the
horizontal centroid of hair pixels was compared against that of face/skin pixels,
which yields a reliable left-profile → front → right-profile ordering. Those
measurements are the `x` / `y` values in the `POSES` table.

On pointer move the component picks the nearest pose in that 2D gaze space and
applies a small 3D tilt and parallax to the whole plate. Extras:

- **Idle look-around** after ~2.6 s without pointer input (this is also what
  touch devices get, since they never fire pointer moves).
- **Click / tap the portrait** for one full head turn, using the back-of-head frame.
- Everything is disabled under `prefers-reduced-motion`.

Frames sit on a square canvas whose side margins are edge-extended, so the plate
fills the circular mask with no visible frame boundary. `--color-plate` in
`globals.css` matches the sprite background.

---

## Things you may want to change

**Site URL (needed for correct Open Graph / sitemap URLs).** Metadata falls back to
`http://localhost:3000`, so set this before deploying:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

**The CV.** `Download CV` serves `public/Prajwal-Chikkur-Resume.pdf`, generated from
`resume/Prajwal-Chikkur-Resume.html`. To update it, edit that HTML, open it in a
browser and print to PDF (A4, background graphics on), saving over the file in
`public/`. Or drop in your own PDF at the same path.

**GitHub / other social links.** None are rendered, because no URLs were supplied.
Set `github` in `lib/site.ts` and add the link where `linkedin` is used in
`Hero.tsx`, `Footer.tsx` and `Contact.tsx`.

---

## Content

Every statistic, project, date and credential comes from Prajwal's own résumé data.
Nothing is inferred or padded — that includes the hero's `15×` / `80%` card, which
reports the measured Orchard results.
