'use client'

import { useEffect, useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import type { Project } from '@/data/portfolio-data'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeScreenshot, setActiveScreenshot] = useState(0)
  const [hasScreenshots, setHasScreenshots] = useState<boolean[]>([])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      setActiveScreenshot(0)

      const checks = project.screenshots.map(() => false)
      setHasScreenshots(checks)

      project.screenshots.forEach((src, i) => {
        const img = new window.Image()
        img.onload = () => {
          setHasScreenshots((prev) => {
            const next = [...prev]
            next[i] = true
            return next
          })
        }
        img.onerror = () => {
          setHasScreenshots((prev) => {
            const next = [...prev]
            next[i] = false
            return next
          })
        }
        img.src = src
      })
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, handleKeyDown])

  const availableScreenshots = project?.screenshots.filter((_, i) => hasScreenshots[i]) ?? []

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6 md:p-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-bg-primary"
          >
            {/* Header gradient */}
            <div className="h-0.5 w-full bg-gradient-to-r from-accent-green to-accent-purple" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-text-secondary transition-colors hover:bg-white/10 hover:text-text-primary"
              aria-label="Fechar"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto overscroll-contain p-5 sm:p-6" style={{ maxHeight: 'calc(85vh - 2px)' }}>
              {/* Title + badges */}
              <div className="mb-4 pr-8">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-text-primary sm:text-2xl">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="rounded-full bg-accent-green/10 px-2.5 py-0.5 text-[10px] font-medium text-accent-green">
                      Destaque
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Screenshots */}
              {availableScreenshots.length > 0 && (
                <div className="mb-4">
                  <div className="overflow-hidden rounded-lg border border-white/5 bg-bg-card">
                    <div className="relative aspect-video">
                      <Image
                        src={availableScreenshots[activeScreenshot] || availableScreenshots[0]}
                        alt={`${project.title} - Tela ${activeScreenshot + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  {availableScreenshots.length > 1 && (
                    <div className="mt-2 flex justify-center gap-1.5">
                      {availableScreenshots.map((src, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveScreenshot(i)}
                          className={`h-12 w-18 overflow-hidden rounded border-2 transition-all ${
                            activeScreenshot === i
                              ? 'border-accent-green'
                              : 'border-white/10 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <Image
                            src={src}
                            alt={`Miniatura ${i + 1}`}
                            width={72}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Placeholder when no screenshots */}
              {availableScreenshots.length === 0 && (
                <div className="mb-4 flex aspect-video items-center justify-center rounded-lg border border-dashed border-white/10 bg-bg-card">
                  <div className="text-center">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="mx-auto mb-1 text-text-secondary/30">
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-xs text-text-secondary/40">Screenshots em breve</p>
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="mb-4">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent-purple">
                  Funcionalidades
                </h4>
                <ul className="grid gap-1.5 sm:grid-cols-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-text-secondary">
                      <span className="mt-px text-accent-green">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="mb-5">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent-purple">
                  Tecnologias
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-white/10 bg-bg-card px-2.5 py-1 font-mono text-[10px] text-text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-green to-accent-purple px-5 py-2 text-xs font-semibold text-bg-primary transition-transform hover:scale-105"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21.5c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                  </svg>
                  Ver no GitHub
                </a>
                <button
                  onClick={onClose}
                  className="rounded-lg border border-white/10 px-5 py-2 text-xs font-medium text-text-secondary transition-colors hover:border-white/20 hover:text-text-primary"
                >
                  Fechar
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
