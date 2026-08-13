"use client";

import { motion } from "framer-motion";

export function TrustBadge() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="text-center mb-8 md:mb-12"
    >
      <p className="text-[0.625rem] md:text-[0.6875rem] font-mono font-medium text-secondary tracking-[0.05em] uppercase">
        Trusted by Innovative Founders & Enterprise Teams
      </p>
    </motion.div>
  );
}
