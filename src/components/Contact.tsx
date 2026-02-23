'use client'

import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '@/data/portfolio-data'
import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

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
              action="https://formspree.io/f/xykdpojb"
              method="POST"
              onSubmit={handleSubmit}
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
                  disabled={status === 'sending'}
                  className="w-full rounded-lg border border-white/10 bg-bg-card px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent-green/50 placeholder:text-text-secondary/40 disabled:opacity-50"
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
                  disabled={status === 'sending'}
                  className="w-full rounded-lg border border-white/10 bg-bg-card px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent-green/50 placeholder:text-text-secondary/40 disabled:opacity-50"
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
                  disabled={status === 'sending'}
                  className="w-full resize-none rounded-lg border border-white/10 bg-bg-card px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent-green/50 placeholder:text-text-secondary/40 disabled:opacity-50"
                  placeholder="Sua mensagem..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent-green to-accent-purple px-6 py-3 font-semibold text-bg-primary transition-shadow hover:shadow-lg hover:shadow-accent-green/20 disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                      <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </motion.button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2 rounded-lg border border-accent-green/20 bg-accent-green/5 px-4 py-3 text-sm text-accent-green"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Mensagem enviada com sucesso!
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Erro ao enviar. Tente novamente.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
