"use client";

import { motion } from "framer-motion";
import { StatusBadgePill } from "./hero/StatusBadgePill";
import { ButtonPrimaryGlow } from "./hero/ButtonPrimaryGlow";
import { ButtonSecondaryGlass } from "./hero/ButtonSecondaryGlass";
import { StatisticsBarGrid } from "./hero/StatisticsBarGrid";
import { HeroFrameShowcase } from "./hero/HeroFrameShowcase";

export function Hero() {
  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center px-5 md:px-8 lg:px-16 pt-24 md:pt-30 lg:pt-40 pb-16 md:pb-24 lg:pb-32 overflow-hidden"
      aria-label="Hero Introduction"
    >
      {/* Background Lighting Effects */}
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

      <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <StatusBadgePill />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, stiffness: 100, damping: 20 }}
            className="text-[2.25rem] sm:text-[3rem] md:text-[3.25rem] lg:text-[4.5rem] font-bold leading-[1.12] md:leading-[1.10] lg:leading-[1.05] display-tight text-primary mb-6 max-w-5xl mx-auto text-balance"
          >
            Engineering{" "}
            <span className="text-gradient">
              High-Impact Digital Experiences
            </span>
            {" "}for Growth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, stiffness: 100, damping: 20 }}
            className="text-[0.9375rem] md:text-[1.125rem] lg:text-[1.25rem] text-secondary leading-[1.55] md:leading-[1.60] mb-10 max-w-3xl mx-auto"
          >
            We partner with forward-thinking companies to design and build high-converting websites, scalable web applications, custom AI interfaces, and automated workflows with extreme technical precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, stiffness: 100, damping: 20 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full"
          >
            <ButtonPrimaryGlow href="#featured-work" className="w-full sm:w-auto">
              View Selected Work
            </ButtonPrimaryGlow>
            <ButtonSecondaryGlass href="/contact" className="w-full sm:w-auto">
              Book 15-Min Call
            </ButtonSecondaryGlass>
          </motion.div>

          <StatisticsBarGrid />
        </motion.div>

        <HeroFrameShowcase />
      </div>
    </section>
  );
}
