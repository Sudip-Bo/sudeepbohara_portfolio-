"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TrustBadge } from "./TrustBadge";
import { LogoStrip } from "./LogoStrip";
import { TrustMetricsGrid } from "./TrustMetricsGrid";
import { FrostedDivider } from "./FrostedDivider";

export function TrustBar() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 1,
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
      },
    },
  };

  return (
    <section
      className="relative py-12 md:py-16 lg:py-24 overflow-hidden noise-texture"
      aria-label="Trust indicators and technology stack"
    >
      {/* Background Lighting - Continuation from Hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(600px circle at 50% 0%, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.05) 40%, transparent 80%),
            radial-gradient(450px circle at 85% 25%, rgba(6, 182, 212, 0.12) 0%, transparent 70%)
          `
        }}
        aria-hidden="true"
      />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <TrustBadge />
          <LogoStrip />
          <TrustMetricsGrid />
          <FrostedDivider />
        </motion.div>
      </div>
    </section>
  );
}
