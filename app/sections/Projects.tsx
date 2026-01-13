"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Loader2,
} from "lucide-react";
import { ProjectData } from "@/app/data/projects";

interface Project {
  title: string;
  description: string;
  link: string;
}

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const project: Project = ProjectData[index];

  const next = () => {
    setLoading(true);
    setIndex((prev) => (prev + 1) % ProjectData.length);
  };

  const prev = () => {
    setLoading(true);
    setIndex((prev) =>
      prev === 0 ? ProjectData.length - 1 : prev - 1
    );
  };

  // Keyboard support
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="projects"
      className="py-24 bg-base-100 text-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        {/* Project Info */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">
            {project.title}
          </h3>
          <p className="opacity-75 max-w-2xl mx-auto">
            {project.description}
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="relative flex items-center gap-6">
          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="btn btn-circle btn-lg bg-black/40 hover:bg-black/70 border border-base-300"
          >
            <ChevronLeft size={36} />
          </button>

          {/* PROJECT BOX */}
          <div className="relative flex-1 border border-base-300 rounded-xl overflow-hidden shadow-xl">
            {/* Loading Overlay */}
            {loading && (
              <div className="absolute inset-0 z-10 bg-black/60 flex flex-col items-center justify-center">
                <Loader2
                  className="animate-spin mb-3"
                  size={48}
                />
                <p className="text-sm opacity-80">
                  Loading project…
                </p>
              </div>
            )}

            <iframe
              key={project.link}
              src={project.link}
              className="w-full h-[70vh] bg-white"
              loading="lazy"
              onLoad={() => setLoading(false)}
            />
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="btn btn-circle btn-lg bg-black/40 hover:bg-black/70 border border-base-300"
          >
            <ChevronRight size={36} />
          </button>
        </div>

        {/* External Link */}
        <div className="text-center mt-6">
          <a
            href={project.link}
            target="_blank"
            className="btn btn-primary btn-sm inline-flex items-center gap-2"
          >
            Open in New Tab <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
