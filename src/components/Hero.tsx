"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ stiffness: 100, damping: 20 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-1 border border-border-subdued rounded-full mb-8" role="status" aria-live="polite">
            <CheckCircle2 className="w-4 h-4 text-accent-secondary" aria-hidden="true" />
            <span className="text-sm font-medium text-foreground">
              Available for new projects
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8 leading-tight display-tight">
            Engineering High-Impact Digital Experiences for Growth
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            I design and build premium websites, web applications, and design systems for businesses that value precision and performance.
          </p>



          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/projects"
              className="group px-8 py-4 bg-accent-primary text-white font-medium rounded-xl hover:bg-opacity-90 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-surface-1 text-foreground font-medium rounded-xl border border-border-subdued hover:border-border-highlight transition-all focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              Get in Touch
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
