export interface RealWorldProject {
  id: string;
  name: string;
  businessDomain: string;
  businessProblem: string;
  solutionArchitecture: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  status: string;
}

export interface FeaturedGithubRepo {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  context: string;
}

export const realWorldProjects: RealWorldProject[] = [
  {
    id: "retail-order-sync",
    name: "Retail Order Sync Engine",
    businessDomain: "Varejo & PDV",
    businessProblem: "Em redes de lojas físicas com alto fluxo de caixa, instabilidades de rede local ou do ERP central provocavam o Dual-Write Problem, causando filas no balcão ou furos no fechamento contábil e de estoque.",
    solutionArchitecture: "Padrão Transactional Outbox com persistência atômica local em menos de 30ms e relay assíncrono para RabbitMQ com confirmações de publicação, retentativas exponenciais e Dead Letter Queue (DLQ).",
    highlights: [
      "Gravação atômica da venda e do evento de outbox na mesma transação ACID",
      "Desacoplamento total entre emissão do cupom no balcão e latência de rede do ERP",
      "Publisher confirms com garantia de entrega at-least-once no broker",
      "Roteamento de mensagens com falha persistente para Dead Letter Queue"
    ],
    technologies: ["TypeScript", "Node.js", "RabbitMQ", "Clean Architecture", "MSSQL"],
    githubUrl: "https://github.com/Gui1949/retail-order-sync",
    status: "Produção"
  },
  {
    id: "restaurant-kitchen-hub",
    name: "GourmetFlow KDS",
    businessDomain: "Restaurantes & Food Service",
    businessProblem: "Cozinhas de alta rotatividade e delivery sofrem com descompasso de tempo de preparo entre estações (ex: bebidas saindo muito antes dos pratos) e perda de visibilidade de SLA de atendimento.",
    solutionArchitecture: "Kitchen Display System orientado a eventos que decompõe a comanda por estações independentes (Grelha, Forno, Bar, Copa) e sincroniza a expedição para liberação simultânea na mesa.",
    highlights: [
      "Roteamento automático de itens da comanda por estação de preparo",
      "Sincronização de expedição: aciona o garçom apenas com a mesa 100% pronta",
      "Rastreamento de latência e tempo de preparo por estação e canal",
      "Máquina de estados estrita com emissão de eventos em tempo real"
    ],
    technologies: ["TypeScript", "Node.js", "Event-Driven", "WebSockets", "State Machine"],
    githubUrl: "https://github.com/Gui1949/restaurant-kitchen-hub",
    status: "Produção"
  },
  {
    id: "fintech-payment-gateway",
    name: "AegisPay & Reconciliation Hub",
    businessDomain: "Fintech & Pagamentos",
    businessProblem: "Inconsistências entre autorização de vendas e liquidação financeira de adquirentes provocam perdas por divergência de taxas de MDR e risco de cobranças duplicadas em retentativas de webhooks.",
    solutionArchitecture: "Gateway transacional com aritmética estrita em inteiros (centavos), verificação criptográfica HMAC SHA-256 de webhooks e motor automático de conciliação financeira contra extratos de liquidação.",
    highlights: [
      "Auditoria contábil automatizada comparando MDR contratual vs extrato de liquidação",
      "Idempotência estrita via Idempotency-Key para proteção contra replay de webhooks",
      "Assinatura criptográfica HMAC SHA-256 para validação de integridade",
      "Suporte a Pix D+0 e Cartão parcelado com suíte de 15 testes automatizados"
    ],
    technologies: ["TypeScript", "Node.js", "HMAC SHA-256", "Clean Architecture", "Fintech Domain"],
    githubUrl: "https://github.com/Gui1949/fintech-payment-gateway",
    status: "Produção"
  }
];

export const featuredGithubRepos: FeaturedGithubRepo[] = [
  {
    name: "terraChat",
    category: "IA & Geoespacial",
    description: "Assistente conversacional baseado em mapas que consome a API do Google Maps em tempo real para responder consultas contextuais de localização.",
    technologies: ["TypeScript", "Google Maps API", "Chatbot"],
    githubUrl: "https://github.com/Gui1949/terraChat",
    context: "Integração de APIs geoespaciais com processamento contextual de dados em TypeScript."
  },
  {
    name: "br-utils",
    category: "Bibliotecas & Backend",
    description: "Biblioteca utilitária em Java com cliente HTTP minimalista e manipuladores de strings seguros contra valores nulos para sistemas corporativos.",
    technologies: ["Java", "HTTP Client", "Clean Code"],
    githubUrl: "https://github.com/Gui1949/br-utils",
    context: "Design de bibliotecas utilitárias reutilizáveis no ecossistema Java."
  },
  {
    name: "FloripaScript",
    category: "Compiladores & Linguagens",
    description: "Linguagem de programação autoral desenvolvida para unir a flexibilidade de scripts ao desempenho e controle de memória de C/C++.",
    technologies: ["C", "C++", "Compiladores"],
    githubUrl: "https://github.com/Gui1949/FloripaScript",
    context: "Implementação de compilador, análise sintática e gerenciamento de memória em baixo nível."
  },
  {
    name: "sankhya-ireport-web",
    category: "Integração ERP",
    description: "Módulo web para geração, visualização e extração analítica de relatórios corporativos integrados ao ERP Sankhya via iReport.",
    technologies: ["ERP Sankhya", "iReport", "SQL"],
    githubUrl: "https://github.com/Gui1949/https-github.com-VictorSalome-sankhya-ireport-web",
    context: "Extensão e extração de dados analíticos para operações corporativas de ERP."
  },
  {
    name: "ugOS",
    category: "Infraestrutura & Linux",
    description: "Distribuição Linux customizada baseada em Ubuntu Minimal, otimizada para execução enxuta de serviços de servidor.",
    technologies: ["Linux Kernel", "Ubuntu Minimal", "Bash"],
    githubUrl: "https://github.com/Gui1949/ugOS",
    context: "Customização de sistema operacional e rotinas de infraestrutura de servidores."
  }
];
