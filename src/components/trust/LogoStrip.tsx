"use client";

import { motion, useReducedMotion } from "framer-motion";

const technologies = [
  { 
    name: "Next.js", 
    svg: `<svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_408_134" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180"><circle cx="90" cy="90" r="90" fill="black"/></mask><g mask="url(#mask0_408_134)"><circle cx="90" cy="90" r="90" fill="black"/><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_134)"/><rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_134)"/></g><defs><linearGradient id="paint0_linear_408_134" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient><linearGradient id="paint1_linear_408_134" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient></defs></svg>`
  },
  { 
    name: "React", 
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="2" fill="currentColor"/><g stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></g></svg>`
  },
  { 
    name: "TypeScript", 
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" fill-opacity="0.2"/><path d="M14 8v3h-2v-2h-2v2H8V8h6zm-2 5v3h2v-2h2v2h2v-3h-6z" fill="currentColor"/></svg>`
  },
  { 
    name: "Tailwind CSS", 
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8.6-1.6 1.6-2.4 3.2-2.4 1.2 0 2.4.8 3.2 2.4 1.6 2.4 3.2 4 6 4 3.2 0 5.2-1.6 6-4.8-.6 1.6-1.6 2.4-3.2 2.4-1.2 0-2.4-.8-3.2-2.4-1.6-2.4-3.2-4-6-4zM6.001 12c-3.2 0-5.2 1.6-6 4.8.6-1.6 1.6-2.4 3.2-2.4 1.2 0 2.4.8 3.2 2.4 1.6 2.4 3.2 4 6 4 3.2 0 5.2-1.6 6-4.8-.6 1.6-1.6 2.4-3.2 2.4-1.2 0-2.4-.8-3.2-2.4-1.6-2.4-3.2-4-6-4z"/></svg>`
  },
  { 
    name: "Framer Motion", 
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 0H0v24h24V0H8zm12 21.98H4V2.02h16v19.96z"/></svg>`
  },
  { 
    name: "Prisma", 
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.5A2.5 2.5 0 0 1 2.5 0h19A2.5 2.5 0 0 1 24 2.5v19a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 0 21.5v-19z" fill="currentColor" fill-opacity="0.2"/><path d="M12 6l6 10H6l6-10z" fill="currentColor"/></svg>`
  },
  { 
    name: "PostgreSQL", 
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="currentColor" fill-opacity="0.2"/><path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" fill="currentColor"/></svg>`
  },
  { 
    name: "Vercel", 
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>`
  },
];

export function LogoStrip() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 max-w-6xl mx-auto"
      aria-label="Technologies used: Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Prisma, PostgreSQL, Vercel"
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.4, 
            delay: 0.2 + index * 0.05,
          }}
          whileHover={{ 
            y: -2,
            opacity: 0.8,
          }}
          className="relative group"
        >
          <div
            className="h-8 md:h-8 lg:h-8 w-auto opacity-40 group-hover:opacity-80 transition-all duration-300"
            dangerouslySetInnerHTML={{ __html: tech.svg }}
            aria-label={`${tech.name} logo`}
          />
          {!prefersReducedMotion && (
            <motion.div
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
