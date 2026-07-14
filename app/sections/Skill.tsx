"use client";

import { motion } from "framer-motion";

import StickySkillCard from "@/app/components/StickySkillCard";

import {
  skillsDataWeb,
  skillsDataGame,
  skillsDataNetwork,
} from "@/app/data/skills";

import SkillSphere from "@/app/components/SkillSphere";
import GameJoystick from "@/app/components/GameJoystick";
import NetworkLogo from "@/app/components/NetworkLogo";

export default function Skill() {
  return (
    <section
      id="skills"
      className="py-24 space-y-24 max-w-7xl mx-auto px-6"
    >
      <motion.h1
        className="text-5xl md:text-6xl font-black text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h1>

      <StickySkillCard
        title="Web Development"
        description="Building modern, scalable, responsive and production-ready web applications."
        skills={skillsDataWeb}
        visual={<SkillSphere />}
      />

      <StickySkillCard
        title="Game Development"
        description="Creating immersive gameplay, interactive experiences and real-time systems."
        skills={skillsDataGame}
        visual={<GameJoystick />}
        reverse
      />

      <StickySkillCard
        title="Networking"
        description="Understanding networking, infrastructure, routing, security and communication protocols."
        skills={skillsDataNetwork}
        visual={<NetworkLogo />}
      />
    </section>
  );
}