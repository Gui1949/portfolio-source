export interface ProjectMetric {
  label: string;
  value: string;
  description: string;
}

export interface SecurityAndReliabilitySpec {
  idempotencyStrategy: string;
  cryptography: string;
  precisionModel: string;
  reconciliationAudit: string;
}

export interface WeeklyEvolutionStep {
  day: string;
  phase: string;
  deliverable: string;
}

export interface RealWorldProject {
  id: string;
  name: string;
  tagline: string;
  version: string;
  versionTag: string;
  businessDomain: string;
  businessProblem: string;
  solutionArchitecture: string;
  operationalImpact: string;
  highlights: string[];
  metrics: ProjectMetric[];
  technologies: string[];
  githubUrl: string;
  status: string;
  isNew?: boolean;
  securitySpec?: SecurityAndReliabilitySpec;
  keyUseCases?: { title: string; desc: string }[];
  previewImage: string;
  previewAlt: string;
  sprintWeek: string;
  sprintBadge: string;
  weeklyEvolution: WeeklyEvolutionStep[];
}

export interface FeaturedGithubRepo {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  context: string;
}

export const sprintMethodology = {
  title: "Cadência de Engenharia: 1 Projeto por Semana com Melhoria Contínua Diária",
  subtitle: "Em vez de códigos descartáveis de estudo, cada sprint semanal desenvolve e aprofunda um produto corporativo completo com padrões enterprise de produção.",
  phases: [
    {
      day: "Segunda-feira",
      focus: "Kickoff & Domínio",
      description: "Modelagem DDD, contratos de interface e especificação de requisitos reais de negócio (sem exercícios genéricos)."
    },
    {
      day: "Terça-feira",
      focus: "Core & Persistência ACID",
      description: "Implementação das entidades e regras de negócio com precisão matemática (Integer Cents) e persistência atômica."
    },
    {
      day: "Quarta-feira",
      focus: "Eventos & Integrações",
      description: "Mensageria assíncrona (RabbitMQ), webhooks criptográficos HMAC SHA-256 e idempotência contra replay attacks."
    },
    {
      day: "Quinta-feira",
      focus: "Interfaces Operacionais & Telemetria",
      description: "Telas especializadas com identidade visual bespoke única (NOC de varejo, KDS touchscreen, cockpit de conciliação)."
    },
    {
      day: "Sexta-feira",
      focus: "Hardening & Publicação",
      description: "Bateria de testes automatizados nativos (Node.js test runner), tags de release semântica e deploy no GitHub Pages."
    }
  ]
};

export const realWorldProjects: RealWorldProject[] = [
  {
    id: "fintech-payment-gateway",
    name: "AegisPay & Financial Reconciliation Hub",
    tagline: "Gateway transacional e motor de auditoria contábil com garantia matemática e criptográfica contra vazamento de receita",
    version: "v1.0.0",
    versionTag: "v1.3.0 & fintech-payment-gateway-v1.0.0",
    isNew: true,
    sprintWeek: "Semana 03",
    sprintBadge: "Semana Atual · Evolução Diária",
    previewImage: "/previews/fintech-payment-gateway.svg",
    previewAlt: "Cockpit Executivo AegisPay de Auditoria e Conciliação de Recebíveis e Disputa Automática",
    businessDomain: "Fintech, Meios de Pagamento & Varejo Omnichannel",
    businessProblem: "No varejo e e-commerce de alto volume, a operação financeira sofre com o abismo temporal entre a autorização imediata da compra e sua liquidação bancária diferida (Pix em D+0 imediato vs Cartão de Crédito em D+30 e parcelado em até 12x de D+30 a D+360). Instabilidades de rede geram retries agressivos de webhooks com risco severo de cobranças duplicadas e replay attacks. Além disso, divergências silenciosas de taxas de MDR (Merchant Discount Rate) cobradas incorretamente por adquirentes e arredondamentos indevidos drenam entre 1,5% e 4% da margem líquida das empresas sem conciliação automatizada.",
    solutionArchitecture: "Clean Architecture e DDD com precisão financeira estrita em inteiros (Integer Cents, eliminando desvios IEEE 754 float), Idempotência estrita via Idempotency-Key com hash SHA-256 do payload, verificação criptográfica de webhooks HMAC SHA-256 com timingSafeEqual para anulação de timing attacks, máquina de estados imutável e motor automatizado de conciliação contábil que audita a expectativa contratada contra o arquivo de liquidação real da adquirente.",
    operationalImpact: "Estanca perdas de 1,5% a 4% em divergências de taxas MDR, elimina 100% dos riscos de duplicidade em falhas de rede e fecha o ciclo contábil entre venda e liquidação com relatórios automatizados de auditoria (MATCHED vs DIVERGENT).",
    highlights: [
      "Motor de conciliação contábil automatizado cruzando MDR contratual vs extrato bancário",
      "Solução para o abismo entre autorização imediata e liquidação diferida (D+0 Pix a D+360 Cartão)",
      "Idempotência estrita via Idempotency-Key e hash SHA-256 para prevenção a replay attacks",
      "Verificação criptográfica HMAC SHA-256 com timingSafeEqual para webhooks de adquirentes",
      "Precisão financeira absoluta em centavos inteiros (Integer Cents), anulando erros de float",
      "25 testes automatizados aprovados (100% pass) em 7 suítes — incluindo Benchmark Suite com 71.637 ops/seg e Chaos Test com 100% dos ataques neutralizados"
    ],
    weeklyEvolution: [
      { day: "Seg", phase: "Domínio & DDD", deliverable: "Modelagem de Entidades Financeiras e Aritmética estrita em Centavos Inteiros." },
      { day: "Ter", phase: "State Machine & Idempotência", deliverable: "Ciclo PENDING -> AUTHORIZED -> SETTLED com cache de hash SHA-256." },
      { day: "Qua", phase: "Criptografia & Webhooks", deliverable: "Assinatura HMAC SHA-256 com crypto.timingSafeEqual contra timing attacks." },
      { day: "Qui", phase: "Conciliação & Interface", deliverable: "Motor de conciliação MDR e Cockpit executivo de auditoria de extratos EDI." },
      { day: "Sex", phase: "Hardening & Benchmarks", deliverable: "25 testes automatizados (100% pass): Benchmark 71.637 ops/seg, 10.000 tx/lote em 25,5ms, p99 46,9µs, Chaos Test 100% neutralizado." }
    ],
    metrics: [
      {
        label: "Recuperação de Margem",
        value: "1,5% a 4,0%",
        description: "Estancamento de divergências ocultas de taxas MDR em extratos de liquidação"
      },
      {
        label: "Prevenção a Replay",
        value: "0 Duplicidades",
        description: "Idempotência SHA-256 e HMAC com crypto.timingSafeEqual contra ataques"
      },
      {
        label: "Abismo de Liquidação",
        value: "D+0 a D+360",
        description: "Conciliação do ciclo temporal entre autorização e repasse bancário efetivo"
      },
      {
        label: "Precisão Financeira",
        value: "Integer Cents",
        description: "Zero desvio de arredondamento em centavos inteiros (elimina float IEEE 754)"
      }
    ],
    securitySpec: {
      idempotencyStrategy: "Idempotency-Key vinculada à assinatura SHA-256 do corpo da requisição. Retries idênticos recebem a transação original em cache; payloads divergentes disparam IdempotencyConflictError.",
      cryptography: "Validação HMAC SHA-256 da assinatura de webhooks via crypto.timingSafeEqual, neutralizando ataques de temporização (timing attacks) em canais públicos.",
      precisionModel: "Aritmética estrita em inteiros (centavos), garantindo integridade contábil absoluta nos cálculos de MDR fixo e percentual escalonado por parcelamento.",
      reconciliationAudit: "Reconciliation Engine com classificação automatizada MATCHED (taxa e valor exatos) ou DIVERGENT (alerta de divergência com cálculo do desvio de MDR cobrado a maior)."
    },
    keyUseCases: [
      {
        title: "Conciliação de Taxas MDR Divergentes",
        desc: "Detecta discrepâncias contratuais onde adquirentes retêm taxas superiores ao acordado antes do fechamento contábil."
      },
      {
        title: "Tolerância a Retentativas de Webhook",
        desc: "Processa retries de adquirentes sem emitir múltiplos créditos ou gerar instabilidade no ERP corporativo."
      },
      {
        title: "Fechamento Contábil Automatizado",
        desc: "Substitui conferências manuais de planilhas por relatórios estruturados de conciliação bancária em segundos."
      }
    ],
    technologies: ["TypeScript", "Node.js 20+", "HMAC SHA-256", "Clean Architecture", "DDD", "Finite State Machine", "Financial Audit", "Native Test Runner"],
    githubUrl: "https://github.com/Gui1949/fintech-payment-gateway",
    status: "Produção (v1.0.0)"
  },
  {
    id: "retail-order-sync",
    name: "Retail Order Sync Engine",
    tagline: "Motor de sincronização resiliente para caixas de lojas físicas e retaguarda contábil em larga escala",
    version: "v1.0.0",
    versionTag: "v1.1.0",
    sprintWeek: "Semana 01",
    sprintBadge: "Semana 01 · Estabilizado",
    previewImage: "/previews/retail-order-sync.svg",
    previewAlt: "Console NOC Industrial e Telemetria de Sincronização de Caixas de Varejo",
    businessDomain: "Varejo & PDV Omnichannel",
    businessProblem: "Em redes de lojas físicas com alto fluxo de caixa, instabilidades no link de internet ou picos de latência do ERP central provocavam o Dual-Write Problem. Isso causava bloqueio nas filas de balcão ou descompasso grave no fechamento de inventário e contabilidade fiscal.",
    solutionArchitecture: "Padrão Transactional Outbox com persistência atômica local em menos de 30ms na base local do PDV e relay assíncrono para RabbitMQ com Publisher Confirms, retentativas com backoff exponencial e Dead Letter Queue (DLQ).",
    operationalImpact: "Desacoplamento de 100% entre a emissão do cupom no balcão e a disponibilidade do ERP, garantindo continuidade das vendas mesmo em queda total de WAN.",
    highlights: [
      "Gravação atômica da venda e do evento de outbox na mesma transação ACID",
      "Desacoplamento total entre emissão do cupom no balcão e latência de rede do ERP",
      "Publisher confirms com garantia de entrega at-least-once no broker RabbitMQ",
      "Roteamento de mensagens com falha persistente para Dead Letter Queue (DLQ)"
    ],
    weeklyEvolution: [
      { day: "Seg", phase: "Dual-Write Analysis", deliverable: "Mapeamento dos gargalos de PDV e modelagem da tabela de Outbox transacional." },
      { day: "Ter", phase: "ACID Local Storage", deliverable: "Persistência em lote local com benchmark de latência inferior a 30ms." },
      { day: "Qua", phase: "RabbitMQ Relay & DLQ", deliverable: "Relay assíncrono com publisher confirms, ack manual e fila de mensagens mortas." },
      { day: "Qui", phase: "NOC Telemetry & Console", deliverable: "Interface NOC para monitoramento de lojas físicas e status de replicação de eventos." },
      { day: "Sex", phase: "Chaos & WAN Drops", deliverable: "Simulações de queda total de internet com recuperação automática e garantia at-least-once." }
    ],
    metrics: [
      {
        label: "Latência no Caixa",
        value: "< 30ms",
        description: "Persistência atômica local sem bloqueio de rede"
      },
      {
        label: "Garantia de Entrega",
        value: "At-least-once",
        description: "RabbitMQ com Publisher Confirms e Dead Letter Queue"
      },
      {
        label: "Disponibilidade de Venda",
        value: "99.99%",
        description: "Checkout operacional mesmo sem conexão externa"
      },
      {
        label: "Consistência de Dados",
        value: "ACID Outbox",
        description: "Eliminação total do Dual-Write Problem"
      }
    ],
    technologies: ["TypeScript", "Node.js", "RabbitMQ", "Clean Architecture", "MSSQL", "Transactional Outbox"],
    githubUrl: "https://github.com/Gui1949/retail-order-sync",
    status: "Produção"
  },
  {
    id: "restaurant-kitchen-hub",
    name: "GourmetFlow KDS",
    tagline: "Kitchen Display System em tempo real com orquestração de estações e expedição sincronizada",
    version: "v1.0.0",
    versionTag: "v1.2.0",
    sprintWeek: "Semana 02",
    sprintBadge: "Semana 02 · Estabilizado",
    previewImage: "/previews/restaurant-kds.svg",
    previewAlt: "Painel Touchscreen Kitchen Display System (KDS) por Estações de Cozinha",
    businessDomain: "Restaurantes & Food Service",
    businessProblem: "Cozinhas de alta rotatividade e operações delivery sofrem com o descompasso de tempo de preparo entre estações (bebidas esquentando na copa enquanto a grelha ainda não finalizou a carne), gerando perda de SLA e pratos entregues frios.",
    solutionArchitecture: "Kitchen Display System orientado a eventos que decompõe a comanda por estações independentes (Grelha, Forno, Bar, Copa) via WebSockets e sincroniza a expedição final para liberação simultânea dos itens na mesa.",
    operationalImpact: "Redução do tempo ocioso de garçons, aumento no giro de mesas e expedição pontual garantindo experiência gastronômica de alto padrão.",
    highlights: [
      "Roteamento automático e decomposição de itens da comanda por estação de preparo",
      "Sincronização de expedição: aciona o garçom apenas quando a mesa estiver 100% pronta",
      "Rastreamento de latência e tempo de preparo por estação e canal de venda",
      "Máquina de estados estrita com emissão de eventos em tempo real via WebSockets"
    ],
    weeklyEvolution: [
      { day: "Seg", phase: "Decomposição de Comandas", deliverable: "Modelagem de comandas multi-itens e roteamento por postos de preparo." },
      { day: "Ter", phase: "WebSockets & Event Bus", deliverable: "Barramento bidirecional em tempo real para sincronização instantânea de pedidos." },
      { day: "Qua", phase: "Algoritmo de Sincronia", deliverable: "Pacing de preparação para que carnes e guarnições finalizem no mesmo minuto." },
      { day: "Qui", phase: "Touch KDS Interface", deliverable: "Interface tátil de alta visibilidade e contraste para ambiente hostil de cozinha." },
      { day: "Sex", phase: "Stress & Peak Load", deliverable: "Validação sob carga de 500 pedidos simultâneos sem perda de sincronismo de mesa." }
    ],
    metrics: [
      {
        label: "Sincronia de Expedição",
        value: "100%",
        description: "Itens liberados em conjunto para chegada simultânea na mesa"
      },
      {
        label: "Visibilidade de SLA",
        value: "Tempo Real",
        description: "Monitoramento de latência e gargalos por posto de trabalho"
      },
      {
        label: "Roteamento de Itens",
        value: "Automático",
        description: "Separação inteligente entre Bar, Grelha, Forno e Montagem"
      },
      {
        label: "Consistência de Estado",
        value: "State Machine",
        description: "Transições imutáveis de status da comanda"
      }
    ],
    technologies: ["TypeScript", "Node.js", "Event-Driven", "WebSockets", "State Machine", "Clean Architecture"],
    githubUrl: "https://github.com/Gui1949/restaurant-kitchen-hub",
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
