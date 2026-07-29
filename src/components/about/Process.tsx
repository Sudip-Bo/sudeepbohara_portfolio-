"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code2, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery",
    description:
      "Deep dive into your business, goals, audience, and competitive landscape to create a strategic foundation.",
    duration: "1-2 weeks",
  },
  {
    icon: PenTool,
    title: "Strategy & Design",
    description:
      "Create wireframes, mockups, and prototypes that align with your brand and objectives.",
    duration: "2-4 weeks",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Build your solution using modern technologies with clean, maintainable code.",
    duration: "4-8 weeks",
  },
  {
    icon: Rocket,
    title: "Testing & Launch",
    description:
      "Rigorous testing, optimization, and seamless deployment to production.",
    duration: "1-2 weeks",
  },
  {
    icon: CheckCircle,
    title: "Support & Growth",
    description:
      "Ongoing maintenance, performance monitoring, and continuous improvement.",
    duration: "Ongoing",
  },
];

export function Process() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A clear, collaborative approach to building your digital presence
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow relative z-10">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="text-xs font-semibold text-indigo-600 mb-2">
                    {step.duration}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
