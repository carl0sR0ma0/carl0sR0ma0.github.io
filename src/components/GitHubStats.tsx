'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface GitHubData {
  public_repos: number
  followers: number
  following: number
}

export default function GitHubStats() {
  const [data, setData] = useState<GitHubData | null>(null)

  useEffect(() => {
    fetch('https://api.github.com/users/carl0sR0ma0')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => {})
  }, [])

  if (!data) return null

  const stats = [
    { label: 'Repositórios', value: data.public_repos, icon: 'M4 4v16h16V4H4zm2 2h12v12H6V6z' },
    { label: 'Seguidores', value: data.followers, icon: 'M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' },
    { label: 'Seguindo', value: data.following, icon: 'M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM20 8v6M23 11h-6' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-6 rounded-xl border border-white/5 bg-bg-card p-4"
    >
      <div className="mb-3 flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-text-secondary">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21.5c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
        </svg>
        <span className="text-xs font-medium text-text-secondary">GitHub</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-lg font-bold text-text-primary">{stat.value}</div>
            <div className="text-[10px] text-text-secondary">{stat.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
