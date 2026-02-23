'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
}

export default function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const particles: Particle[] = []

    function getConfig() {
      const w = canvas?.offsetWidth ?? 0
      if (w < 480) return { count: 35, maxDist: 100 }
      if (w < 768) return { count: 50, maxDist: 130 }
      return { count: 80, maxDist: 160 }
    }

    function resize() {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    function init() {
      if (!canvas) return
      particles.length = 0
      const { count } = getConfig()
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        })
      }
    }

    function draw() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const { maxDist } = getConfig()

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      }

      // Lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.18
            ctx.strokeStyle = `rgba(0, 255, 136, ${alpha})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Dots
      for (const p of particles) {
        ctx.fillStyle = 'rgba(139, 92, 246, 0.3)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2)
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    init()
    draw()

    const handleResize = () => {
      resize()
      init()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  )
}
