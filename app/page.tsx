import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Philosophy from "@/components/sections/Philosophy";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Page() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Philosophy />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
