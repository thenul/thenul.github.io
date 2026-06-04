import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, type SkillLevel } from '../data/skills';

const levelColors: Record<SkillLevel, { bar: string; text: string; bg: string }> = {
  Beginner:     { bar: 'from-slate-500 to-slate-400',    text: 'text-slate-400',  bg: 'bg-slate-500/10' },
  Intermediate: { bar: 'from-blue-500 to-cyan-400',      text: 'text-cyan-400',   bg: 'bg-cyan-500/10'  },
  Advanced:     { bar: 'from-cyan-400 to-teal-300',      text: 'text-teal-300',   bg: 'bg-teal-400/10'  },
  Expert:       { bar: 'from-cyan-300 to-white',         text: 'text-white',      bg: 'bg-cyan-300/15'  },
};

export function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  };

  return (
    <section id="skills" className="py-24 bg-card/30 border-y border-white/5">
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
            Skills
          </h2>
          <p className="mt-3 text-sm font-mono text-muted-foreground/50">
            Click any skill to see proficiency
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill) => {
            const colors = levelColors[skill.level];
            const isActive = activeSkill === skill.name;

            return (
              <motion.div
                key={skill.name}
                variants={item}
                layout
                onClick={() => setActiveSkill(isActive ? null : skill.name)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                data-testid={`skill-${skill.name.toLowerCase().replace(/ /g, '-')}`}
                className={`relative cursor-pointer rounded-lg border transition-all duration-300 overflow-hidden select-none
                  ${isActive
                    ? `border-cyan-500/50 ${colors.bg} shadow-[0_0_20px_-4px_rgba(0,210,255,0.35)]`
                    : 'border-white/10 bg-secondary hover:border-cyan-500/30 hover:shadow-[0_0_15px_-6px_rgba(0,210,255,0.25)]'
                  }`}
              >
                {/* Chip label */}
                <div className="px-5 py-2.5 font-mono text-sm text-secondary-foreground whitespace-nowrap flex items-center gap-2">
                  <span>{skill.name}</span>
                  <span className={`text-xs font-semibold ${colors.text} opacity-70`}>
                    {skill.level}
                  </span>
                </div>

                {/* Proficiency bar — slides in below when active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-3"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-xs font-mono font-bold ${colors.text}`}>
                          {skill.level}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground/60">
                          {skill.percent}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.percent}%` }}
                          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
                          className={`h-full rounded-full bg-gradient-to-r ${colors.bar} shadow-[0_0_8px_0px_rgba(0,210,255,0.6)]`}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          {(Object.entries(levelColors) as [SkillLevel, typeof levelColors[SkillLevel]][]).map(([level, c]) => (
            <div key={level} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${c.bar}`} />
              <span className="text-xs font-mono text-muted-foreground/50">{level}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
