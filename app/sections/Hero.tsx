"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  const [resetKey, setResetKey] = useState(0);
  const [errorGif, setErrorGif] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Show error gif
      setErrorGif(true);

      // Hide error gif and restart typing
      setTimeout(() => {
        setErrorGif(false);
        setResetKey((prev) => prev + 1);
      }, 1200);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero bg-base-100 min-h-screen text-white"
    >
      <div className="hero-content flex-col lg:flex-row w-full max-w-7xl justify-between items-center lg:gap-20">

        {/* Left Side */}
        <div key={resetKey} className="typewriter max-w-xl">
          <h1 className="text-5xl font-bold text-white">
            Hi, I'm Apurbo
          </h1>

          <p className="py-6 text-white/70">
            I'm{" "}
            <span className="text-rotate duration-2000">
              <span>
                <span className="text-teal-800 px-2">Developer</span>
                <span className="text-red-800 px-2">Freelancer</span>
              </span>
            </span>{" "}
            — I build modern web apps and digital solutions.
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/Apurbo810"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shariar-apurbo-aab9b3251/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex justify-center items-center pr-12">
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 scale-125 rounded-full bg-amber-300/10 blur-3xl"></div>

            <Image
              src={
                errorGif
                  ? "/assets/Error Does Not Compute Sticker.gif"
                  : "/assets/Hot Chocolate Coffee Sticker.gif"
              }
              alt="Coffee"
              width={380}
              height={380}
              unoptimized
              className="relative z-10 select-none pointer-events-none"
            />
          </div>
        </div>

      </div>
    </section>
  );
}