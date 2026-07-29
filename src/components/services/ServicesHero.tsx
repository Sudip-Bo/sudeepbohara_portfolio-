"use client";

import { motion } from "framer-motion";

export function ServicesHero() {
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
            Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Digital solutions designed to help your business build trust and grow
          </p>
        </motion.div>
      </div>
    </section>
  );
}
