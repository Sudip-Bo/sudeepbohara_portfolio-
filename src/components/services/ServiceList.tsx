"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Code,
  Smartphone,
  RefreshCw,
  Wrench,
  Search,
  TrendingUp,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Website Design",
    description:
      "Strategic design that builds trust and communicates your brand clearly to your customers.",
    outcome: "A professional website that builds credibility and attracts customers",
    price: "Starting at $3,000",
  },
  {
    icon: Code,
    title: "Website Development",
    description:
      "Clean, performant code built with modern technologies that scales with your business.",
    outcome: "A fast, reliable website that performs well and is easy to maintain",
    price: "Starting at $5,000",
  },
  {
    icon: Smartphone,
    title: "Landing Pages",
    description:
      "Focused pages designed to convert visitors into customers with clear calls to action.",
    outcome: "Targeted pages that drive specific business goals",
    price: "Starting at $1,500",
  },
  {
    icon: RefreshCw,
    title: "Booking Systems",
    description:
      "Simple, reliable appointment scheduling that saves time and reduces no-shows.",
    outcome: "Streamlined operations that improve customer experience",
    price: "Starting at $4,000",
  },
  {
    icon: Wrench,
    title: "Website Redesign",
    description:
      "Transforming outdated websites into modern experiences that perform better and build trust.",
    outcome: "A refreshed digital presence that better serves your business",
    price: "Starting at $4,000",
  },
  {
    icon: Search,
    title: "SEO-Ready Websites",
    description:
      "Built with search engine best practices to help your business get found online.",
    outcome: "Better visibility in search results for your target audience",
    price: "Starting at $2,000",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Optimization",
    description:
      "Data-driven insights and continuous improvement to maximize performance.",
    outcome: "Clear understanding of how your website performs and where to improve",
    price: "Starting at $1,000/month",
  },
  {
    icon: Shield,
    title: "Website Maintenance",
    description:
      "Ongoing support and maintenance to keep your website secure and up-to-date.",
    outcome: "Peace of mind knowing your website is monitored and maintained",
    price: "Starting at $500/month",
  },
];

export function ServiceList() {
  return (
    <section className="py-24 px-6 bg-surface-1">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ stiffness: 100, damping: 20, delay: index * 0.1 }}
              className="bg-surface-2 rounded-2xl p-8 border border-border-subdued hover:border-border-highlight hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-surface-1 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-accent-indigo" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 display-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="bg-surface-1 rounded-xl p-4 mb-4 border border-border-subdued">
                <p className="text-sm font-medium text-accent-indigo">
                  Business Outcome
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {service.outcome}
                </p>
              </div>
              <p className="text-sm font-semibold text-foreground">
                {service.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
