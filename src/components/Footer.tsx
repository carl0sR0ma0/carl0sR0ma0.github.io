import { personalInfo } from '@/data/portfolio-data'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-text-secondary">
          &copy; 2026 {personalInfo.name}. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary transition-colors hover:text-accent-green"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary transition-colors hover:text-accent-green"
          >
            LinkedIn
          </a>
          <span className="text-xs text-text-secondary/50">
            Next.js + Tailwind
          </span>
        </div>
      </div>
    </footer>
  )
}
