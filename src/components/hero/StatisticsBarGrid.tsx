"use client";

import { motion } from "framer-motion";

export function StatisticsBarGrid() {
  const stats = [
    { value: "+$42M", label: "Client Revenue Generated" },
    { value: "+184%", label: "Avg. Conversion Rate Lift" },
    { value: "99.8", label: "Avg. Lighthouse Speed Score" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, stiffness: 100, damping: 20 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.1, stiffness: 100, damping: 20 }}
          className="bg-surface-1 border border-border-subdued rounded-2xl p-5 md:p-6 text-center"
        >
          <div className="font-mono text-3xl md:text-4xl font-bold text-accent-indigo mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-secondary font-medium">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
