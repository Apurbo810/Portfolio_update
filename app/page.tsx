import Education from "./sections/Education";
import Hero from "./sections/Hero";
import Skills from "./sections/Skill";
import Projects from "./sections/Projects"

export default function Page() {
  return (
    <main className="bg-tech-pattern">
      <Hero />
      <Skills/>
      <Projects />
      <Education />
    </main>
  );
}
