'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'

const steps = [
  {
    number: '01',
    title: 'Análise',
    description: 'Entendimento do problema, levantamento de requisitos e definição de escopo com o time.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    color: 'accent-green',
  },
  {
    number: '02',
    title: 'Arquitetura',
    description: 'Design da solução com Clean Architecture, definição de entidades, endpoints e contratos.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
    color: 'accent-purple',
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description: 'Código limpo, versionado com Git, seguindo SOLID, DDD e boas práticas de mercado.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
    color: 'accent-green',
  },
  {
    number: '04',
    title: 'Entrega & CI/CD',
    description: 'Deploy automatizado com GitHub Actions, Docker e monitoramento contínuo em produção.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
    color: 'accent-purple',
  },
]

export default function Workflow() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Como Eu Trabalho"
          subtitle="Meu processo de desenvolvimento"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative rounded-xl border border-white/5 bg-bg-card p-6 transition-all hover:border-white/10"
              >
                {/* Number */}
                <span className={`text-4xl font-extrabold text-${step.color}/10`}>
                  {step.number}
                </span>

                {/* Icon */}
                <div className={`my-4 flex h-12 w-12 items-center justify-center rounded-lg bg-${step.color}/10 text-${step.color} transition-transform group-hover:scale-110`}>
                  {step.icon}
                </div>

                <h3 className="mb-2 text-base font-bold text-text-primary">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line (não no último) */}
                {i < steps.length - 1 && (
                  <div className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-full bg-gradient-to-r from-white/10 to-transparent lg:block" />
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
