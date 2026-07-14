"use client";

import { motion } from "framer-motion";
import React from "react";
import SkillCategory from "./skills/SkillCategory";

interface SkillSectionProps {
  title: string;
  description: string;
  skills: any[];
  visual: React.ReactNode;
  reverse?: boolean;
  background?: string;
  top?: number;
}

export default function SkillSection({
  title,
  description,
  skills,
  visual,
  reverse = false,
  background = "bg-base-200",
  top = 100,
}: SkillSectionProps) {
  return (
    <div
      className="sticky px-4 md:px-8"
      style={{
        top,
        zIndex: Math.floor(500 - top),
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 120,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          amount: 0.35,
          once: false,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -5,
        }}
        className={`
          ${background}
          rounded-[32px]
          border
          border-base-300
          shadow-2xl
          overflow-hidden
        `}
      >
        <div
          className={`
            grid
            grid-cols-1
            lg:grid-cols-2
            items-center
            gap-16
            p-8
            lg:p-16
            min-h-[650px]
          `}
        >
          {/* TEXT */}
          <div
            className={`
              ${reverse ? "lg:order-2" : ""}
              flex
              flex-col
              justify-center
            `}
          >
            <motion.h2
              initial={{
                opacity: 0,
                x: reverse ? 40 : -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 0.6,
              }}
              viewport={{ once: false }}
              className="text-5xl font-black mb-6"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              viewport={{ once: false }}
              className="opacity-70 text-lg leading-8 mb-10"
            >
              {description}
            </motion.p>

            <motion.div
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: false,
              }}
              className="space-y-8"
            >
              {skills.map((cat: any) => (
                <motion.div
                  key={cat.title}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: reverse ? 30 : -30,
                    },
                    show: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                >
                  <SkillCategory
                    title={cat.title}
                    skills={cat.skills}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* VISUAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.75,
              rotate: reverse ? -8 : 8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            viewport={{
              once: false,
            }}
            className={`
              ${reverse ? "lg:order-1" : ""}
              flex
              justify-center
              items-center
              relative
            `}
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
            >
              {visual}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}