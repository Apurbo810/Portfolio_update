"use client";

import { getLenis } from "@/app/lib/lenis";

const links = [
  { name: "Home", id: "home" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
];

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const lenis = getLenis();

    if (lenis) {
      lenis.scrollTo(element, {
        offset: -80,
        duration: 1.5,
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-base-100/80 backdrop-blur-md border-b border-base-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">Apurbo</h1>

        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="cursor-pointer transition-all duration-300 hover:text-primary hover:-translate-y-0.5"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}