"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function GameJoystick() {
  const [pressed, setPressed] = useState("");

  const press = (key: string) => {
    setPressed(key);
    setTimeout(() => setPressed(""), 120);
  };

  const psBtn = (key: string, label: string, color: string, x: number, y: number) => (
    <motion.div
      onClick={() => press(key)}
      animate={pressed === key ? { scale: 0.75 } : { scale: 1 }}
      className={`absolute w-10 h-10 rounded-full flex items-center justify-center 
      font-bold cursor-pointer shadow-md border border-black ${color}`}
      style={{ left: x, top: y }}
    >
      {label}
    </motion.div>
  );

  const analog = (key: string, x: number, y: number) => (
    <motion.div
      onClick={() => press(key)}
      animate={pressed === key ? { scale: 0.85 } : { scale: 1 }}
      className="absolute w-16 h-16 rounded-full bg-[#222] border-[5px] border-black 
      shadow-inner cursor-pointer"
      style={{ left: x, top: y }}
    />
  );

  return (
    <div className="relative w-[700px] h-[350px] mx-auto select-none">

      {/* BACKGROUND SVG */}
      <img
        src="/ps2_controller.svg"
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* SELECT & START */}
      <motion.div
        onClick={() => press("select")}
        animate={pressed === "select" ? { scale: 0.9 } : { scale: 1 }}
        className="absolute bg-gray-300 border border-black px-3 py-1 rounded-full text-xs cursor-pointer"
        style={{ left: 220, top: 100 }}
      >
        SELECT
      </motion.div>

      <motion.div
        onClick={() => press("start")}
        animate={pressed === "start" ? { scale: 0.9 } : { scale: 1 }}
        className="absolute bg-gray-300 border border-black px-3 py-1 rounded-full text-xs cursor-pointer"
        style={{ left: 320, top: 100 }}
      >
        START
      </motion.div>

      {/* D-Pad */}
      {psBtn("up", "▲", "bg-gray-400", 145, 115)}
      {psBtn("left", "◀", "bg-gray-400", 115, 145)}
      {psBtn("right", "▶", "bg-gray-400", 175, 145)}
      {psBtn("down", "▼", "bg-gray-400", 145, 175)}

      {/* PS Buttons */}
      {psBtn("triangle", "△", "bg-green-400", 385, 115)}
      {psBtn("circle", "◯", "bg-red-400", 415, 145)}
      {psBtn("square", "⬜", "bg-blue-400", 355, 145)}
      {psBtn("cross", "✕", "bg-purple-400", 385, 175)}

      {/* Analog sticks */}
      {analog("L-STICK", 150, 220)}
      {analog("R-STICK", 380, 220)}

    </div>
  );
}
