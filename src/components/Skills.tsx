'use client'

import { motion } from 'framer-motion'
import { skillCategories } from '@/data/portfolio-data'
import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Skills"
          subtitle="Tecnologias e ferramentas que utilizo"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillCategories.map((cat, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="rounded-xl border border-white/5 bg-bg-card p-6 transition-all hover:border-accent-purple/20 hover:glow-purple">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-purple">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1 }}
                      className="cursor-default rounded-lg border border-white/10 bg-bg-primary px-3 py-1.5 font-mono text-xs text-text-primary transition-colors hover:border-accent-green/30 hover:text-accent-green"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
