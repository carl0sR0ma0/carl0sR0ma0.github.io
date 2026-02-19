import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carlos Romão — Desenvolvedor Full Stack',
  description:
    'Portfólio de Carlos Romão. Desenvolvedor Full Stack Pleno especializado em Backend .NET, C#, PostgreSQL, Vue.js, React Native. 4+ anos de experiência na Pentagro.',
  keywords: [
    'Carlos Romão',
    'Desenvolvedor Full Stack',
    'Backend .NET',
    'C#',
    'PostgreSQL',
    'React Native',
    'Vue.js',
  ],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Carlos Romão — Desenvolvedor Full Stack',
    description:
      'Portfólio profissional. Backend .NET | 4+ anos | Clean Architecture, DDD & SOLID.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
