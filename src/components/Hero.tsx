'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { personalInfo } from '@/data/portfolio-data'
import CodeRain from './CodeRain'

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
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const orbY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Code rain background */}
      <CodeRain />

      {/* Gradient orbs — parallax */}
      <motion.div style={{ y: orbY }} className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent-green/5 blur-3xl" />
      <motion.div style={{ y: orbY }} className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent-purple/5 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:items-center md:text-left">
        {/* Text — largura fixa para não empurrar a foto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="min-w-0 md:w-[55%] md:flex-none"
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
          {/* Altura fixa para o typewriter não mexer no layout */}
          <div className="mb-8 h-12 font-mono text-base text-text-secondary md:text-lg">
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

        {/* Photo — efeito "saindo do oval" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex-shrink-0 h-80 w-80 sm:h-[22rem] sm:w-[22rem] md:h-[28rem] md:w-[28rem] lg:h-[520px] lg:w-[520px]"
        >
          {/* Backlight — glow atrás da foto para destacar */}
          <div
            className="absolute left-1/2 top-[20%] -translate-x-1/2 z-0 h-[60%] w-[70%] rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(0,255,136,0.12) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)',
              filter: 'blur(25px)',
            }}
          />

          {/* Glow difuso embaixo — conecta foto ao oval */}
          <div className="absolute bottom-[-2%] left-1/2 -translate-x-1/2 z-0 h-[35%] w-[75%] rounded-[50%] bg-accent-green/10 blur-2xl" />

          {/* Oval de fundo (portal) */}
          <div
            className="absolute bottom-[-6%] left-1/2 -translate-x-1/2 z-[1] w-[90%] h-[45%] rounded-[50%] bg-gradient-to-b from-[#0f2b1e] via-[#112233] to-[#18102a]"
            style={{
              boxShadow: '0 0 100px rgba(0,255,136,0.15), 0 0 60px rgba(139,92,246,0.10), inset 0 -10px 30px rgba(0,0,0,0.4)',
            }}
          />

          {/* Borda brilhante do oval */}
          <div
            className="absolute bottom-[-6%] left-1/2 -translate-x-1/2 z-[2] w-[90%] h-[45%] rounded-[50%]"
            style={{
              background: 'conic-gradient(from 200deg, #00ff8888, #8b5cf666, #00ff8833, #8b5cf666, #00ff8888)',
              mask: 'radial-gradient(ellipse, transparent 84%, black 87%, black 93%, transparent 96%)',
              WebkitMask: 'radial-gradient(ellipse, transparent 84%, black 87%, black 93%, transparent 96%)',
            }}
          />

          {/* Foto — mask com fade suave na base para fundir com o oval */}
          <div
            className="absolute left-0 right-0 bottom-[2%] z-[5] h-full w-full"
            style={{
              mask: 'linear-gradient(to bottom, transparent 2%, black 12%, black 65%, transparent 88%), radial-gradient(ellipse 82% 90% at 50% 42%, black 50%, transparent 85%)',
              WebkitMask: 'linear-gradient(to bottom, transparent 2%, black 12%, black 65%, transparent 88%), radial-gradient(ellipse 82% 90% at 50% 42%, black 50%, transparent 85%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'destination-in',
            }}
          >
            <Image
              src="/carlos.png"
              alt={personalInfo.name}
              width={420}
              height={420}
              className="h-full w-full object-contain"
              style={{ objectPosition: 'center bottom' }}
              priority
            />
          </div>

          {/* Sparkle ✦ superior direito */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="absolute right-[5%] top-[8%] z-20 text-xl text-accent-green"
          >
            ✦
          </motion.div>

          {/* Sparkle ✦ esquerdo */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
            className="absolute left-[2%] top-[25%] z-20 text-sm text-accent-purple"
          >
            ✦
          </motion.div>

          {/* Sparkle ✦ direita meio */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 1 }}
            className="absolute right-[0%] top-[40%] z-20 text-xs text-accent-green/80"
          >
            ✦
          </motion.div>

          {/* Dot flutuante */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="absolute left-[6%] top-[45%] z-20 h-2 w-2 rounded-full bg-accent-purple/60"
          />

          {/* Dot flutuante 2 */}
          <motion.div
            animate={{ y: [4, -4, 4] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            className="absolute right-[8%] top-[20%] z-20 h-1.5 w-1.5 rounded-full bg-accent-green/50"
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
