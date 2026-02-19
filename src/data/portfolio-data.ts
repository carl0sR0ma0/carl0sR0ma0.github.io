export const personalInfo = {
  name: 'Carlos Romão',
  initials: 'CR',
  headline: 'Desenvolvedor Full Stack | Backend .NET',
  typewriterTexts: [
    'Construo sistemas robustos para o agronegócio',
    '4+ anos transformando ideias em código',
    'Clean Architecture, DDD & SOLID',
  ],
  email: 'cvpromao@gmail.com',
  linkedin: 'https://www.linkedin.com/in/carlos-romao-dev/',
  github: 'https://github.com/carl0sR0ma0',
  location: 'Brasil',
}

export const aboutText = `Desenvolvedor Full Stack com mais de 4 anos de experiência, atualmente atuando como Pleno na Pentagro — empresa referência no agronegócio. Minha especialidade é Backend com .NET, desenvolvendo Web APIs robustas e escaláveis com C#, Entity Framework Core, PostgreSQL e SQL Server.

Ao longo da carreira, trabalhei com diversas tecnologias no Front-end (Vue.js, Angular, React) e Mobile (React Native, Xamarin), sempre buscando entregar soluções completas e de qualidade. Sou apaixonado por Clean Architecture, DDD e boas práticas de desenvolvimento.

Com 47 repositórios no GitHub e 25+ certificações, mantenho um compromisso constante com aprendizado e evolução técnica.`

export const highlights = [
  { value: '4+', label: 'Anos de experiência' },
  { value: '47', label: 'Repositórios GitHub' },
  { value: '25+', label: 'Certificações' },
  { value: 'Pleno', label: 'Na Pentagro' },
]

export interface Experience {
  company: string
  role: string
  period: string
  description: string[]
  techs?: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Pentagro',
    role: 'Desenvolvedor Full Stack Pleno',
    period: 'Jun 2025 — Atual',
    description: [
      'Liderança técnica em projetos internos de gestão agrícola',
      'Implementação do Observer Pattern para notificações em tempo real',
      'Desenvolvimento do módulo de relatórios e dashboards',
      'Participação ativa no PCP (Planejamento e Controle da Produção)',
    ],
    techs: ['C#', '.NET', 'PostgreSQL', 'Vue.js'],
  },
  {
    company: 'Pentagro',
    role: 'Desenvolvedor Full Stack Junior',
    period: 'Ago 2022 — Jun 2025',
    description: [
      'Desenvolvimento de Web APIs RESTful com .NET Core',
      'Testes unitários com xUnit e integração contínua',
      'Modelagem de dados com Entity Framework Core',
      'Bancos de dados PostgreSQL e SQL Server',
    ],
    techs: ['C#', '.NET', 'EF Core', 'xUnit', 'SQL Server'],
  },
  {
    company: 'Pentagro',
    role: 'Estagiário Full Stack',
    period: 'Ago 2021 — Ago 2022',
    description: [
      'Pesquisa e desenvolvimento de novas funcionalidades',
      'Desenvolvimento Full Stack com Vue.js e .NET',
      'Primeiro contato com ambiente corporativo de TI',
    ],
    techs: ['Vue.js', '.NET', 'SQL Server'],
  },
  {
    company: 'GPES — Fatec',
    role: 'Pesquisador / Desenvolvedor',
    period: 'Jul 2020 — Dez 2021',
    description: [
      'Grupo de Pesquisa em Engenharia de Software',
      'Desenvolvimento com Node.js, Angular e MongoDB',
      'Containerização com Docker para ambientes de desenvolvimento',
    ],
    techs: ['Node.js', 'Angular', 'MongoDB', 'Docker'],
  },
  {
    company: 'Foxis Sistemas',
    role: 'Desenvolvedor Frontend (Estágio)',
    period: 'Fev 2020 — Mar 2020',
    description: [
      'Desenvolvimento de interfaces com Pascal/Lazarus',
      'Manutenção de sistemas legados',
    ],
    techs: ['Pascal', 'Lazarus'],
  },
]

export interface Project {
  title: string
  description: string
  techs: string[]
  github: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Comandera',
    description:
      'Sistema completo de gestão de pedidos para food service com app mobile e backend robusto.',
    techs: ['React Native', 'Expo', '.NET 9', 'PostgreSQL', 'Zustand'],
    github: 'https://github.com/carl0sR0ma0/Comandera',
    featured: true,
  },
  {
    title: 'SchoolManagement',
    description: 'Sistema de gerenciamento escolar completo com CRUD de alunos, professores e turmas.',
    techs: ['C#', '.NET'],
    github: 'https://github.com/carl0sR0ma0/SchoolManagement',
  },
  {
    title: 'NovaEra',
    description: 'Sistema de gestão acadêmica desenvolvido em equipe de 6 pessoas.',
    techs: ['PHP', 'MySQL'],
    github: 'https://github.com/carl0sR0ma0/NovaEra',
  },
  {
    title: 'FC Tube',
    description: 'Plataforma de streaming desenvolvida durante Imersão Full Cycle.',
    techs: ['Django', 'Go', 'RabbitMQ', 'Next.js'],
    github: 'https://github.com/carl0sR0ma0/FCTube',
  },
  {
    title: 'SistemaOdonto',
    description: 'Sistema para clínica odontológica com gestão de pacientes e consultas.',
    techs: ['C#', 'Entity Framework'],
    github: 'https://github.com/carl0sR0ma0/SistemaOdonto',
  },
  {
    title: 'OccurenceTrigger',
    description: 'Implementação do Design Pattern Observer aplicado a ocorrências (PGDI).',
    techs: ['C#', '.NET'],
    github: 'https://github.com/carl0sR0ma0/OccurenceTrigger',
  },
]

export interface SkillCategory {
  category: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend',
    skills: ['C#', '.NET Core', 'API REST', 'Minimal APIs', 'EF Core', 'xUnit'],
  },
  {
    category: 'Arquitetura',
    skills: ['DDD', 'MVC', 'SOLID', 'Clean Architecture', 'Observer Pattern'],
  },
  {
    category: 'Frontend',
    skills: ['Vue.js', 'Angular', 'React', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
  },
  {
    category: 'Mobile',
    skills: ['React Native', 'Expo', 'Xamarin'],
  },
  {
    category: 'Banco de Dados',
    skills: ['PostgreSQL', 'SQL Server', 'MySQL', 'Oracle', 'MongoDB'],
  },
  {
    category: 'DevOps',
    skills: ['Docker', 'GitHub Actions', 'Git', 'Swagger'],
  },
  {
    category: 'Outros',
    skills: ['Scrum', 'UML', 'TypeScript', 'Node.js'],
  },
]

export interface CertificationGroup {
  platform: string
  certs: string[]
}

export const certifications: CertificationGroup[] = [
  {
    platform: 'Alura',
    certs: [
      'PostgreSQL: Views, Sub-Consultas e Funções',
      'PostgreSQL: Comandos DML e DDL',
      'PostgreSQL: Primeiros Passos',
      'SQL Server: Manipulação de Dados',
      'SQL Server: Introdução',
    ],
  },
  {
    platform: 'Udemy',
    certs: [
      'Modelagem de Domínio com DDD e .NET',
      'C# Completo e Profissional',
      'Programação Orientada a Objetos em C#',
      'Vue.js + ASP.NET Core Web API',
      'Entity Framework Core',
      'UML — Fundamentos',
    ],
  },
  {
    platform: 'Rocketseat',
    certs: ['NLW Expert — C#'],
  },
  {
    platform: 'DIO',
    certs: [
      '.NET Developer',
      'Desenvolvimento Web com HTML, CSS e JavaScript',
      'Git e GitHub',
      'Responsividade com Bootstrap',
      'Fundamentos de Programação',
      'Linux Fundamentals',
    ],
  },
  {
    platform: 'Cod3r',
    certs: ['Angular 9 — Essencial'],
  },
  {
    platform: 'Hackathons',
    certs: ['HackaTrouble 2020 — Participação', 'HackaTrouble 2020 — Menção Honrosa'],
  },
]

export const testimonial = {
  quote:
    'Romão é um colega de equipe confiável que sempre cumpre suas responsabilidades com excelência. Sua atitude proativa e capacidade de enfrentar desafios com um sorriso são verdadeiramente inspiradoras.',
  author: 'Messias Oliveira',
  role: 'Colega de equipe na Pentagro',
}

export const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#skills', label: 'Skills' },
  { href: '#certificacoes', label: 'Certificações' },
  { href: '#contato', label: 'Contato' },
]
