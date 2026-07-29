"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ stiffness: 100, damping: 20 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 display-tight">
            About Me
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Web Designer • Web Developer • UI/UX Designer. I help businesses
            build trust and grow through premium digital experiences.
          </p>
          <p className="text-lg text-accent-cyan max-w-2xl mx-auto font-medium">
            &quot;A website is like water—essential for every modern business.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
