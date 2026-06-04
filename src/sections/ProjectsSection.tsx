import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Code2, Camera, ChevronRight } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
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
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative flex flex-col lg:flex-row gap-8 rounded-xl overflow-hidden p-[1px]"
              style={{
                background: 'linear-gradient(135deg, rgba(0,210,255,0.15) 0%, rgba(30,30,60,0.1) 50%, rgba(80,120,255,0.15) 100%)',
              }}
              data-testid={`project-card-${project.id}`}
            >
              <div className="w-full flex flex-col lg:flex-row gap-8 bg-[#080c14] rounded-xl p-6 lg:p-8">
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                  <div className="flex-1 rounded-lg border border-dashed border-cyan-500/20 bg-gradient-to-br from-blue-950/30 to-slate-900/30 flex flex-col items-center justify-center p-8 text-muted-foreground group-hover:border-cyan-400/40 transition-colors min-h-[180px]">
                    <Camera className="w-8 h-8 mb-3 text-cyan-500/40" />
                    <span className="font-mono text-xs tracking-widest text-cyan-500/50">[ Circuit Preview ]</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2 mb-2">
                      <ChevronRight className="w-4 h-4 text-cyan-500" />
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col">
                  <div className="rounded-lg border border-white/5 bg-[#0a0e1a] overflow-hidden flex-1 shadow-xl shadow-black/50">
                    <div className="h-9 bg-[#0d1220] border-b border-white/5 flex items-center px-4 gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40 border border-red-500/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40 border border-yellow-500/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/40 border border-green-500/60" />
                      </div>
                      <div className="ml-3 flex items-center gap-1.5 text-xs font-mono text-cyan-500/60">
                        <Code2 className="w-3 h-3" />
                        {project.filename}
                      </div>
                    </div>
                    <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed whitespace-pre">
                      {project.code.split('\n').map((line, i) => (
                        <div key={i} className="flex gap-4">
                          <span className="text-cyan-900 select-none w-5 text-right flex-shrink-0">{i + 1}</span>
                          <span className="text-slate-300">{line}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
