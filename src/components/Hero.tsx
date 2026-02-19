'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { personalInfo } from '@/data/portfolio-data'

function Typewriter({ texts }: { texts: string[] }) {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    const speed = isDeleting ? 30 : 60

    if (!isDeleting && charIndex === currentText.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setTextIndex((prev) => (prev + 1) % texts.length)
      return
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1))
    }, speed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts])

  return (
    <span className="typewriter-cursor">
      {texts[textIndex].slice(0, charIndex)}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="hero-grid relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent-green/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent-purple/5 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:text-left">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 font-mono text-sm text-accent-green"
          >
            Olá, eu sou
          </motion.p>
          <h1 className="mb-4 text-5xl font-extrabold leading-tight md:text-7xl">
            {personalInfo.name.split(' ')[0]}{' '}
            <span className="gradient-text">
              {personalInfo.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>
          <p className="mb-4 text-xl font-medium text-text-secondary md:text-2xl">
            {personalInfo.headline}
          </p>
          <div className="mb-8 h-8 font-mono text-base text-text-secondary md:text-lg">
            <Typewriter texts={personalInfo.typewriterTexts} />
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#projetos"
              className="rounded-lg bg-gradient-to-r from-accent-green to-accent-purple px-8 py-3 font-semibold text-bg-primary transition-transform hover:scale-105"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="gradient-border rounded-lg px-8 py-3 font-semibold text-text-primary transition-transform hover:scale-105"
            >
              Entrar em Contato
            </a>
          </div>
        </motion.div>

        {/* Photo — PNG recortado, sem moldura */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative flex-shrink-0"
        >
          <Image
            src="/carlos.png"
            alt={personalInfo.name}
            width={420}
            height={420}
            className="relative z-10 h-72 w-72 object-contain sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[420px] lg:w-[420px]"
            priority
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-secondary">Scroll</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-text-secondary"
          >
            <path
              d="M10 4v12m0 0l-4-4m4 4l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
