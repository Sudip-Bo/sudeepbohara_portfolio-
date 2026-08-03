"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { Zap, ShieldCheck } from "lucide-react";

export function HeroFrameShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXVal = (e.clientX - rect.left) / width - 0.5;
    const mouseYVal = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseXVal);
    y.set(mouseYVal);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotateX: 0, y: 40 }}
      animate={{ opacity: 1, rotateX: 8, y: 0 }}
      transition={{ delay: 0.5, stiffness: 100, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative max-w-5xl mx-auto mt-16 md:mt-24 perspective-1000"
    >
      {/* Browser Frame */}
      <div className="relative bg-surface-1 border border-border-subdued rounded-3xl overflow-hidden shadow-ambient">
        {/* Browser Chrome */}
        <div className="h-10 bg-surface-1 border-b border-border-subdued flex items-center px-4 gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" aria-hidden="true" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" aria-hidden="true" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" aria-hidden="true" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-[rgba(255,255,255,0.05)] border border-border-subdued rounded-md px-4 py-1.5 max-w-xs">
              <span className="text-xs font-mono text-secondary">sudeepbohara.com.np/preview</span>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="bg-[#050507] p-6 md:p-8 min-h-[300px] md:min-h-[400px]">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Sidebar */}
            <div className="col-span-2 hidden md:block space-y-3">
              <div className="w-10 h-10 bg-surface-1 rounded-lg border border-border-subdued flex items-center justify-center">
                <div className="w-4 h-4 bg-accent-indigo rounded-sm" />
              </div>
              <div className="w-10 h-10 bg-surface-1 rounded-lg border border-border-subdued flex items-center justify-center">
                <div className="w-4 h-4 bg-accent-cyan rounded-sm" />
              </div>
              <div className="w-10 h-10 bg-surface-1 rounded-lg border border-border-subdued flex items-center justify-center">
                <div className="w-4 h-4 bg-accent-emerald rounded-sm" />
              </div>
            </div>

            {/* Main Content */}
            <div className="col-span-12 md:col-span-10 space-y-4 md:space-y-6">
              {/* Analytics Graph */}
              <div className="bg-surface-1 border border-border-subdued rounded-xl p-4 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-secondary">Performance Analytics</div>
                  <div className="text-xs font-mono text-accent-emerald">+184%</div>
                </div>
                <div className="h-24 md:h-32 flex items-end gap-1 md:gap-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                      className="flex-1 bg-gradient-to-t from-accent-indigo/20 to-accent-indigo rounded-sm"
                    />
                  ))}
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-1 border border-border-subdued rounded-xl p-4">
                  <div className="text-xs text-secondary mb-1">Conversion</div>
                  <div className="text-lg md:text-xl font-mono font-bold text-accent-indigo">+184%</div>
                </div>
                <div className="bg-surface-1 border border-border-subdued rounded-xl p-4">
                  <div className="text-xs text-secondary mb-1">Performance</div>
                  <div className="text-lg md:text-xl font-mono font-bold text-accent-emerald">99.8/100</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Badge 1 - Top Left */}
        <motion.div
          initial={{ opacity: 0, z: 0 }}
          animate={{ opacity: 1, z: 35 }}
          transition={{ delay: 1.1, stiffness: 100, damping: 20 }}
          className="absolute -top-5 -left-5 md:-top-8 md:-left-8 frosted-dark rounded-full px-4 py-2 border border-accent-indigo/30 flex items-center gap-2 z-10"
          style={{ transform: "translateZ(35px)" }}
        >
          <Zap className="w-4 h-4 text-accent-indigo" aria-hidden="true" />
          <span className="text-xs font-mono text-primary">Next.js 14 App Router</span>
        </motion.div>

        {/* Floating Badge 2 - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, z: 0 }}
          animate={{ opacity: 1, z: 45 }}
          transition={{ delay: 1.15, stiffness: 100, damping: 20 }}
          className="absolute -bottom-5 -right-5 md:-bottom-8 md:-right-8 frosted-dark rounded-full px-4 py-2 border border-accent-emerald/30 flex items-center gap-2 z-10"
          style={{ transform: "translateZ(45px)" }}
        >
          <ShieldCheck className="w-4 h-4 text-accent-emerald" aria-hidden="true" />
          <span className="text-xs font-mono text-primary">100/100 Core Web Vitals</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
