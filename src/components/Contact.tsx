'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio-data'
import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'

export default function Contact() {
  return (
    <section id="contato" className="bg-bg-secondary px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          title="Contato"
          subtitle="Vamos trabalhar juntos?"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {/* Links */}
          <AnimatedSection>
            <div className="space-y-4">
              <p className="mb-6 text-text-secondary leading-relaxed">
                Estou sempre aberto a novas oportunidades e desafios.
                Entre em contato por qualquer um dos canais abaixo.
              </p>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 rounded-xl border border-white/5 bg-bg-card p-4 transition-colors hover:border-accent-green/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-green/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-accent-green">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-secondary">Email</p>
                  <p className="font-medium text-text-primary">{personalInfo.email}</p>
                </div>
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 rounded-xl border border-white/5 bg-bg-card p-4 transition-colors hover:border-accent-purple/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-purple/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-accent-purple">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-secondary">LinkedIn</p>
                  <p className="font-medium text-text-primary">Carlos Romão</p>
                </div>
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 rounded-xl border border-white/5 bg-bg-card p-4 transition-colors hover:border-accent-green/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-green/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-accent-green">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21.5c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-secondary">GitHub</p>
                  <p className="font-medium text-text-primary">carl0sR0ma0</p>
                </div>
              </motion.a>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.2}>
            <form
              action={`mailto:${personalInfo.email}`}
              method="POST"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="mb-1 block text-sm text-text-secondary">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-bg-card px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent-green/50 placeholder:text-text-secondary/40"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm text-text-secondary">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-bg-card px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent-green/50 placeholder:text-text-secondary/40"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm text-text-secondary">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-bg-card px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent-green/50 placeholder:text-text-secondary/40"
                  placeholder="Sua mensagem..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-lg bg-gradient-to-r from-accent-green to-accent-purple px-6 py-3 font-semibold text-bg-primary transition-shadow hover:shadow-lg hover:shadow-accent-green/20"
              >
                Enviar Mensagem
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
