"use client";

import { motion } from "framer-motion";
import { Award, Users, Zap, Shield, Clock, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Research-Driven Approach",
    description:
      "I take time to understand your business, customers, and goals before writing a single line of code.",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    description:
      "I don't just build websites—I partner with you for ongoing support and growth as your business evolves.",
  },
  {
    icon: Zap,
    title: "Clear Communication",
    description:
      "Regular updates, transparent timelines, and no technical jargon unless you ask for it.",
  },
  {
    icon: Shield,
    title: "Quality Code",
    description:
      "Clean, maintainable code that's built to last and easy for other developers to understand.",
  },
  {
    icon: Clock,
    title: "Reliable Support",
    description:
      "Available when you need me with clear response times and ongoing maintenance options.",
  },
  {
    icon: TrendingUp,
    title: "Business-Focused",
    description:
      "Every decision is made with your business goals in mind—design and code serve your growth.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ stiffness: 100, damping: 20 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 display-tight">
            Why Work With Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What you can expect when we partner together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ stiffness: 100, damping: 20, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 bg-surface-1 rounded-2xl border border-border-subdued shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-surface-2 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-accent-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
