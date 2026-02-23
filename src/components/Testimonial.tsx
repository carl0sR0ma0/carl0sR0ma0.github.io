'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/data/portfolio-data'
import AnimatedSection from './AnimatedSection'

export default function Testimonial() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    if (testimonials.length <= 1) return
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [next])

  const t = testimonials[current]

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection>
          <div className="relative rounded-2xl border border-white/5 bg-bg-card p-8 md:p-12">
            {/* Quote mark */}
            <div className="absolute -top-4 left-8 text-6xl font-bold text-accent-green/20">
              &ldquo;
            </div>

            <div className="relative z-10" style={{ minHeight: '120px' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <blockquote className="mb-6 text-lg italic leading-relaxed text-text-secondary md:text-xl">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent-green to-accent-purple text-lg font-bold text-bg-primary">
                      {t.author
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">
                        {t.author}
                      </p>
                      <p className="text-sm text-text-secondary">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            {testimonials.length > 1 && (
              <div className="mt-6 flex justify-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-5 bg-accent-green'
                        : 'w-1.5 bg-white/15 hover:bg-white/30'
                    }`}
                    style={{ cursor: 'pointer' }}
                    aria-label={`Depoimento ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
