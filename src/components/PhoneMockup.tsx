'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface PhoneMockupProps {
  screenshots: string[]
  alt: string
}

export default function PhoneMockup({ screenshots, alt }: PhoneMockupProps) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % screenshots.length)
  }, [screenshots.length])

  useEffect(() => {
    if (screenshots.length <= 1) return
    const interval = setInterval(next, 3500)
    return () => clearInterval(interval)
  }, [screenshots.length, next])

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Phone frame */}
      <div
        className="relative mx-auto flex flex-col items-center overflow-hidden rounded-[2.5rem] border-[3px] border-white/20 bg-[#1a1a1a] shadow-[0_0_40px_rgba(0,0,0,0.5)]"
        style={{ width: '210px', height: '430px' }}
      >
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-2.5 z-10 h-[16px] w-[60px] -translate-x-1/2 rounded-full bg-black" />

        {/* Screen area */}
        <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={screenshots[current]}
                alt={`${alt} - ${current + 1}`}
                width={210}
                height={430}
                className="h-full w-full object-contain p-4"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-2 left-1/2 z-10 h-[4px] w-[50px] -translate-x-1/2 rounded-full bg-white/20" />
      </div>

      {/* Dots indicator */}
      {screenshots.length > 1 && (
        <div className="flex items-center gap-1.5">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-4 bg-accent-green'
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
              style={{ cursor: 'pointer' }}
              aria-label={`Imagem ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
