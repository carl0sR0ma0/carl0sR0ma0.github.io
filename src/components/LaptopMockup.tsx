'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface LaptopMockupProps {
  screenshots: string[]
  alt: string
}

export default function LaptopMockup({ screenshots, alt }: LaptopMockupProps) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % screenshots.length)
  }, [screenshots.length])

  useEffect(() => {
    if (screenshots.length <= 1) return
    const interval = setInterval(next, 3500)
    return () => clearInterval(interval)
  }, [screenshots.length, next])

  const hasImages = screenshots.length > 0

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Laptop frame */}
      <div className="flex flex-col items-center">
        {/* Screen */}
        <div
          className="relative overflow-hidden rounded-t-lg border-[3px] border-b-0 border-white/20 bg-[#1a1a1a]"
          style={{ width: '300px', height: '190px' }}
        >
          {/* Camera dot */}
          <div className="absolute left-1/2 top-[5px] z-10 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-white/10" />

          {/* Screen area */}
          <div className="relative h-full w-full overflow-hidden bg-black">
            {hasImages ? (
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
                    alt={`${alt} - Web ${current + 1}`}
                    width={300}
                    height={190}
                    className="h-full w-full object-contain p-3"
                  />
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="mb-1.5 text-text-secondary/25">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-[10px] text-text-secondary/35">Screenshots em breve</p>
              </div>
            )}
          </div>
        </div>

        {/* Hinge */}
        <div className="h-[3px] w-[310px] rounded-b-sm bg-white/15" />

        {/* Base */}
        <div className="h-[10px] w-[340px] rounded-b-lg bg-gradient-to-b from-white/10 to-white/5" />
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
                  ? 'w-4 bg-accent-purple'
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
              style={{ cursor: 'pointer' }}
              aria-label={`Web ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
