"use client";
import { motion } from "framer-motion";

export default function NetworkPCIcon() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-[320px] h-[320px]"
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >

        {/* TOP PC (Main) */}
        <rect
          x="75"
          y="35"
          width="50"
          height="35"
          rx="4"
          stroke="#4895ef"
          strokeWidth="4"
        />
        <rect
          x="82"
          y="45"
          width="36"
          height="18"
          fill="#4895ef22"
          stroke="#4895ef"
          strokeWidth="2"
        />

        {/* LEFT PC */}
        <rect
          x="35"
          y="120"
          width="50"
          height="35"
          rx="4"
          stroke="#7209b7"
          strokeWidth="4"
        />
        <rect
          x="42"
          y="130"
          width="36"
          height="18"
          fill="#7209b722"
          stroke="#7209b7"
          strokeWidth="2"
        />

        {/* RIGHT PC */}
        <rect
          x="115"
          y="120"
          width="50"
          height="35"
          rx="4"
          stroke="#560bad"
          strokeWidth="4"
        />
        <rect
          x="122"
          y="130"
          width="36"
          height="18"
          fill="#560bad22"
          stroke="#560bad"
          strokeWidth="2"
        />

        {/* Connection Lines */}
        <motion.line
          x1="100"
          y1="70"
          x2="60"
          y2="120"
          stroke="#4cc9f0"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.line
          x1="100"
          y1="70"
          x2="140"
          y2="120"
          stroke="#4cc9f0"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        />

      </svg>
    </motion.div>
  );
}
