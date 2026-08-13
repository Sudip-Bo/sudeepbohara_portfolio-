"use client";

import { motion } from "framer-motion";

export function FrostedDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="w-full h-px mt-12"
      style={{
        background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)",
        backdropFilter: "blur(8px)"
      }}
      aria-hidden="true"
    />
  );
}
