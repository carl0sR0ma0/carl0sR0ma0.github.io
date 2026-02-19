export const personalInfo = {
  name: 'Carlos Romão',
  initials: 'CR',
  headline: 'Desenvolvedor Full Stack | Backend .NET',
  typewriterTexts: [
    'Construo sistemas robustos para o seu negócio',
    '4+ anos transformando ideias em código',
    'Clean Architecture, DDD & SOLID',
  ],
  email: 'cvpromao@gmail.com',
  linkedin: 'https://www.linkedin.com/in/carlos-rom%C3%A3o-22ba15bb/',
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
  id: string
  title: string
  description: string
  longDescription: string
  techs: string[]
  github: string
  featured?: boolean
  features: string[]
  screenshots: string[]
}

export const projects: Project[] = [
  {
    id: 'comandera',
    title: 'Comandera',
    description:
      'Sistema de gestão de pedidos para pequenos comércios de alimentação — espetarias, lanchonetes, pizzarias e similares.',
    longDescription:
      'Sistema completo de gestão de pedidos com app mobile e backend robusto. Permite gerenciar mesas, criar pedidos, controlar cardápio com categorias e produtos, aplicar promoções automáticas, gerar relatórios de vendas e muito mais. Design pensado para agilidade no atendimento.',
    techs: ['React Native', 'Expo', '.NET 9', 'PostgreSQL', 'Zustand', 'JWT'],
    github: 'https://github.com/carl0sR0ma0/Comandera',
    featured: true,
    features: [
      'Gestão de mesas com status em tempo real',
      'Cardápio com categorias e produtos',
      'Promoções automáticas com combos multi-categoria',
      'Relatórios de vendas e dashboard',
      'Autenticação JWT com controle de acesso',
      'Deploy automático com CI/CD (GitHub Actions)',
    ],
    screenshots: [
      '/projects/comandera/tela-1.png',
      '/projects/comandera/tela-2.png',
      '/projects/comandera/tela-3.png',
    ],
  },
  {
    id: 'fluxtrack',
    title: 'FluxTrack',
    description:
      'Plataforma de rastreamento logístico industrial que orquestra o fluxo de itens entre setores com monitoramento em tempo real.',
    longDescription:
      'Sistema de rastreamento logístico que monitora cada etapa do processo produtivo em tempo real, reduzindo retrabalho operacional e expondo KPIs confiáveis. Integra pedidos, leituras e integrações (Bling v3) em um único lugar, com sistema de permissões granular e processamento de leituras em lote.',
    techs: ['.NET 8', 'PostgreSQL', 'Next.js', 'React Native', 'Expo', 'Docker'],
    github: 'https://github.com/carl0sR0ma0/FluxTrack',
    features: [
      'Rastreamento de itens entre setores em tempo real',
      'Sistema de permissões granular com perfis customizados',
      'Integração com Bling v3 (catálogo, pedidos, NF-e)',
      'Processamento de leituras em lote com idempotência',
      'Timeline de pedidos por setor e item',
      '39 endpoints cobrindo Auth, Usuários, Setores, Pedidos e Integrações',
    ],
    screenshots: [
      '/projects/fluxtrack/tela-1.png',
      '/projects/fluxtrack/tela-2.png',
      '/projects/fluxtrack/tela-3.png',
    ],
  },
  {
    id: 'evalync',
    title: 'Evalync',
    description:
      'Sistema de avaliação e sincronização de dados com foco em produtividade e gestão de equipes.',
    longDescription:
      'Plataforma de avaliação e sincronização projetada para otimizar a gestão de desempenho e produtividade. Oferece ferramentas para criar e gerenciar avaliações, acompanhar indicadores e sincronizar dados entre equipes de forma eficiente.',
    techs: ['C#', '.NET 8', 'PostgreSQL', 'TypeScript'],
    github: 'https://github.com/carl0sR0ma0/EVALYNC',
    features: [
      'Criação e gestão de avaliações',
      'Acompanhamento de indicadores de desempenho',
      'Sincronização de dados entre equipes',
      'Relatórios e dashboards analíticos',
    ],
    screenshots: [
      '/projects/evalync/tela-1.png',
      '/projects/evalync/tela-2.png',
    ],
  },
  {
    id: 'controle-demandas',
    title: 'Controle de Demandas',
    description:
      'Sistema de gestão de demandas com fluxo unificado de cadastro, triagem e acompanhamento com segurança reforçada.',
    longDescription:
      'Aplicação full-stack para gestão interna de demandas com workflow completo — do cadastro à conclusão. Conta com autenticação JWT, criptografia de senhas com Argon2id + RSA, bloqueio temporário após tentativas falhas, e observabilidade completa com Prometheus, Grafana e Loki para métricas e logs.',
    techs: ['.NET 8', 'Next.js', 'PostgreSQL', 'Docker', 'Prometheus', 'Grafana'],
    github: 'https://github.com/carl0sR0ma0/ControleDemandas',
    features: [
      'Fluxo unificado: cadastro → triagem → acompanhamento',
      'Segurança reforçada: Argon2id + RSA + bloqueio por tentativas',
      'Observabilidade: Prometheus + Grafana + Loki',
      'Health checks e respostas padronizadas (problem+json)',
      'Validação com FluentValidation',
      'Endpoint público de consulta por protocolo',
    ],
    screenshots: [
      '/projects/controle-demandas/tela-1.png',
      '/projects/controle-demandas/tela-2.png',
      '/projects/controle-demandas/tela-3.png',
    ],
  },
  {
    id: 'odontosoft',
    title: 'OdontoSoft',
    description:
      'Sistema de gestão para clínicas odontológicas com odontograma interativo e controle de pacientes.',
    longDescription:
      'Sistema completo para gestão de clínicas odontológicas. Inclui cadastro de pacientes, avaliações com odontograma interativo (mapa dental visual), planejamento de tratamentos, agendamento e dashboard administrativo. Arquitetura limpa com camadas bem definidas.',
    techs: ['.NET 8', 'MongoDB', 'React', 'TypeScript', 'Tailwind', 'Vite'],
    github: 'https://github.com/carl0sR0ma0/OdontoSoft',
    features: [
      'Odontograma interativo (mapa dental visual)',
      'Gestão de pacientes e prontuários',
      'Planejamento e acompanhamento de tratamentos',
      'Dashboard administrativo',
      'Autenticação e controle de acesso',
      'Clean Architecture com camadas separadas',
    ],
    screenshots: [
      '/projects/odontosoft/tela-1.png',
      '/projects/odontosoft/tela-2.png',
    ],
  },
  {
    id: 'school-management',
    title: 'SchoolManagement',
    description: 'Sistema de gerenciamento escolar completo com CRUD de alunos, professores e turmas.',
    longDescription:
      'Aplicação web para gerenciamento escolar que permite o cadastro e controle de alunos, professores e turmas. Interface administrativa para acompanhamento acadêmico com operações CRUD completas e relatórios.',
    techs: ['C#', '.NET', 'Entity Framework'],
    github: 'https://github.com/carl0sR0ma0/SchoolManagement',
    features: [
      'CRUD completo de alunos, professores e turmas',
      'Controle de matrículas e notas',
      'Relatórios acadêmicos',
      'Interface administrativa',
    ],
    screenshots: [
      '/projects/school-management/tela-1.png',
    ],
  },
  {
    id: 'occurence-trigger',
    title: 'OccurenceTrigger',
    description: 'Implementação do Design Pattern Observer aplicado ao módulo de gatilhos do PGDI.',
    longDescription:
      'Projeto que aplica o padrão de projeto Observer para o módulo de gatilhos de ocorrências. Demonstra a implementação prática de design patterns em C#/.NET, com foco em desacoplamento e reatividade a eventos do sistema.',
    techs: ['C#', '.NET', 'Observer Pattern'],
    github: 'https://github.com/carl0sR0ma0/OccurenceTrigger',
    features: [
      'Implementação do padrão Observer',
      'Sistema de gatilhos reativo a eventos',
      'Desacoplamento entre publicadores e assinantes',
      'Aplicação prática de Design Patterns',
    ],
    screenshots: [
      '/projects/occurence-trigger/tela-1.png',
    ],
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
    platform: 'Hackathon',
    certs: ['HackaTrouble 2020'],
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
