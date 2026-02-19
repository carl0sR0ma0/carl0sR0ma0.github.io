'use client'

import { testimonial } from '@/data/portfolio-data'
import AnimatedSection from './AnimatedSection'

export default function Testimonial() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection>
          <div className="relative rounded-2xl border border-white/5 bg-bg-card p-8 md:p-12">
            {/* Quote mark */}
            <div className="absolute -top-4 left-8 text-6xl font-bold text-accent-green/20">
              &ldquo;
            </div>

            <blockquote className="relative z-10 mb-6 text-lg italic leading-relaxed text-text-secondary md:text-xl">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent-green to-accent-purple text-lg font-bold text-bg-primary">
                {testimonial.author
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <div>
                <p className="font-semibold text-text-primary">
                  {testimonial.author}
                </p>
                <p className="text-sm text-text-secondary">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
