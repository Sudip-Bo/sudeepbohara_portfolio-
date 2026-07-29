"use client";

import { motion } from "framer-motion";

const industries = [
  "Healthcare",
  "E-Commerce",
  "Real Estate",
  "Education",
  "Finance",
  "Hospitality",
  "Technology",
  "Professional Services",
  "Lifestyle & Wellness",
  "Non-Profit",
];

export function Industries() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industries I Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience working with businesses across multiple sectors
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="px-8 py-4 bg-gray-50 rounded-xl border border-gray-200 text-gray-700 font-medium hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
            >
              {industry}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&apos;t see your industry? I&apos;m open to working with new challenges and
            adapting my expertise to deliver results regardless of sector.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
