export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  badges: string[];
}

export interface Certification {
  name: string;
  issuer?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  bio: string;
  stats: { label: string; value: string; description: string }[];
  skills: {
    category: string;
    items: string[];
  }[];
  experiences: Experience[];
  certifications: Certification[];
  education: { degree: string; institution: string; period: string }[];
}

export const profileData: ProfileData = {
  name: "Guilherme Santiago Floriano",
  title: "Desenvolvedor de Software Sênior | Tech Lead",
  location: "Guarulhos, São Paulo, Brasil",
  email: "guilhermesantiago12@gmail.com",
  github: "https://github.com/Gui1949",
  linkedin: "https://linkedin.com/in/guilherme-floriano-092023210",
  bio: "Desenvolvedor Sênior e Tech Lead com mais de 8 anos de experiência sólida em arquitetura e integração de sistemas de missão crítica, mensageria de alta performance e engenharia de software full stack com ecossistema JavaScript/TypeScript.",
  stats: [
    { label: "Experiência", value: "8+ Anos", description: "Arquitetura e liderança técnica" },
    { label: "Otimização Contábil", value: "15d ➔ 1d", description: "Integração PDV & Sankhya via RabbitMQ" },
    { label: "Automação Comercial", value: "100%", description: "Eliminação de digitação manual de pedidos" },
    { label: "Acessos Diários", value: "+3.000", description: "Portal do Cliente em produção" }
  ],
  skills: [
    {
      category: "Linguagens & Ecossistema",
      items: ["TypeScript", "Node.js", "React", "Next.js", "Express", "NestJS", "Java 8", "Python", "SQL"]
    },
    {
      category: "Integrações & Mensageria",
      items: ["RabbitMQ", "APIs RESTful", "WebSockets", "SSO Azure AD", "Integrações ERP/CRM (Sankhya/Bitrix)", "FIDCs"]
    },
    {
      category: "Banco de Dados & Storage",
      items: ["SQL Server (MSSQL)", "T-SQL", "Stored Procedures", "Triggers", "Oracle Database"]
    },
    {
      category: "DevOps & Observabilidade",
      items: ["Datadog", "PM2 (pm2.io)", "Jenkins CI/CD", "Docker", "Git / GitHub Actions", "Heroku / Netlify"]
    },
    {
      category: "Mobile & Frontend",
      items: ["React Native (iOS & Android)", "Tailwind CSS", "Redux", "Clean Architecture", "SOLID"]
    }
  ],
  experiences: [
    {
      company: "Medsystems Comércio Importação e Exportação Ltda",
      role: "Analista de Sistemas (Desenvolvedor Sênior / Tech Lead)",
      period: "Janeiro de 2022 – Presente",
      badges: ["Node.js", "TypeScript", "React", "Next.js", "RabbitMQ", "Datadog", "Jenkins", "Sankhya ERP", "Bitrix24"],
      description: [
        "Arquitetura e integração de plataformas corporativas conectando fluxos de negócio em tempo real.",
        "Implementação de observabilidade avançada com Datadog e PM2, garantindo alta disponibilidade e resposta rápida a incidentes.",
        "Arquitetura de mensageria com RabbitMQ entre PDV e ERP Sankhya, reduzindo o fechamento contábil de 15 dias para 1 dia.",
        "Implantação de Jenkins CI/CD do zero, blindando e automatizando deploy das aplicações.",
        "Integração corporativa de autenticação via Single Sign-On (SSO) com Microsoft Azure.",
        "Desenvolvimento e publicação de aplicativos móveis em React Native integrados nativamente ao Sankhya e Bitrix.",
        "Liderança de time de engenharia (6 desenvolvedores) em projeto Next.js/NestJS/MSSQL sob metodologias ágeis."
      ]
    },
    {
      company: "Farmarin Indústria e Comércio Ltda",
      role: "Analista de TI Jr. / Assistente / Estagiário",
      period: "Setembro de 2018 – Dezembro de 2021",
      badges: ["React", "Node.js", "Python", "SQL Server", "VMware ESXi", "Jaspersoft", "ANVISA RDC 301"],
      description: [
        "Desenvolvimento de aplicações fullstack com ReactJS, Node.js e Express, com deploy em nuvem.",
        "Criação de procedures SQL, triggers e dashboards personalizados nativos no ERP Sankhya.",
        "Desenvolvimento e validação de sistemas computadorizados em conformidade com a norma RDC 301 da ANVISA.",
        "Desenvolvimento de robôs de automação em Python e Kivy e gestão de virtualização VMware ESXi."
      ]
    }
  ],
  certifications: [
    { name: "Node.JS Specialist" },
    { name: "React Professional" },
    { name: "Advanced Python Techniques" },
    { name: "C#: Formação Básica" },
    { name: "CTO Summit" }
  ],
  education: [
    {
      degree: "Pós-graduação em Engenharia de Software",
      institution: "Pontifícia Universidade Católica de Minas Gerais (PUC-MG)",
      period: "2022 - 2023"
    },
    {
      degree: "Graduação em Redes de Computadores",
      institution: "Faculdade Eniac",
      period: "2018 - 2020"
    },
    {
      degree: "Técnico em Informática",
      institution: "ETEC Escola Técnica Estadual de São Paulo",
      period: "2015 - 2017"
    }
  ]
};
