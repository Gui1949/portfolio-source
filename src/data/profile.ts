export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  badges: string[];
}

export interface Certification {
  name: string;
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
  title: "Tech Lead & Desenvolvedor de Software Sênior",
  location: "Guarulhos, São Paulo, Brasil",
  email: "guilhermesantiago12@gmail.com",
  github: "https://github.com/Gui1949",
  linkedin: "https://linkedin.com/in/guilherme-floriano-092023210",
  bio: "Desenvolvedor de Software Sênior e Tech Lead com mais de 8 anos de experiência em arquitetura de integrações, mensageria de alta performance e engenharia full stack no ecossistema Node.js, TypeScript e React. Histórico consolidado em automação de fluxos críticos entre ERPs, CRMs e plataformas de pagamento.",
  stats: [
    { label: "Experiência de Mercado", value: "8+ anos", description: "Liderança técnica e arquitetura de software" },
    { label: "Fechamento Contábil", value: "15d → 1d", description: "Otimização de rotinas via RabbitMQ e Sankhya" },
    { label: "Automação Comercial", value: "100%", description: "Eliminação da entrada manual de pedidos" },
    { label: "Volume de Usuários", value: "3.000+/dia", description: "Acessos diários suportados no Portal do Cliente" }
  ],
  skills: [
    {
      category: "Linguagens & Runtimes",
      items: ["TypeScript", "Node.js", "Java 8", "Python", "SQL (T-SQL, PL/SQL)", "C / C++"]
    },
    {
      category: "Frontend & Mobile",
      items: ["React", "Next.js", "React Native", "Tailwind CSS", "Redux", "Clean Architecture"]
    },
    {
      category: "Integrações & Mensageria",
      items: ["RabbitMQ", "APIs RESTful", "WebSockets", "SSO Azure AD / Entra ID", "Sankhya ERP", "Bitrix24"]
    },
    {
      category: "Bancos de Dados",
      items: ["SQL Server (MSSQL)", "Oracle Database", "Modelagem Relacional", "Stored Procedures", "Triggers"]
    },
    {
      category: "DevOps & Observabilidade",
      items: ["Datadog", "PM2", "Jenkins CI/CD", "Git", "GitHub Actions", "Docker", "Linux"]
    }
  ],
  experiences: [
    {
      company: "Medsystems Comércio Importação e Exportação Ltda",
      role: "Analista de Sistemas (Desenvolvedor Sênior / Tech Lead)",
      period: "Jan 2022 – Presente",
      badges: ["Node.js", "TypeScript", "React", "RabbitMQ", "Datadog", "Jenkins", "Sankhya", "Bitrix24"],
      description: [
        "Arquitetura e desenvolvimento de barramentos de integração entre ERP Sankhya, CRM Bitrix24 e terminais de venda.",
        "Implementação de mensageria com RabbitMQ entre PDVs e retaguarda contábil, reduzindo o tempo de fechamento mensal de 15 dias para 1 dia.",
        "Estruturação de observabilidade com Datadog e PM2 para monitoramento de latência e detecção precoce de anomalias em serviços web.",
        "Implantação de pipelines de CI/CD via Jenkins, estabelecendo validações automáticas de build e deploys seguros.",
        "Integração corporativa de autenticação com Microsoft Azure SSO para unificação de acessos corporativos.",
        "Desenvolvimento e distribuição de aplicativos móveis em React Native para operações internas e de campo.",
        "Liderança técnica de equipe de desenvolvimento (6 engenheiros) em sistemas corporativos com Next.js, NestJS e SQL Server."
      ]
    },
    {
      company: "Farmarin Indústria e Comércio Ltda",
      role: "Analista de TI Jr. / Assistente / Estagiário",
      period: "Set 2018 – Dez 2021",
      badges: ["React", "Node.js", "Python", "SQL Server", "VMware ESXi", "RDC 301 ANVISA"],
      description: [
        "Desenvolvimento de aplicações web internas com React e Node.js para suporte a operações reguladas.",
        "Criação de procedures SQL, triggers de consistência e relatórios analíticos no ERP Sankhya via iReport.",
        "Validação de sistemas computadorizados em conformidade com as normas RDC 301 da ANVISA para a indústria farmacêutica.",
        "Desenvolvimento de rotinas de automação em Python e administração de infraestrutura virtualizada com VMware ESXi."
      ]
    }
  ],
  certifications: [
    { name: "Node.js Specialist" },
    { name: "React Professional" },
    { name: "Advanced Python Techniques" },
    { name: "C# Formação Básica" },
    { name: "CTO Summit" }
  ],
  education: [
    {
      degree: "Pós-graduação em Engenharia de Software",
      institution: "Pontifícia Universidade Católica de Minas Gerais (PUC-MG)",
      period: "2022 – 2023"
    },
    {
      degree: "Graduação em Redes de Computadores",
      institution: "Faculdade Eniac",
      period: "2018 – 2020"
    },
    {
      degree: "Técnico em Informática",
      institution: "ETEC Escola Técnica Estadual de São Paulo",
      period: "2015 – 2017"
    }
  ]
};
