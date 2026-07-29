"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      service: formData.get('service') as string,
      budget: formData.get('budget') as string,
      message: formData.get('message') as string,
      honeypot: formData.get('website') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.currentTarget.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ stiffness: 100, damping: 20 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 display-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to build trust and grow your business? Let&apos;s talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ stiffness: 100, damping: 20 }}
          >
            {submitStatus === 'success' ? (
              <div className="bg-surface-2 border border-accent-emerald rounded-2xl p-8 text-center">
                <p className="text-foreground font-medium">Message sent successfully! I&apos;ll get back to you within 24 hours.</p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-4 text-accent-emerald hover:text-foreground font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="bg-surface-2 border border-red-500 rounded-2xl p-8 text-center">
                <p className="text-foreground font-medium">Something went wrong. Please try again.</p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-4 text-red-500 hover:text-foreground font-medium"
                >
                  Try again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    minLength={2}
                    maxLength={100}
                    autoComplete="name"
                    className="w-full px-4 py-3 rounded-xl border border-border-subdued focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 outline-none transition-all bg-surface-1 text-foreground placeholder:text-muted-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 rounded-xl border border-border-subdued focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 outline-none transition-all bg-surface-1 text-foreground placeholder:text-muted-foreground"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-xl border border-border-subdued focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 outline-none transition-all bg-surface-1 text-foreground placeholder:text-muted-foreground"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border-subdued focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 outline-none transition-all bg-surface-1 text-foreground"
                  >
                    <option value="">Select a service</option>
                    <option value="Website Design">Website Design</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Booking System">Booking System</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="SEO">SEO</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border-subdued focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 outline-none transition-all bg-surface-1 text-foreground"
                  >
                    <option value="">Select budget range</option>
                    <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                    <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000+">$10,000+</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={1000}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border-subdued focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 outline-none transition-all resize-none bg-surface-1 text-foreground placeholder:text-muted-foreground"
                    placeholder="Tell me about your project..."
                  />
                </div>
                {/* Honeypot field for spam protection */}
                <input
                  type="text"
                  name="website"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-accent-indigo text-white font-medium rounded-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent-indigo focus:ring-offset-2 focus:ring-offset-background"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5" aria-hidden="true" />
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ stiffness: 100, damping: 20 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-surface-2 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-accent-indigo" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Email</h3>
                <a
                  href="mailto:sudeepbohara@gmail.com"
                  className="text-muted-foreground hover:text-accent-indigo transition-colors"
                >
                  sudeepbohara@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-surface-2 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-accent-indigo" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Phone</h3>
                <a
                  href="tel:+1234567890"
                  className="text-muted-foreground hover:text-accent-indigo transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-surface-2 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent-indigo" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">
                  Available for remote projects worldwide
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-border-subdued">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Response Time
              </h3>
              <p className="text-muted-foreground">
                I typically respond within 24 hours. For urgent inquiries,
                please mention &quot;Urgent&quot; in your message subject.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
