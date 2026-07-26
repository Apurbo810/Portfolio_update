"use client";

import { useEffect, useState } from "react";
import { getLenis } from "@/app/lib/lenis";

const links = [
  { name: "Home", id: "home" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const lenis = getLenis();

    if (lenis) {
      lenis.scrollTo(element, {
        offset: -80,
        duration: 1.3,
      });
    }
  };

  return (
    <nav
      className={`navbar ${
        showNavbar ? "navbar-visible" : "navbar-hidden"
      }`}
    >
      <div className="navbar-container">
    

        <ul className="navbar-menu">
          {links.map((link) => (
            <li key={link.id}>
              <button
                className="nav-link"
                onClick={() => scrollToSection(link.id)}
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