'use client'

import { aboutText, highlights } from '@/data/portfolio-data'
import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <section id="sobre" className="bg-bg-secondary px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Sobre Mim" />

        <div className="grid gap-12 md:grid-cols-2">
          <AnimatedSection>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              {aboutText.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/5 bg-bg-card p-6 text-center transition-all hover:border-accent-green/20 hover:glow-green"
                >
                  <div className="mb-2 text-3xl font-bold gradient-text">
                    {item.value}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
