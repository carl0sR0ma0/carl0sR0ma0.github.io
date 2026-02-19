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
            <a
              href="/carlos-romao-resume.pdf"
              download
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-accent-green/30 px-5 py-2.5 text-sm font-medium text-accent-green transition-all hover:bg-accent-green/10 hover:scale-105"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Baixar Currículo
            </a>
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
