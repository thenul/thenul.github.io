import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldAlert, Cpu, Layers } from 'lucide-react';

export function CertificatesSection() {
  const placeholders = [
    {
      title: "Embedded Systems & Real-Time Kernel Development",
      issuer: "LinkedIn Learning / Technical Specialization",
      status: "Upcoming Certification",
      desc: "Focusing on preemptive scheduling interfaces, memory management routines, and task synchronization matrices in FreeRTOS environments.",
      icon: Cpu,
    },
    {
      title: "Altium Designer PCB Routing & Signal Isolation",
      issuer: "Altium Academic / Board Design",
      status: "Upcoming Certification",
      desc: "PCB track geometry, multi-layer stack-up planning, thermal relief management, and high-frequency digital signal isolation policies.",
      icon: Layers,
    },
    {
      title: "UTS Practical Engineering License & Safety Core",
      issuer: "University of Technology Sydney",
      status: "Completed / Academic Core",
      desc: "Laboratory instrumentation safety protocols, high-voltage handling rules, precision soldering guidelines, and signal debug procedures.",
      icon: Award,
    }
  ];

  return (
    <section id="certificates" className="py-20 relative bg-card/10 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 block" />
            Certificates &amp; Licenses
          </h2>
          <p className="mt-3 text-sm font-mono text-muted-foreground/60">
            Professional technical qualifications and engineering licenses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholders.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-neon bg-[#0a0e1a]/85 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <span className="text-xs font-mono text-cyan-500/70 block mb-3">
                    {cert.issuer}
                  </span>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">
                    {cert.desc}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider uppercase bg-cyan-500/5 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded">
                    {cert.status}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
