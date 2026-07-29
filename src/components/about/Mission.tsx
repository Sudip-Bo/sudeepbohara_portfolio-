"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

export function Mission() {
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
            My Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help businesses build trust, attract customers, and grow through
            premium digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Build a globally respected technology company that begins with
              premium web design services, grows into a digital agency, and
              eventually launches products and software used worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Core Philosophy</h3>
            <p className="text-gray-600 leading-relaxed">
              A website is like water—essential for every modern business. It
              should be accessible, reliable, and help your business grow every
              day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Core Promise</h3>
            <p className="text-gray-600 leading-relaxed">
              I don&apos;t just build websites. I partner with businesses to create
              digital experiences that build trust, solve problems, and support
              long-term growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
