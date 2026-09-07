import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = IBM_Plex_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-face",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-face",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono-face",
});

const title = "Prajwal Chikkur | Software Engineer & Generative AI Engineer";
const description =
  "Portfolio of Prajwal Chikkur, a Software Engineer specializing in backend systems, Generative AI, automation, FastAPI, Python, PostgreSQL, Redis, Celery, and AWS.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s | Prajwal Chikkur",
  },
  description,
  applicationName: "Prajwal Chikkur — Portfolio",
  authors: [{ name: site.name, url: site.linkedin.url }],
  creator: site.name,
  keywords: [
    "Prajwal Chikkur",
    "Software Engineer",
    "Backend Engineer",
    "Generative AI Engineer",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Redis",
    "Celery",
    "AWS",
    "RAG",
    "LLM",
    "Bangalore",
  ],
  openGraph: {
    type: "website",
    siteName: `${site.name} — Portfolio`,
    title,
    description,
    url: site.url,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: "/" },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#fbf8f1",
  colorScheme: "light",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Software Engineer",
  email: `mailto:${site.email}`,
  telephone: site.phone,
  url: site.url,
  sameAs: [site.linkedin.url],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  worksFor: { "@type": "Organization", name: "SeedlingLabs" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Sri Vidyaniketan Degree College, Gangavathi",
  },
  knowsAbout: [
    "Backend Engineering",
    "Generative AI",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Redis",
    "Celery",
    "AWS",
    "Retrieval-Augmented Generation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="min-h-dvh bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-small focus:font-semibold focus:text-cream"
        >
          Skip to content
        </a>
        <div className="grain" aria-hidden="true" />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
