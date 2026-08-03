"use client";

import { motion } from "framer-motion";

export function StatusBadgePill() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ stiffness: 100, damping: 20 }}
      className="inline-flex items-center gap-2 px-4 py-2 frosted-dark rounded-full mb-8"
      role="status"
      aria-live="polite"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-emerald"></span>
      </span>
      <span className="text-xs font-mono font-medium text-primary tracking-wide">
        AVAILABLE FOR Q3/Q4 PROJECTS — HIGH-CRAFT STUDIO
      </span>
    </motion.div>
  );
}
