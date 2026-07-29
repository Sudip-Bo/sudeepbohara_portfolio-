"use client";

import { motion } from "framer-motion";

export function Philosophy() {
  const principles = [
    {
      title: "Premium Design",
      description:
        "Beautiful aesthetics that communicate professionalism and build trust with your customers.",
    },
    {
      title: "User Experience",
      description:
        "Intuitive interfaces that make it easy for visitors to find what they need and take action.",
    },
    {
      title: "Business Growth",
      description:
        "Every design decision serves your business goals—websites that attract customers and support growth.",
    },
    {
      title: "Trust & Reliability",
      description:
        "Consistent performance, clear communication, and dependable support that builds long-term relationships.",
    },
    {
      title: "Performance",
      description:
        "Fast-loading, accessible websites that work seamlessly across all devices and connections.",
    },
    {
      title: "Long-Term Value",
      description:
        "Clean, maintainable code and scalable solutions that grow with your business over time.",
    },
  ];

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
            Design Philosophy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide every project I build
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {principle.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
