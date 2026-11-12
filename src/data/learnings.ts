export interface RealWorldProject {
  id: string;
  name: string;
  businessDomain: "Varejo & Redes de Lojas" | "Restaurantes & Food Service" | "Fintech & Integrações" | "Logística & Supply Chain";
  segmentIcon: string;
  businessProblem: string;
  solutionArchitecture: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  projectPath: string;
  status: "production-ready" | "in-development";
}

export interface FeaturedGithubRepo {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  whyHighlighted: string;
}

export const realWorldProjects: RealWorldProject[] = [
  {
    id: "retail-order-sync",
    name: "Retail Order Sync Engine (Sincronização de PDVs para Lojas)",
    businessDomain: "Varejo & Redes de Lojas",
    segmentIcon: "🏬",
    businessProblem: "Em redes de lojas físicas com alto fluxo de caixa, instabilidades de internet ou lentidão no ERP central travavam o atendimento no balcão ou geravam furos contábeis e de estoque.",
    solutionArchitecture: "Arquitetura com Transactional Outbox Pattern que grava localmente no PDV em <30ms com garantia fiscal e sincroniza assincronamente com o RabbitMQ corporativo via worker com retentativas exponenciais e Dead Letter Queue (DLQ).",
    highlights: [
      "Zero perda de vendas em caixas de lojas físicas durante instabilidades de rede",
      "Confirmação de vendas no balcão em milissegundos sem dependência síncrona do ERP",
      "Publisher Confirms e idempotência garantida na fila central do RabbitMQ",
      "Dead Letter Queue (DLQ) com alertas integrados para observabilidade no Datadog"
    ],
    technologies: ["Node.js", "TypeScript", "RabbitMQ", "Clean Architecture", "MSSQL"],
    githubUrl: "https://github.com/Gui1949/retail-order-sync",
    projectPath: "projects/retail-order-sync",
    status: "production-ready"
  },
  {
    id: "restaurant-kitchen-hub",
    name: "GourmetFlow KDS (Gestão de Comandas & Cozinha para Restaurantes)",
    businessDomain: "Restaurantes & Food Service",
    segmentIcon: "🍽️",
    businessProblem: "Restaurantes de grande movimento e pizzarias sofrem com comandas de papel perdidas, atrasos entre pratos quentes e bebidas do bar, e falta de visibilidade de tempo de espera (SLA).",
    solutionArchitecture: "Sistema em tempo real com barramento orientado a eventos e WebSocket que decompõe a comanda por estações especializadas (Parrilla/Grill, Forno de Pizza, Bar, Expedição), sincronizando os itens para saírem juntos na mesa.",
    highlights: [
      "Roteamento automático de itens da comanda por estação (Parrilla, Forno de Pizza, Bar e Copa)",
      "Sincronização de tempo: expedição só avisa garçom/motoboy quando todos os itens da mesa estão prontos",
      "Monitoramento de SLA de preparo por mesa e por canal (Salão vs Delivery)",
      "Máquina de estados de pedido com eventos WebSocket para telas de cozinha (KDS)"
    ],
    technologies: ["Node.js", "TypeScript", "Event-Driven", "WebSockets", "State Machine"],
    githubUrl: "https://github.com/Gui1949/restaurant-kitchen-hub",
    projectPath: "projects/restaurant-kitchen-hub",
    status: "production-ready"
  }
];

export const featuredGithubRepos: FeaturedGithubRepo[] = [
  {
    name: "terraChat",
    category: "IA Geoespacial & Chatbot",
    description: "Chatbot interativo baseado em mapas que consome a API do Google Maps em tempo real para responder dúvidas e fornecer dados contextuais de localização.",
    technologies: ["TypeScript", "Google Maps API", "AI / Chatbot", "Full Stack"],
    githubUrl: "https://github.com/Gui1949/terraChat",
    whyHighlighted: "Excelente para demonstrar domínio moderno de TypeScript integrado a APIs geoespaciais e inteligência de dados contextuais."
  },
  {
    name: "br-utils",
    category: "Engenharia de Backend & Utilities",
    description: "Biblioteca utilitária em Java com clientes HTTP leves (inspirado em Axios) e métodos utilitários de manipulação de Strings null-safe para ambientes corporativos.",
    technologies: ["Java 8+", "HTTP Client", "Null-Safe Architecture", "Clean Code"],
    githubUrl: "https://github.com/Gui1949/br-utils",
    whyHighlighted: "Demonstra rigor em design de bibliotecas reutilizáveis e domínio profundo do runtime Java corporativo."
  },
  {
    name: "FloripaScript",
    category: "Compiladores & Linguagens",
    description: "Linguagem de programação autoral projetada para combinar a flexibilidade de linguagens interpretadas com a eficiência e controle de baixo nível de C/C++.",
    technologies: ["C", "C++", "Compiladores", "Gerenciamento de Memória"],
    githubUrl: "https://github.com/Gui1949/FloripaScript",
    whyHighlighted: "Um diferencial técnico de altíssimo nível para um Tech Lead: prova que você entende o funcionamento interno de compiladores e execução de baixo nível."
  },
  {
    name: "sankhya-ireport-web",
    category: "Integração ERP Corporativo",
    description: "Integração web do ERP Sankhya com JasperReports / iReport para geração, visualização e exportação de relatórios analíticos e operacionais.",
    technologies: ["ERP Sankhya", "iReport", "Web Integration", "SQL"],
    githubUrl: "https://github.com/Gui1949/https-github.com-VictorSalome-sankhya-ireport-web",
    whyHighlighted: "Conecta-se diretamente à sua experiência corporativa comprovada como Tech Lead e analista de sistemas sênior."
  },
  {
    name: "ugOS",
    category: "DevOps & Sistemas Operacionais",
    description: "Distribuição Linux customizada e minimalista baseada no Ubuntu Minimal, desenhada para máxima eficiência de recursos e execução de serviços.",
    technologies: ["Linux Kernel", "Ubuntu Minimal", "Bash Scripting", "SysAdmin"],
    githubUrl: "https://github.com/Gui1949/ugOS",
    whyHighlighted: "Evidencia sólidas raízes em infraestrutura, redes e sistemas operacionais, essenciais para liderar equipes de DevOps e observabilidade."
  }
];
