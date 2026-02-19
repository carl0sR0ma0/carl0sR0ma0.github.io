'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { certifications } from '@/data/portfolio-data'
import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'

export default function Certifications() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="certificacoes" className="bg-bg-secondary px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          title="Certificações"
          subtitle="25+ certificações em diversas plataformas"
        />

        <div className="space-y-3">
          {certifications.map((group, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="overflow-hidden rounded-xl border border-white/5 bg-bg-card">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-white/[0.02]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-purple/10 text-sm font-bold text-accent-purple">
                      {group.certs.length}
                    </span>
                    <span className="font-semibold text-text-primary">
                      {group.platform}
                    </span>
                  </div>
                  <motion.svg
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-text-secondary"
                  >
                    <path
                      d="M5 7.5l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/5 px-5 py-4">
                        <ul className="space-y-2">
                          {group.certs.map((cert, j) => (
                            <li
                              key={j}
                              className="flex items-center gap-2 text-sm text-text-secondary"
                            >
                              <span className="text-accent-green">✓</span>
                              {cert}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
