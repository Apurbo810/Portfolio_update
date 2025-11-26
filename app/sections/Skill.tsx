"use client";

import { motion } from "framer-motion";
import SkillCategory from "@/app/components/skills/SkillCategory";
import { skillsDataWeb, skillsDataGame, skillsDataNetwork } from "@/app/data/skills";
import SkillSphere from "@/app/components/SkillSphere";
import GameJoystick from "@/app/components/GameJoystick";
import NetworkLogo from "@/app/components/NetworkLogo";

export default function Skill() {
  return (
    <section className="py-20 space-y-32" id="skills">
        <motion.h1
          className="text-5xl font-extrabold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h1>
      {/* -------------------------------- */}
      {/* 1️⃣ WEB DEVELOPMENT SECTION */}
      {/* -------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Web Development
          </motion.h2>

          <motion.p
            className="opacity-70 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Building modern, scalable and responsive web apps.
          </motion.p>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {skillsDataWeb.map((cat: any) => (
              <motion.div
                key={cat.title}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <SkillCategory title={cat.title} skills={cat.skills} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT - SPHERE */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SkillSphere />
        </motion.div>
      </div>

     {/* -------------------------------- */}
{/* 2️⃣ GAME DEVELOPMENT SECTION */}
{/* -------------------------------- */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

  {/* LEFT — CONTROLLER */}
  <motion.div
    className="flex justify-center order-1 md:order-1"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <GameJoystick />
  </motion.div>

  {/* RIGHT — TEXT + SKILLS */}
  <motion.div
    className="order-2 md:order-2"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <motion.h2
      className="text-4xl font-bold mb-4"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      Game Development
    </motion.h2>

    <motion.p
      className="opacity-70 mb-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      Creating interactive gameplay, engines and real-time experiences.
    </motion.p>

    <motion.div
      className="space-y-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {skillsDataGame.map((cat: any) => (
        <motion.div
          key={cat.title}
          variants={{
            hidden: { opacity: 0, x: 20 },
            show: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.4 }}
        >
          <SkillCategory title={cat.title} skills={cat.skills} />
        </motion.div>
      ))}
    </motion.div>

  </motion.div>
</div>


      {/* -------------------------------- */}
      {/* 3️⃣ NETWORKING SECTION */}
      {/* -------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Networking
          </motion.h2>

          <motion.p
            className="opacity-70 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Understanding infrastructure, communication and secure protocols.
          </motion.p>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {skillsDataNetwork.map((cat: any) => (
              <motion.div
                key={cat.title}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <SkillCategory title={cat.title} skills={cat.skills} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — ICON (placeholder) */}

                    <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <NetworkLogo />
          </motion.div>

      </div>

    </section>
  );
}
