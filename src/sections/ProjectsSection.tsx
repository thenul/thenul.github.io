import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Code2, Camera, ChevronRight, FileDown, Copy, Check, ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  const [activeTabs, setActiveTabs] = useState<Record<string, 'code' | 'schematic'>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const getActiveTab = (projectId: string) => {
    return activeTabs[projectId] || 'code';
  };

  const handleTabChange = (projectId: string, tab: 'code' | 'schematic') => {
    setActiveTabs(prev => ({ ...prev, [projectId]: tab }));
  };

  const handleCopyCode = async (projectId: string, code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(projectId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

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
          {projects.map((project, index) => {
            const currentTab = getActiveTab(project.id);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative flex flex-col rounded-xl overflow-hidden border border-zinc-800 bg-[#161922] hover:border-cyan-500/25 transition-all duration-300"
                data-testid={`project-card-${project.id}`}
              >
                <div className="p-6 lg:p-8 flex flex-col lg:flex-row gap-8">
                  {/* Left Column - Project Info */}
                  <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    {/* Project Image Box */}
                    {project.image ? (
                      <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-zinc-800 bg-slate-950 flex items-center justify-center">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover opacity-60 group-hover:scale-[1.01] transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14]/90 to-transparent flex items-end p-4">
                          <span className="text-[10px] sm:text-xs font-mono tracking-wider uppercase bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-2.5 py-1 rounded">
                            {project.imageBadge}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-lg border border-dashed border-cyan-500/20 bg-slate-950/40 flex flex-col items-center justify-center p-8 text-muted-foreground group-hover:border-cyan-400/40 transition-colors min-h-[180px]">
                        <Camera className="w-8 h-8 mb-3 text-cyan-500/40" />
                        <span className="font-mono text-xs tracking-widest text-cyan-500/50">[ Circuit Preview ]</span>
                      </div>
                    )}

                    {/* Title, Subtitle, Tags, Description */}
                    <div>
                      <h3 className="text-xl font-bold text-[#E2E8F0] group-hover:text-cyan-300 transition-colors flex items-center gap-2 mb-1">
                        <ChevronRight className="w-4 h-4 text-cyan-500" />
                        {project.title}
                      </h3>
                      
                      {project.subtitle && (
                        <p className="text-xs text-muted-foreground font-mono mb-3 px-6 text-cyan-400/80">
                          {project.subtitle}
                        </p>
                      )}
                      
                      {/* Tags list */}
                      <div className="flex flex-wrap gap-2 mb-4 px-6">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 rounded bg-cyan-550/5 border border-cyan-500/10 text-cyan-400 font-mono text-[10px] tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <div className="text-[#94A3B8] leading-relaxed text-sm space-y-4 font-light whitespace-pre-line px-6">
                        {project.description}
                      </div>

                      {/* External Links */}
                      {project.links && project.links.length > 0 && (
                        <div className="flex flex-wrap gap-3 mt-5 px-6">
                          {project.links.map(link => (
                            <a
                              key={link.name}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3.5 py-1.5 rounded bg-[#1a1d26] border border-zinc-800 hover:border-cyan-500/30 text-[#E2E8F0] hover:text-cyan-300 font-mono text-[11px] font-medium tracking-wide transition-all flex items-center gap-1.5 cursor-pointer"
                            >
                              <ExternalLink className="w-3.5 h-3.5 text-cyan-500" />
                              <span>{link.name}</span>
                            </a>
                          ))}
                        </div>
                      )}

                      {/* Tasks breakdown */}
                      {project.tasks && (
                        <div className="mt-6 space-y-3 px-6">
                          <h4 className="text-xs font-mono tracking-wider text-cyan-500/70 uppercase">
                            System Architecture // Task Breakdowns
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {project.tasks.map((task, idx) => (
                              <div key={idx} className="p-3.5 rounded-lg bg-[#111318]/90 border border-zinc-800 flex flex-col gap-1.5">
                                <span className="text-[11px] font-mono font-semibold text-cyan-400 leading-none">
                                  {task.title}
                                </span>
                                <span className="text-xs text-[#94A3B8] leading-normal font-light">
                                  {task.desc}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column - Tabs Display */}
                  <div className="w-full lg:w-1/2 flex flex-col">
                    <div className="rounded-lg border border-zinc-800 bg-[#111318] overflow-hidden flex-grow flex flex-col shadow-xl min-h-[350px]">
                      {/* Tab bar header */}
                      <div className="h-11 bg-[#161922] border-b border-zinc-800 flex items-center justify-between px-4">
                        <div className="flex gap-4">
                          {project.schematicUrl ? (
                            <>
                              <button
                                onClick={() => handleTabChange(project.id, 'code')}
                                className={`text-xs font-mono font-medium py-3 border-b-2 transition-all cursor-pointer ${
                                  currentTab === 'code'
                                    ? 'text-cyan-400 border-cyan-400'
                                    : 'text-muted-foreground/60 border-transparent hover:text-cyan-400/80'
                                }`}
                              >
                                Source Code
                              </button>
                              <button
                                onClick={() => handleTabChange(project.id, 'schematic')}
                                className={`text-xs font-mono font-medium py-3 border-b-2 transition-all cursor-pointer ${
                                  currentTab === 'schematic'
                                    ? 'text-cyan-400 border-cyan-400'
                                    : 'text-muted-foreground/60 border-transparent hover:text-cyan-400/80'
                                }`}
                              >
                                Hardware Schematic
                              </button>
                            </>
                          ) : (
                            <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-500/60 py-3">
                              <Code2 className="w-3.5 h-3.5" />
                              {project.filename}
                            </div>
                          )}
                        </div>

                        {/* Top bar right buttons */}
                        {currentTab === 'code' && (
                          <button
                            onClick={() => handleCopyCode(project.id, project.code)}
                            className="text-muted-foreground/60 hover:text-cyan-400 flex items-center gap-1 text-[11px] font-mono focus:outline-none transition-colors cursor-pointer"
                          >
                            {copiedId === project.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy Code</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      {/* Tab content panel */}
                      <div className="p-4 flex-grow bg-[#161922]/20 flex flex-col justify-start">
                        {currentTab === 'code' ? (
                          <div className="font-mono text-xs leading-relaxed whitespace-pre text-slate-300 w-full max-h-[350px] overflow-y-auto pr-2">
                            {project.code.split('\n').map((line, i) => (
                              <div key={i} className="flex gap-4">
                                <span className="text-zinc-600 select-none w-5 text-right flex-shrink-0">{i + 1}</span>
                                <span>{line}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          // Hardware Schematic download panel
                          <div className="flex flex-col items-center justify-center p-8 text-center h-full min-h-[300px]">
                            <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-transform duration-300">
                              <FileDown className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">Vector Schematic Layout</h4>
                            <p className="text-muted-foreground text-xs max-w-sm mb-6 leading-relaxed font-light">
                              This vector asset is optimized for high-resolution print distribution and schematic engineering layouts.
                            </p>
                            <a
                              href={project.schematicUrl}
                              download
                              className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                            >
                              <FileDown className="w-4 h-4" />
                              <span>Download Schematic (PDF)</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
