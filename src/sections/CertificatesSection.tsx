import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cpu, Blocks, FileCheck, ExternalLink } from 'lucide-react';

export function CertificatesSection() {
  const credentials = [
    {
      title: "Google AI Essentials Specialization",
      issuer: "Google",
      date: "Jul 2025",
      id: "3WLB08KYLQNH",
      status: "COMPLETED",
      link: "https://www.linkedin.com/in/thenul-de-mel-01154a203/",
      icon: Cpu,
    },
    {
      title: "Rapid Prototyping Using 3D Printing Specialization",
      issuer: "Arizona State University",
      date: "Apr 2025",
      id: "19ZYQ1DTQAY4",
      status: "COMPLETED",
      link: "https://www.linkedin.com/in/thenul-de-mel-01154a203/",
      icon: Blocks,
    },
    {
      title: "Introduction to Artificial Intelligence (AI)",
      issuer: "IBM",
      date: "Apr 2025",
      id: "96S94GE7UADO",
      status: "COMPLETED",
      link: "https://www.linkedin.com/in/thenul-de-mel-01154a203/",
      icon: Award,
    },
    {
      title: "Python Data Structures",
      issuer: "University of Michigan",
      date: "Apr 2025",
      id: "RH8IDW3RB1QM",
      status: "COMPLETED",
      link: "https://www.linkedin.com/in/thenul-de-mel-01154a203/",
      icon: FileCheck,
    }
  ];

  return (
    <section id="certificates" className="py-20 relative border-t border-slate-800 bg-[#0b0f17]/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center gap-4 font-['Space_Grotesk']">
            <span className="w-8 h-[2px] bg-slate-200 block" />
            Certificates &amp; Licenses
          </h2>
          <p className="mt-3 text-sm font-mono text-slate-400">
            Verified professional credentials and technical specializations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {credentials.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#161B26] border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-550/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider uppercase bg-cyan-500/5 text-cyan-400 border border-cyan-500/25 px-2 py-0.5 rounded">
                      {cert.status}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-100 mb-2 leading-snug group-hover:text-cyan-455 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="space-y-1 mt-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Issuer</span>
                      <span className="text-slate-200 font-medium">{cert.issuer}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Date</span>
                      <span className="text-slate-200 font-medium">{cert.date}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Credential ID</span>
                      <span className="text-cyan-400/90 font-mono font-medium">{cert.id}</span>
                    </div>
                  </div>
                </div>
                
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full py-2 rounded-lg bg-[#1a1d26] border border-slate-800 hover:border-cyan-500/25 text-xs font-mono font-semibold tracking-wide text-slate-100 hover:text-cyan-300 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Show Credential</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
