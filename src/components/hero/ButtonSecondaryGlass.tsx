"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { ReactNode } from "react";

interface ButtonSecondaryGlassProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function ButtonSecondaryGlass({ children, href, onClick, className = "" }: ButtonSecondaryGlassProps) {
  const ButtonContent = () => (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`group px-8 py-4 frosted-dark text-primary font-medium rounded-xl border border-border-subdued hover:border-border-highlight transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-indigo focus:ring-offset-2 focus:ring-offset-background ${className}`}
    >
      <span className="flex items-center gap-2">
        <Calendar className="w-5 h-5 text-accent-cyan" aria-hidden="true" />
        {children}
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
