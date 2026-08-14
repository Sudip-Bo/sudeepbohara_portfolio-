"use client";

import { motion } from "framer-motion";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "PostgreSQL",
  "Vercel",
  "GraphQL",
  "Prisma",
  "Stripe",
  "AWS",
];

export function Technologies() {
  return (
    <section className="py-20 px-6 bg-surface-1">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ stiffness: 100, damping: 20 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 display-tight">
            Technologies I Use
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Modern tools and frameworks for building premium digital experiences
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ stiffness: 100, damping: 20, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-6 py-3 bg-surface-2 rounded-full border border-border-subdued text-foreground font-medium hover:border-border-highlight hover:text-accent-primary transition-all cursor-pointer"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
