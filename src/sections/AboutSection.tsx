import React from 'react';
import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-100 flex items-center gap-4 font-['Space_Grotesk']">
            <span className="w-8 h-[2px] bg-slate-200 block" />
            About
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <div className="md:col-span-4 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative group"
              >
                <img 
                  src="/profile.jpeg" 
                  alt="Thenul de Mel profile" 
                  className="rounded-full aspect-square object-cover border border-slate-700/50 w-64 h-64 md:w-full md:h-full max-w-[280px]"
                />
              </motion.div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-5 text-base text-slate-400 leading-relaxed font-light"
              >
                <p>
                  My journey into electronics started with a simple curiosity: how do things actually work at the lowest level? That question led me to pursue Electronics Engineering at the University of Technology Sydney, where I've immersed myself in the world of hardware — from bare-metal microcontrollers to custom PCB layouts.
                </p>
                <p>
                  I specialize in embedded systems, microcontrollers, and circuit design. Whether it's writing lean C for an ARM Cortex-M4, debugging a UART driver at 3am, or designing a robust power stage from scratch — I approach engineering with a focus on precision and reliability. I believe elegant hardware enables powerful software.
                </p>
                <p>
                  I'm also deeply interested in Linux and real-time operating systems. There's something satisfying about getting close to the metal — controlling every clock cycle, managing memory manually, and understanding exactly why things work the way they do.
                </p>
                <p>
                  My ultimate aspiration lies in space technology and satellite systems. I want to build hardware that survives extreme environments — radiation, vacuum, temperature extremes — pushing the boundaries of what's possible when silicon meets the void of space.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
