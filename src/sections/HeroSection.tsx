import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-32 h-32 md:w-40 md:h-40 mb-8 rounded-full flex items-center justify-center bg-[#161B26]/50 border border-slate-800"
        >
          <Cpu className="w-12 h-12 text-primary" />
          <div className="absolute inset-0 rounded-full border border-transparent animate-[spin_10s_linear_infinite]" style={{ borderTopColor: 'rgba(56,189,248,0.8)', borderRightColor: 'rgba(59,130,246,0.2)' }} />
          <div className="absolute inset-[-8px] rounded-full border border-transparent animate-[spin_15s_linear_infinite_reverse]" style={{ borderTopColor: 'rgba(56,189,248,0.25)' }} />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-slate-100"
        >
          Thenul De Mel
        </motion.h1>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-3xl font-medium tracking-wide mb-6 text-primary"
        >
          Electronics Engineering @ UTS
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-slate-400 max-w-2xl text-lg md:text-xl font-light"
        >
          Building precise, purposeful hardware. Bridging the gap between silicon, embedded systems, and space technology.
        </motion.p>
      </div>
    </section>
  );
}
