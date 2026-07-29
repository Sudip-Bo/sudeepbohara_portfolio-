"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Send a Message</h2>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            placeholder="Your Company"
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Service Interested In
          </label>
          <select
            id="service"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white"
          >
            <option value="">Select a service</option>
            <option value="design">Website Design</option>
            <option value="development">Website Development</option>
            <option value="landing">Landing Page</option>
            <option value="redesign">Website Redesign</option>
            <option value="booking">Booking System</option>
            <option value="seo">SEO Services</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Project Budget
          </label>
          <select
            id="budget"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white"
          >
            <option value="">Select budget range</option>
            <option value="1-3k">$1,000 - $3,000</option>
            <option value="3-5k">$3,000 - $5,000</option>
            <option value="5-10k">$5,000 - $10,000</option>
            <option value="10-25k">$10,000 - $25,000</option>
            <option value="25k+">$25,000+</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Project Details *
          </label>
          <textarea
            id="message"
            rows={6}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
            placeholder="Tell me about your project, goals, and timeline..."
          />
        </div>
        <button
          type="submit"
          className="w-full px-8 py-4 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
        >
          Send Message
          <Send className="w-5 h-5" />
        </button>
        <p className="text-sm text-gray-500 text-center">
          I typically respond within 24 hours
        </p>
      </form>
    </motion.div>
  );
}
