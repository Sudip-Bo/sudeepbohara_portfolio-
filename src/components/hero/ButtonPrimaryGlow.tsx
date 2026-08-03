"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface ButtonPrimaryGlowProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function ButtonPrimaryGlow({ children, href, onClick, className = "" }: ButtonPrimaryGlowProps) {
  const ButtonContent = () => (
    <motion.button
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`group relative px-8 py-4 bg-accent-indigo text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-glow-indigo focus:outline-none focus:ring-2 focus:ring-accent-indigo focus:ring-offset-2 focus:ring-offset-background ${className}`}
    >
      <span className="flex items-center gap-2">
        {children}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
      </span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href}>
        <ButtonContent />
      </a>
    );
  }

  return <ButtonContent />;
}
