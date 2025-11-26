"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

export default function Education() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const smoothLineHeight = useSpring(lineHeight, {
    stiffness: 200,
    damping: 30,
    mass: 0.5,
  });

  const educationData = [
    {
      title: "Bachelor of Science in CSE",
      school: "American International University-Bangladesh",
      year: "2021 – 2025",
      icon: GraduationCap,
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      school: "Banani Bidyaniketan School & College",
      year: "2016 – 2018",
      icon: School,
    },
    {
      title: "Secondary School Certificate (SSC)",
      school: "Banani Model School",
      year: "2014 – 2016",
      icon: BookOpen,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative bg-base-300 py-24 px-4 md:px-6 overflow-hidden text-white"
      id="education"
    >
      {/* Warm Coffee Glow Background */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, 20, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-120 h-120 bg-amber-500/10 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, -30, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Heading */}
      <motion.div
        className="text-center mb-16 max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold">
          <span className="text-white">My </span>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-orange-400">
            Education
          </span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto z-10">

        {/* Soft Coffee Background Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-base-200 rounded-full -translate-x-1/2 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-linear-to-b from-amber-400/20 via-orange-300/40 to-amber-500/20"
            animate={{ y: ["0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />
        </div>

        {/* Active progress line */}
        <motion.div
          className="absolute left-6 md:left-1/2 top-0 w-1 bg-linear-to-b from-amber-400 to-orange-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.9)] -translate-x-1/2 origin-top"
          style={{ height: smoothLineHeight }}
        />

        {educationData.map((edu, index) => {
          const isLeft = index % 2 === 0;
          const Icon = edu.icon;

          return (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row items-start mb-16 md:mb-20 ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Step bubble */}
              <motion.div
                className="z-20 w-12 h-12 rounded-full bg-linear-to-r from-amber-500 to-orange-600 text-white flex items-center justify-center font-bold shadow-lg absolute left-6 md:left-1/2 -translate-x-1/2"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                {index + 1}
              </motion.div>

              {/* Card */}
              <motion.div
                className={`relative w-full md:w-5/12 p-6 rounded-2xl shadow-xl bg-base-200/70 backdrop-blur-md border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300 ${
                  isLeft
                    ? "md:mr-auto md:pl-12"
                    : "md:ml-auto md:pr-12 md:text-right"
                } mt-12 md:mt-0`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={28} className="text-amber-400" />
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {edu.title}
                  </h3>
                </div>

                <p className="text-white/70">{edu.school}</p>
                <p className="text-white/50 text-sm">{edu.year}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
