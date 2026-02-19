import AnimatedSection from './AnimatedSection'

interface SectionTitleProps {
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <AnimatedSection className="mb-12 text-center">
      <h2 className="text-3xl font-bold md:text-4xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary">{subtitle}</p>
      )}
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-accent-green to-accent-purple" />
    </AnimatedSection>
  )
}
