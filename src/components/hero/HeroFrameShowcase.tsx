"use client";

import { motion, useMotionValue, useTransform, useSpring, useReducedMotion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Zap, ShieldCheck, Activity, Code, Terminal } from "lucide-react";

export function HeroFrameShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  // Cursor glow reflection effect
  const glowX = useTransform(mouseX, [-0.5, 0.5], [-100, 100]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], [-100, 100]);

  // Animated terminal output
  useEffect(() => {
    if (prefersReducedMotion) {
      setTerminalLines([
        "> npm run build",
        "> ✓ Build completed",
        "> ✓ Lighthouse: 100/100",
      ]);
      return;
    }

    const lines = [
      "> npm run build",
      "> Building...",
      "> ✓ Next.js 14 compiled",
      "> ✓ Tailwind CSS optimized",
      "> ✓ Lighthouse: 100/100",
      "> Ready in 1.2s",
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < lines.length) {
        setTerminalLines(prev => [...prev, lines[index]]);
        index++;
      } else {
        setTerminalLines([]);
        index = 0;
      }
    }, 800);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current || prefersReducedMotion) return;
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
      initial={{ opacity: 0, rotateX: prefersReducedMotion ? 0 : 0, y: 40 }}
      animate={{ opacity: 1, rotateX: prefersReducedMotion ? 0 : 8, y: 0 }}
      transition={{ delay: 0.6, stiffness: 100, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: prefersReducedMotion ? 0 : rotateX,
        rotateY: prefersReducedMotion ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative max-w-5xl mx-auto mt-12 sm:mt-16 md:mt-20 lg:mt-24 perspective-1000"
    >
      {/* Browser Frame with Enhanced Glass Effect */}
      <motion.div
        className="relative bg-surface-1/95 backdrop-blur-xl border border-border-subdued rounded-3xl overflow-hidden"
        style={{
          boxShadow: isHovered 
            ? "0 40px 80px -20px rgba(0,0,0,0.8), 0 0 60px rgba(99, 102, 241, 0.15), inset 0 1px 0 rgba(255,255,255,0.1)"
            : "0 40px 80px -20px rgba(0,0,0,0.7), 0 0 40px rgba(99, 102, 241, 0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Glass Reflection Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Cursor Glow Reflection */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(300px circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 70%)`,
              x: glowX,
              y: glowY,
            }}
            aria-hidden="true"
          />
        )}

        {/* Browser Chrome with Enhanced Detail */}
        <div className="h-12 bg-surface-1/80 backdrop-blur-md border-b border-border-subdued flex items-center px-4 gap-3 relative z-10">
          <div className="flex gap-2.5">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-lg shadow-[#FF5F56]/30" 
              aria-hidden="true" 
            />
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-lg shadow-[#FFBD2E]/30" 
              aria-hidden="true" 
            />
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-3 h-3 rounded-full bg-[#27C93F] shadow-lg shadow-[#27C93F]/30" 
              aria-hidden="true" 
            />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-[rgba(255,255,255,0.03)] border border-border-subdued/50 rounded-lg px-5 py-2 max-w-xs flex items-center gap-2 shadow-inner">
              <div className="w-2 h-2 rounded-full bg-accent-emerald/60" />
              <span className="text-xs font-mono text-secondary/80 tracking-wide">sudeepbohara.com.np/preview</span>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="bg-[#050507] p-6 md:p-8 min-h-[300px] md:min-h-[400px] relative">
          {/* Subtle Grid Pattern in Dashboard */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-12 gap-4 md:gap-6 relative z-10">
            {/* Sidebar with Animated Icons */}
            <div className="col-span-2 hidden md:flex flex-col gap-3">
              {[
                { color: "bg-accent-indigo", delay: 0 },
                { color: "bg-accent-cyan", delay: 0.1 },
                { color: "bg-accent-emerald", delay: 0.2 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + item.delay }}
                  whileHover={{ scale: 1.05, x: 2 }}
                  className="w-10 h-10 bg-surface-1 rounded-xl border border-border-subdued flex items-center justify-center cursor-pointer transition-all"
                >
                  <motion.div 
                    className={`w-4 h-4 ${item.color} rounded-sm`}
                    animate={prefersReducedMotion ? {} : {
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: item.delay,
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Main Content */}
            <div className="col-span-12 md:col-span-10 space-y-4 md:space-y-6">
              {/* Analytics Graph with Animation */}
              <div className="bg-surface-1/80 backdrop-blur-sm border border-border-subdued rounded-2xl p-4 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-accent-indigo" />
                    <span className="text-sm text-secondary font-medium">Performance Analytics</span>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    className="text-xs font-mono text-accent-emerald font-semibold bg-accent-emerald/10 px-2 py-1 rounded-md"
                  >
                    +184%
                  </motion.div>
                </div>
                <div className="h-24 md:h-32 flex items-end gap-1 md:gap-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      whileHover={{ height: `${height + 5}%` }}
                      transition={{ 
                        delay: 0.8 + i * 0.05, 
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100,
                      }}
                      className="flex-1 bg-gradient-to-t from-accent-indigo/30 via-accent-indigo/60 to-accent-indigo rounded-sm cursor-pointer relative group"
                    >
                      <motion.div 
                        className="absolute inset-0 bg-accent-cyan/0 group-hover:bg-accent-cyan/20 transition-colors duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats Cards with Hover Effects */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Conversion", value: "+184%", color: "text-accent-indigo", icon: Activity },
                  { label: "Performance", value: "99.8/100", color: "text-accent-emerald", icon: ShieldCheck },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    whileHover={{ 
                      y: -4, 
                      borderColor: "rgba(99, 102, 241, 0.3)",
                      boxShadow: "0 8px 30px rgba(99, 102, 241, 0.1)",
                    }}
                    className="bg-surface-1/80 backdrop-blur-sm border border-border-subdued rounded-2xl p-4 cursor-pointer transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <stat.icon className="w-4 h-4 text-secondary/60" />
                      <div className="text-xs text-secondary font-medium">{stat.label}</div>
                    </div>
                    <motion.div 
                      className={`text-lg md:text-xl font-mono font-bold ${stat.color}`}
                      animate={prefersReducedMotion ? {} : {
                        textShadow: ["0 0 0px rgba(99, 102, 241, 0)", "0 0 20px rgba(99, 102, 241, 0.3)", "0 0 0px rgba(99, 102, 241, 0)"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    >
                      {stat.value}
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Terminal Output Animation */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="bg-[#0A0B10] border border-border-subdued rounded-xl p-4 font-mono text-xs"
              >
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border-subdued/50">
                  <Terminal className="w-4 h-4 text-accent-cyan" />
                  <span className="text-secondary/60">Terminal</span>
                </div>
                <AnimatePresence mode="popLayout">
                  {terminalLines.map((line, i) => (
                    <motion.div
                      key={`${line}-${i}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.3 }}
                      className={`mb-1 ${line?.includes('✓') ? 'text-accent-emerald' : line?.includes('>') ? 'text-accent-cyan' : 'text-secondary/80'}`}
                    >
                      {line}
                    </motion.div>
                  ))}
                </AnimatePresence>
                <motion.div
                  animate={prefersReducedMotion ? {} : { opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-accent-cyan ml-1"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Floating Badge 1 - Top Left with Enhanced Glow */}
        <motion.div
          initial={{ opacity: 0, z: 0, scale: 0.9 }}
          animate={{ opacity: 1, z: 35, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ delay: 1.1, stiffness: 100, damping: 20 }}
          className="absolute -top-5 -left-5 md:-top-8 md:-left-8 frosted-dark rounded-full px-4 py-2 border border-accent-indigo/30 flex items-center gap-2 z-10"
          style={{ 
            transform: "translateZ(35px)",
            boxShadow: "0 8px 32px rgba(99, 102, 241, 0.2)",
          }}
        >
          <motion.div
            animate={prefersReducedMotion ? {} : {
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Zap className="w-4 h-4 text-accent-indigo" aria-hidden="true" />
          </motion.div>
          <span className="text-xs font-mono text-primary font-medium">Next.js 14 App Router</span>
        </motion.div>

        {/* Floating Badge 2 - Bottom Right with Enhanced Glow */}
        <motion.div
          initial={{ opacity: 0, z: 0, scale: 0.9 }}
          animate={{ opacity: 1, z: 45, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ delay: 1.15, stiffness: 100, damping: 20 }}
          className="absolute -bottom-5 -right-5 md:-bottom-8 md:-right-8 frosted-dark rounded-full px-4 py-2 border border-accent-emerald/30 flex items-center gap-2 z-10"
          style={{ 
            transform: "translateZ(45px)",
            boxShadow: "0 8px 32px rgba(16, 185, 129, 0.2)",
          }}
        >
          <motion.div
            animate={prefersReducedMotion ? {} : {
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ShieldCheck className="w-4 h-4 text-accent-emerald" aria-hidden="true" />
          </motion.div>
          <span className="text-xs font-mono text-primary font-medium">100/100 Core Web Vitals</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
