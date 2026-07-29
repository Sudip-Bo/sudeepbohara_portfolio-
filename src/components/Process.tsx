"use client";

import { motion } from "framer-motion";
import { MessageSquare, Palette, Code2, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery",
    description:
      "I learn about your business, goals, and target audience to create a solid foundation.",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "I create designs that align with your brand and serve your users' needs.",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "I build your solution using modern technologies for optimal performance.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "I deploy your website and ensure everything runs smoothly from day one.",
  },
  {
    icon: CheckCircle,
    title: "Support",
    description:
      "Ongoing support to keep your digital presence at its best as your business grows.",
  },
];

export function Process() {
  return (
    <section className="py-24 px-6 bg-surface-1">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ stiffness: 100, damping: 20 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 display-tight">
            My Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A clear, collaborative approach to building your digital presence
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
                  <step.icon className="w-8 h-8 text-accent-indigo" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-indigo rounded-full flex items-center justify-center text-white text-sm font-bold">
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
