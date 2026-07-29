"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Let&apos;s discuss how I can help you
            achieve your digital goals
          </p>
        </motion.div>
      </div>
    </section>
  );
}
