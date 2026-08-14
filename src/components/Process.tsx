"use client";

import { motion } from "framer-motion";
import { MessageSquare, Palette, Code2, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery",
    description:
      "Understanding your business, goals, and audience to establish project direction.",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Creating visual solutions that align with your brand and serve user needs.",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Building with modern technologies for performance, maintainability, and scale.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Deploying your solution and ensuring smooth operation from day one.",
  },
  {
    icon: CheckCircle,
    title: "Support",
    description:
      "Ongoing support to maintain performance and adapt to your evolving needs.",
  },
];

export function Process() {
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
            Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A structured approach to delivering quality digital solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ stiffness: 100, damping: 20, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-surface-2 rounded-2xl shadow-sm flex items-center justify-center mx-auto">
                  <step.icon className="w-8 h-8 text-accent-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
