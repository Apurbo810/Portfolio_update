"use client";

import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero bg-base-100 min-h-screen text-white flex items-center"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="typewriter">
          {/* Main Heading */}
          <h1 className="text-5xl font-bold text-white">
            Hi, I’m Apurbo
          </h1>

          {/* Subtitle with rotating text */}
          <p className="py-6 text-white/70 max-w-md">
            I'm a{" "}
            <span className="text-rotate duration-2000">
              <span>
                <span className="text-teal-800 px-2">Developer</span>
                <span className="text-red-800 px-2">Freelancer</span>
              </span>
            </span>{" "}
            — I build modern web apps and digital solutions.
          </p>

          {/* ---- Social Buttons ---- */}
          <div className="flex gap-4 mt-4">
            
            {/* GitHub */}
            <a
              href="https://github.com/Apurbo810"
              target="_blank"
              className="btn btn-outline btn-sm flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/apurbo-shariar-aab9b3251/"
              target="_blank"
              className="btn btn-primary btn-sm flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
