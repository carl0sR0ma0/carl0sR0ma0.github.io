'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects, type Project } from '@/data/portfolio-data'
import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projetos" className="bg-bg-secondary px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Projetos"
          subtitle="Alguns dos meus trabalhos recentes"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1}>
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
                      d="M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 12h8M12 8v8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
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
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
