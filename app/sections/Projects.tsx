"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ProjectData } from "@/app/data/projects"

export default function Projects() {


  return (
    <section id="projects" className="py-24 bg-base-100 text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4">
        {ProjectData.map((p, i) => (
          <motion.div
            key={i}
            className="bg-base-200 rounded-xl p-5 shadow-xl border border-base-300 hover:shadow-2xl hover:-translate-y-2 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={p.image}
              alt={p.title}
              className="rounded-lg mb-4 w-full h-64 object-contain border border-base-300 bg-base-300"
            />


            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="opacity-70 mb-4 leading-relaxed">{p.description}</p>

            <a
              href={p.link}
              target="_blank"
              className="btn btn-primary btn-sm flex items-center gap-2 w-fit"
            >
              Visit Project <ExternalLink size={18} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
