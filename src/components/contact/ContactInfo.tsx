"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Linkedin, Github, Twitter } from "lucide-react";

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Contact Information
        </h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Email</h3>
              <a
                href="mailto:sudeepbohara@gmail.com"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                sudeepbohara@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
              <a
                href="tel:+1234567890"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Location</h3>
              <p className="text-gray-600">
                Available for remote projects worldwide
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 6:00 PM EST
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-gray-200">
        <h3 className="font-bold text-gray-900 mb-4">Follow Me</h3>
        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/sudeepbohara"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-indigo-100 hover:text-indigo-600 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/sudeepbohara"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-indigo-100 hover:text-indigo-600 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/sudeepbohara"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-indigo-100 hover:text-indigo-600 transition-all"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-2xl p-6">
        <h3 className="font-bold text-gray-900 mb-2">Quick Response Guarantee</h3>
        <p className="text-gray-600 text-sm">
          I respond to all inquiries within 24 hours. For urgent projects,
          please mention &quot;Urgent&quot; in your message subject.
        </p>
      </div>
    </motion.div>
  );
}
