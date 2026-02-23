'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, type Project } from '@/data/portfolio-data'
import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'
import ProjectModal from './ProjectModal'

const filterTags = ['Todos', '.NET', 'React Native', 'Next.js', 'React', 'PostgreSQL', 'Docker'] as const

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeFilter, setActiveFilter] = useState('Todos')

  const filtered = useMemo(() => {
    if (activeFilter === 'Todos') return projects
    return projects.filter((p) =>
      p.techs.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()))
    )
  }, [activeFilter])

  return (
    <section id="projetos" className="bg-bg-secondary px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Projetos"
          subtitle="Alguns dos meus trabalhos recentes"
        />

        {/* Filtros */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                activeFilter === tag
                  ? 'bg-accent-green/15 text-accent-green border border-accent-green/30'
                  : 'border border-white/10 text-text-secondary hover:border-white/20 hover:text-text-primary'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <AnimatedSection>
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ scale: 1.03, y: -4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="group block h-full w-full cursor-pointer rounded-xl border border-white/5 bg-bg-card p-6 text-left transition-all hover:border-accent-green/30 hover:glow-green"
                  >
                    {/* Header */}
                    <div className="mb-4 flex items-center justify-between">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-accent-green"
                      >
                        <path
                          d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-xs text-text-secondary transition-colors group-hover:text-accent-green">
                        Ver detalhes →
                      </span>
                    </div>

                    <h3 className="mb-2 text-lg font-bold text-text-primary group-hover:text-accent-green">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm text-text-secondary leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.techs.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-bg-primary px-2.5 py-0.5 font-mono text-xs text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techs.length > 4 && (
                        <span className="rounded-full border border-white/10 bg-bg-primary px-2.5 py-0.5 font-mono text-xs text-text-secondary">
                          +{project.techs.length - 4}
                        </span>
                      )}
                    </div>

                    {project.featured && (
                      <div className="mt-4 inline-block rounded-full bg-accent-green/10 px-3 py-1 text-xs font-medium text-accent-green">
                        Destaque
                      </div>
                    )}
                  </motion.button>
                </AnimatedSection>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
