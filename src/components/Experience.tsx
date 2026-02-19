'use client'

import { experiences } from '@/data/portfolio-data'
import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'

export default function Experience() {
  return (
    <section id="experiencia" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          title="Experiência"
          subtitle="Minha trajetória profissional"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-accent-green via-accent-purple to-transparent md:left-1/2 md:-translate-x-1/2" />

          {experiences.map((exp, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.1}
              className={`relative mb-12 pl-12 md:w-1/2 md:pl-0 ${
                i % 2 === 0
                  ? 'md:pr-12 md:text-right'
                  : 'md:ml-auto md:pl-12'
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-accent-green bg-bg-primary md:top-1 ${
                  i % 2 === 0
                    ? 'md:left-auto md:-right-1.5'
                    : 'md:left-[-6px]'
                }`}
              />

              <div className="rounded-xl border border-white/5 bg-bg-card p-6 transition-all hover:border-accent-green/20">
                <span className="mb-1 inline-block rounded-full bg-accent-green/10 px-3 py-1 font-mono text-xs text-accent-green">
                  {exp.period}
                </span>
                <h3 className="mt-2 text-lg font-bold text-text-primary">
                  {exp.role}
                </h3>
                <p className="mb-3 text-sm font-medium text-accent-purple">
                  {exp.company}
                </p>
                <ul
                  className={`space-y-1 text-sm text-text-secondary ${
                    i % 2 === 0 ? 'md:text-right' : ''
                  }`}
                >
                  {exp.description.map((desc, j) => (
                    <li key={j}>• {desc}</li>
                  ))}
                </ul>
                {exp.techs && (
                  <div
                    className={`mt-3 flex flex-wrap gap-2 ${
                      i % 2 === 0 ? 'md:justify-end' : ''
                    }`}
                  >
                    {exp.techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-xs text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
