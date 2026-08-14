"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Code,
  Smartphone,
  RefreshCw,
  Wrench,
  Search,
} from "lucide-react";
import { useEffect, useState } from "react";

const iconMap = {
  Layout,
  Code,
  Smartphone,
  RefreshCw,
  Wrench,
  Search,
};

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string | null;
}

const fallbackServices: Service[] = [
  { id: '1', title: 'Website Design', description: 'Strategic design that communicates your value and converts visitors.', icon: 'Layout' },
  { id: '2', title: 'Website Development', description: 'Clean, performant code built with modern frameworks and best practices.', icon: 'Code' },
  { id: '3', title: 'Landing Pages', description: 'Focused pages designed to drive specific actions and conversions.', icon: 'Smartphone' },
  { id: '4', title: 'Website Redesign', description: 'Modernize your digital presence with improved UX and performance.', icon: 'RefreshCw' },
  { id: '5', title: 'Maintenance & Support', description: 'Reliable ongoing support to keep your site secure and performing well.', icon: 'Wrench' },
  { id: '6', title: 'SEO Services', description: 'Technical optimization to improve visibility and search performance.', icon: 'Search' },
];

export function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/services?published=true')
      .then(res => res.json())
      .then(data => {
        if (data.services && data.services.length > 0) {
          setServices(data.services.slice(0, 6)); // Show only first 6
        } else {
          setServices(fallbackServices);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch services:', err);
        setServices(fallbackServices);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-12 bg-surface-1 rounded-lg w-48 mx-auto mb-4 animate-pulse" />
            <div className="h-6 bg-surface-1 rounded-lg w-96 mx-auto animate-pulse" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-surface-1 rounded-2xl p-8 h-48 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (services.length === 0) {
    return null;
  }
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
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Design and development services that build digital presence and drive results
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon && iconMap[service.icon as keyof typeof iconMap]
              ? iconMap[service.icon as keyof typeof iconMap]
              : Layout;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ stiffness: 100, damping: 20, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-8 bg-surface-1 rounded-2xl border border-border-subdued hover:border-border-highlight hover:shadow-lg will-change-transform"
              >
                <div className="w-12 h-12 bg-surface-2 rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-accent-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
