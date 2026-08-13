"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Zap, Shield } from "lucide-react";

export function TrustMetricsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();
  const [counters, setCounters] = useState({ revenue: 0, conversion: 0, lighthouse: 0 });

  const metrics = [
    {
      value: "+$42M",
      label: "Client Revenue Generated",
      icon: TrendingUp,
      color: "text-accent-indigo",
      bgColor: "bg-accent-indigo/10",
      target: 42,
      suffix: "M",
      prefix: "+$"
    },
    {
      value: "+184%",
      label: "Avg. Conversion Rate Lift",
      icon: Zap,
      color: "text-accent-cyan",
      bgColor: "bg-accent-cyan/10",
      target: 184,
      suffix: "%",
      prefix: "+"
    },
    {
      value: "99.8",
      label: "Avg. Lighthouse Speed Score",
      icon: Shield,
      color: "text-accent-emerald",
      bgColor: "bg-accent-emerald/10",
      target: 99.8,
      suffix: "",
      prefix: ""
    }
  ];

  useEffect(() => {
    if (!isInView || prefersReducedMotion) {
      if (prefersReducedMotion) {
        setCounters({ revenue: 42, conversion: 184, lighthouse: 99.8 });
      }
      return;
    }

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease out

      setCounters({
        revenue: Math.floor(42 * easeProgress),
        conversion: Math.floor(184 * easeProgress),
        lighthouse: parseFloat((99.8 * easeProgress).toFixed(1))
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters({ revenue: 42, conversion: 184, lighthouse: 99.8 });
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView, prefersReducedMotion]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 max-w-4xl mx-auto mb-12 md:mb-16"
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + index * 0.1 }}
          whileHover={{
            y: -4,
            borderColor: "rgba(99, 102, 241, 0.3)",
            boxShadow: "0 12px 40px rgba(99, 102, 241, 0.15)"
          }}
          className="bg-surface-1/80 backdrop-blur-sm border border-border-subdued rounded-2xl p-4 md:p-5 text-center cursor-pointer transition-all duration-300 group relative"
          role="group"
          aria-label={`Metric: ${metric.label}`}
        >
          {/* Icon with glow */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
            className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${metric.bgColor} mb-3 mx-auto`}
          >
            <metric.icon className={`w-5 h-5 ${metric.color}`} />
          </motion.div>

          {/* Animated counter */}
          <div className={`font-mono text-xl md:text-2xl lg:text-[1.5rem] font-bold ${metric.color} mb-2`}>
            {index === 0 && `${metric.prefix}${counters.revenue}${metric.suffix}`}
            {index === 1 && `${metric.prefix}${counters.conversion}${metric.suffix}`}
            {index === 2 && counters.lighthouse}
          </div>

          {/* Label */}
          <div className="text-sm md:text-[0.8125rem] text-secondary font-medium">
            {metric.label}
          </div>

          {/* Subtle glow on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at center, ${metric.color.replace('text-', 'rgba(').replace('indigo', '99, 102, 241').replace('cyan', '6, 182, 212').replace('emerald', '16, 185, 129')}, 0.1) 0%, transparent 70%)`
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
