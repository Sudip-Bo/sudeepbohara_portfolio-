"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ stiffness: 100, damping: 20 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-1 border border-border-subdued rounded-full mb-8" role="status" aria-live="polite">
            <CheckCircle2 className="w-4 h-4 text-accent-emerald" aria-hidden="true" />
            <span className="text-sm font-medium text-foreground">
              Available for new projects
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight display-tight">
            Engineering High-Impact Digital Experiences for Growth
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            I partner with forward-thinking companies to design and build high-converting websites, web apps, and design systems with extreme precision.
          </p>

          <p className="text-base md:text-lg text-accent-cyan mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            &quot;A website is like water—essential for every modern business.&quot;
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/projects"
              className="group px-8 py-4 bg-accent-indigo text-white font-medium rounded-xl hover:bg-opacity-90 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent-indigo focus:ring-offset-2 focus:ring-offset-background"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-surface-1 text-foreground font-medium rounded-xl border border-border-subdued hover:border-border-highlight transition-all focus:outline-none focus:ring-2 focus:ring-accent-indigo focus:ring-offset-2 focus:ring-offset-background"
            >
              Let&apos;s Talk
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
