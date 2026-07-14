import Education from "./sections/Education";
import Hero from "./sections/Hero";
import Skills from "./sections/Skill";
import Projects from "./sections/Projects"

export default function Page() {
  return (
    <main
  className="bg-tech-pattern origin-top"
  style={{ transform: "scale(0.9)", width: "111.111%" }}
>
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>

      <section id="skills" className="scroll-mt-20">
        <Skills />
      </section>

      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      <section id="education" className="scroll-mt-20">
        <Education />
      </section>
    </main>
  );
}
