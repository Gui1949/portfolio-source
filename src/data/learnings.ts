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
    id: "cloudshield-iac-platform",
    name: "CloudShield IaC Platform",
    tagline: "Enterprise Infrastructure as Code, Policy-as-Code CIS Benchmark, orquestração de drift e governança FinOps",
    version: "v1.1.0",
    versionTag: "v1.1.0",
    isNew: true,
    sprintWeek: "Semana 06",
    sprintBadge: "Semana 06 · Core & State Lock v1.1.0",
    previewImage: "/previews/cloudshield-iac-platform.svg",
    previewAlt: "Cockpit CloudShield de Infrastructure as Code, Policy-as-Code CIS Benchmark e FinOps",
    businessDomain: "Cloud Engineering, Platform Architecture, FinOps & Segurança DevSecOps",
    businessProblem: "Em ecossistemas corporativos multi-cloud (AWS, GCP, Azure, K8s), operações manuais (ClickOps) e códigos fragmentados de Terraform provocam quatro fragilidades graves: 1) Violações de segurança expondo portas administrativas (SSH 22, RDP 3389, bancos 5432) para a internet pública (0.0.0.0/0) e datastores sem KMS; 2) Colisão de endereçamento de rede (CIDR overlaps) que inviabiliza roteamento entre VPCs e subnets; 3) Descontrole orçamentário FinOps (budget runaway) sem travas em tempo de plan com precisão contábil; 4) Drift de configuração entre o estado GitOps desejado e a infraestrutura viva em execução.",
    solutionArchitecture: "Clean Architecture e Domain-Driven Design (DDD) com motor de governança declarativa: cálculo bitwise de blocos IPv4 com detecção preventiva de colisão (RN-02); URN canônico padronizado multi-provedor (RN-03); precisão orçamentária em centavos inteiros (Integer Cents) com travas atômicas e alarme de threshold em 80% (RN-01); motor Policy-as-Code auditando padrões CIS Benchmarks e criptografia KMS obrigatória em datastores (RN-04); máquina de estados finitos imutável (FSM) com transições determinísticas (RN-05); isolamento transacional via Unit of Work com rollback atômico total (RN-06); Lock Manager lexicográfico anti-deadlock (RN-07); e versionamento de estado com histórico append-only de snapshots (RN-08).",
    operationalImpact: "Eliminação de 100% dos riscos de portas administrativas abertas ao mundo, bloqueio preventivo de colisões de subnets antes da aplicação no provedor, governança financeira absoluta com teto orçamentário à prova de furos, zero deadlocks em concorrência cruzada e rastreabilidade perpétua de revisões de estado.",
    highlights: [
      "Validação algorítmica bitwise de blocos CIDR IPv4 com prevenção total a sobreposição de subnets (RN-02)",
      "Motor Policy-as-Code garantindo conformidade aos padrões CIS Benchmarks 4.1 e 4.2 e KMS obrigatório (RN-04)",
      "Aritmética FinOps em centavos inteiros (Integer Cents) com trava orçamentária atômica e alerta em 80% (RN-01)",
      "Unit of Work transacional com snapshot em memória e rollback atômico 100% restaurável (RN-06)",
      "AsyncStateLockManager com ordenação lexicográfica estrita garantindo zero deadlocks (RN-07)",
      "Histórico append-only de snapshots imutáveis com concorrência otimista e rollback histórico (RN-08)",
      "33 testes unitários nativos aprovados (100% pass em 13 suítes) cobrindo domínio, rede, ACID, locking e snapshots"
    ],
    weeklyEvolution: [
      { day: "Fase 1", phase: "Domínio & Policy-as-Code", deliverable: "Value Objects CidrBlock, FinOpsBudget, SecurityRule, Agregado InfrastructureStack e 23 testes (100% pass)." },
      { day: "Fase 2", phase: "Persistência ACID & State Locking", deliverable: "Unit of Work com rollback atômico, Lock Manager lexicográfico, snapshots de estado e 33 testes (100% pass)." },
      { day: "Fase 3", phase: "Mensageria & Drift Relay", deliverable: "Transactional Outbox, webhooks criptográficos HMAC para alertas de drift e eventos." },
      { day: "Fase 4", phase: "Cockpit Operacional & Telemetria", deliverable: "Telemetry Collector, histogramas p50/p95/p99, health probes liveness/readiness e console." },
      { day: "Fase 5", phase: "Hardening & Stress Testing", deliverable: "Benchmark massivo >= 5.000 ops/s, injeção de caos em I/O e release estabilizada v1.4.0." }
    ],
    metrics: [
      {
        label: "Conformidade CIS",
        value: "100,00%",
        description: "Zero portas administrativas expostas em 0.0.0.0/0 e KMS obrigatório"
      },
      {
        label: "Segurança Concorrente",
        value: "Zero Deadlocks",
        description: "Locks lexicograficamente ordenados em concorrência cruzada (RN-07)"
      },
      {
        label: "Precisão FinOps",
        value: "Integer Cents",
        description: "Zero float drift com teto orçamentário atômico e alerta em 80%"
      },
      {
        label: "Testes Automatizados",
        value: "33 (100% Pass)",
        description: "13 suítes no test runner nativo cobrindo domínio, ACID, locks e rollback"
      }
    ],
    securitySpec: {
      idempotencyStrategy: "Identificadores imutáveis por URN canônico com travas de estado na FSM impedindo execuções concorrentes de apply.",
      cryptography: "Criptografia KMS obrigatória em repouso para todos os recursos de dados (RDS, MSK, S3) e bloqueio CIS 4.1/4.2.",
      precisionModel: "Aritmética estrita em centavos inteiros (Integer Cents), impedindo desvios de arredondamento em orçamentos corporativos.",
      reconciliationAudit: "PolicyComplianceEngine avalia 100% dos recursos declarados antes da geração do plano de execução."
    },
    keyUseCases: [
      {
        title: "Governança Policy-as-Code Automática",
        desc: "Bloqueia regras de Security Group permissivas e recursos sem criptografia antes da aplicação na nuvem."
      },
      {
        title: "Prevenção Bitwise de Colisão de IPs",
        desc: "Impede o provisionamento de subnets sobrepostas que inviabilizariam conexões de rede corporativa."
      },
      {
        title: "Trava Orçamentária FinOps em Tempo Real",
        desc: "Interrompe planos de infraestrutura que excedam o orçamento aprovado para o ambiente."
      }
    ],
    technologies: ["TypeScript", "Node.js", "Platform Engineering", "Infrastructure as Code", "Policy-as-Code", "CIS Benchmarks", "FinOps", "Clean Architecture", "DDD", "Native Test Runner"],
    githubUrl: "https://github.com/Gui1949/cloudshield-iac-platform",
    status: "Produção (v1.1.0)"
  },
  {
    id: "titan-ledger-hub",
    name: "TitanLedger & Clearing Hub",
    tagline: "Core Banking e motor de partidas dobradas com soma zero, validação Bacen Pix DICT e ledger imutável append-only",
    version: "v1.4.0",
    versionTag: "v1.4.0",
    isNew: false,
    sprintWeek: "Módulo Core Banking",
    sprintBadge: "Semana 05 · Estabilizado v1.4.0",
    previewImage: "/previews/titan-ledger-hub.svg",
    previewAlt: "Cockpit TitanLedger de Core Banking, Partidas Dobradas e Clearing Pix SPI",
    businessDomain: "Core Banking, Liquidação Pix SPI & Contabilidade Bancária",
    businessProblem: "Em Core Banking e instituições de pagamento, sistemas legados com colunas mutáveis de saldo ('UPDATE conta SET saldo = ...') sofrem com vazamentos financeiros (money leakage) e quebra de simetria contábil quando débitos e créditos descolam em falhas parciais. Além disso, a falta de validação algorítmica rigorosa de chaves DICT (Bacen), a ausência de telemetria de latência p99 para SLA SPI (< 1000ms) e o Dual-Write Problem causam rejeições massivas no SPI e impossibilitam auditorias contábeis fidedignas.",
    solutionArchitecture: "Clean Architecture e Domain-Driven Design (DDD) com motor de partidas dobradas (Double-Entry Bookkeeping) garantindo que Débito seja rigorosamente igual a Crédito com saldo de zero centavos (RN-01); ledger append-only imutável sem UPDATE ou DELETE com estornos por partidas contrapostas (RN-02); Unit of Work transacional com rollback total (RN-06); Transactional Outbox Pattern prevenindo dual-write com mensagens ISO 20022 pacs.008 e pacs.004 (RN-09); WebhookSignatureValidator com HMAC-SHA256 e timingSafeEqual (RN-10); TelemetryCollector com histogramas p50/p95/p99; HealthCheckService com liveness/readiness, auditoria contábil contínua (RN-11) e monitor de saturação DLQ/Outbox (RN-12); CoreBankingCockpitEngine para tesouraria executiva; AsyncMutexLockManager anti-deadlock e anti double-spending (RN-08); resiliência com benchmark de alta vazão (>= 5.000 ops/s) e caos de storage.",
    operationalImpact: "Eliminação de 100% de discrepâncias contábeis e vazamentos de moeda, observabilidade em tempo real com conformidade de SLA SPI Bacen (< 1000ms), garantia atômica de entrega de eventos sem dual-write, trilha de auditoria perpétua e inalterável com resíduo zero absoluto (0c) e resiliência atestada sob caos de I/O.",
    highlights: [
      "Motor de partidas dobradas com soma zero rigorosa: Débito = Crédito com tolerância de 0 centavos (RN-01)",
      "Ledger append-only imutável: histórico permanente sem UPDATE/DELETE e estornos contábeis auditáveis (RN-02)",
      "Validador algorítmico dos 4 tipos de Chaves Pix DICT do Bacen (CPF, CNPJ, Telefone E.164, Email, EVP)",
      "Transactional Outbox com ISO 20022 pacs.008 e pacs.004 eliminando risco de dual-write (RN-09)",
      "Webhooks seguros com assinatura HMAC-SHA256 e verificação em tempo constante timingSafeEqual (RN-10)",
      "Telemetria industrial com histogramas de latência p50/p95/p99 garantindo conformidade ao SLA SPI Bacen",
      "Health Probes (liveness/readiness), auditoria global RN-11 e monitoramento de saturação de DLQ/Outbox (RN-12)",
      "Throughput Benchmark de alta performance (>= 5.000 ops/s) e resiliência atestada sob injeção de caos de I/O",
      "45 testes automatizados aprovados (100% pass em 11 suítes) cobrindo regras contábeis, DICT Bacen, ACID, Outbox e Caos"
    ],
    weeklyEvolution: [
      { day: "Fase 1", phase: "Domínio & Partidas Dobradas", deliverable: "Value Objects ChavePix DICT, ValorMonetario em centavos, FSM Conta/Transação e 18 testes (100% pass)." },
      { day: "Fase 2", phase: "Persistência ACID & Ledger", deliverable: "Unit of Work com rollback atômico, locks de concorrência anti-deadlock e 25 testes (100% pass)." },
      { day: "Fase 3", phase: "Clearing Pix & SPI Messaging", deliverable: "Transactional Outbox, mensagens ISO 20022 pacs.008/pacs.004, HMAC timingSafeEqual, DLQ e 32 testes (100% pass)." },
      { day: "Fase 4", phase: "Cockpit de Tesouraria & Telemetria", deliverable: "Cockpit Executivo Core Banking, telemetria de latência p95/p99, health probes liveness/readiness e 39 testes (100% pass)." },
      { day: "Fase 5", phase: "Hardening & Stress Testing", deliverable: "Throughput benchmark massivo (>= 5.000 ops/s), injeção de caos com rollback de I/O, tempestade concorrente e 45 testes (100% pass)." }
    ],
    metrics: [
      {
        label: "Equilíbrio Contábil",
        value: "Soma Zero (0c)",
        description: "Débitos idênticos a Créditos em cada transação, sem resíduos"
      },
      {
        label: "Rastreabilidade",
        value: "Append-Only",
        description: "Ledger imutável perpétuo com estornos contábeis reversos auditáveis"
      },
      {
        label: "Vazão & Resiliência",
        value: ">= 5.000 ops/s",
        description: "Throughput sustentado sob estresse, caos de I/O e SLA SPI compliance"
      },
      {
        label: "Testes Automatizados",
        value: "45 (100% Pass)",
        description: "11 suítes no runner nativo cobrindo domínio contábil, ACID, Outbox, telemetria e caos"
      }
    ],
    securitySpec: {
      idempotencyStrategy: "Transações indexadas por Idempotency-Key e End-to-End Id Pix Bacen, impedindo duplicidade de débitos e créditos no ledger.",
      cryptography: "Validação algorítmica de CPF/CNPJ via módulo 11, formatação E.164 e UUIDv4 canônico, além de assinaturas de payload para clearing Pix.",
      precisionModel: "Aritmética estrita em centavos inteiros (Integer Cents), garantindo a invariante de soma zero: somatório de débitos idêntico ao somatório de créditos.",
      reconciliationAudit: "MotorContabilDoubleEntry valida o balanço de cada transação antes da gravação imutável no ledger, bloqueando lançamentos assimétricos com TransacaoDesbalanceadaError."
    },
    keyUseCases: [
      {
        title: "Liquidação Instantânea Pix",
        desc: "Gera lançamentos contábeis complementares simultâneos com liquidação em centavos e comprovante E2E."
      },
      {
        title: "Estorno e Devolução Contábil",
        desc: "Realiza reversão auditável por partidas contrapostas sem alterar registros pretéritos do ledger."
      },
      {
        title: "Bloqueio e Proteção Judicial",
        desc: "FSM suspende transações imediatamente para contas com ordem judicial sem corromper saldos."
      }
    ],
    technologies: ["TypeScript", "Node.js", "Core Banking", "Double-Entry Ledger", "Bacen Pix DICT", "Clean Architecture", "DDD", "Finite State Machine", "Native Test Runner"],
    githubUrl: "https://github.com/Gui1949/titan-ledger-hub",
    status: "Produção (v1.0.0)"
  },
  {
    id: "fidc-receivables-hub",
    name: "FIDC Receivables & Securitization Hub",
    tagline: "Motor de securitização e cessão de duplicatas com validação SEFAZ mod-11, zero float drift e ledger anti-duplo penhor",
    version: "v1.4.0",
    versionTag: "v1.4.0",
    isNew: false,
    sprintWeek: "Módulo FIDC",
    sprintBadge: "Release Gate v1.4.0 · 24.5k ops/s",
    previewImage: "/previews/fidc-receivables-hub.svg",
    previewAlt: "Cockpit FIDC de Securitização, Custódia de Duplicatas e Prevenção a Dupla Cessão",
    businessDomain: "Mercado de Capitais, FIDCs & Securitização de Crédito",
    businessProblem: "Fundos de Investimento em Direitos Creditórios (FIDCs) e fintechs de antecipação sofrem com três vulnerabilidades críticas: 1) O risco de cessão duplicada (duplo penhor), onde a mesma NF-e é cedida simultaneamente para dois fundos distintos gerando disputas judiciais e perdas patrimoniais; 2) 'Drift' acumulado de ponto flutuante (IEEE 754 float) no cálculo de deságio pro-rata dia sobre milhares de duplicatas, drenando centenas de reais em frações de centavos não auditáveis; 3) Aceite de duplicatas 'frias' sem validação prévia de lastro SEFAZ com dígito verificador módulo 11.",
    solutionArchitecture: "Clean Architecture e DDD com esteira de alta performance e resiliência a falhas: motor com throughput comprovado de 24.553 ops/seg processando 5.000 duplicatas em 203,64ms com Zero Float Drift (RN-13) sobre R$ 5,12 milhões; isolamento transacional com rollback integral do Unit of Work sob injeção de caos em I/O (RN-14); Lock Manager lexicográfico à prova de deadlocks em concorrência pesada cruzada; neutralização de 100% dos ataques de replay expirado e adulteração de payload em webhooks; e observabilidade CVM 175 com health checks nativos.",
    operationalImpact: "Throughput de 24.553 ops/seg capaz de processar borderôs de 5.000 títulos em ~200ms com exatidão matemática absoluta centavo a centavo, neutralização de 100% de injeções de falha de I/O via rollback atômico e garantia de zero deadlocks em concorrência simultânea.",
    highlights: [
      "Benchmark massivo de 24.553 ops/seg (5.000 títulos liquidados em 203,64ms com zero drift float sobre R$ 5,12M)",
      "Chaos Engineering com injeção de falhas de I/O e rollback atômico perfeito do Unit of Work (RN-14)",
      "Tempestade de concorrência cruzada executada com zero deadlocks e bloqueio estrito de duplo penhor",
      "Neutralização de 100% de ataques de replay expirado (>300s) e adulteração de payloads (tampering)",
      "Cockpit executivo CVM 175 com taxa média ponderada (RN-11) e histograma de latência SEFAZ p95/p99",
      "44 testes automatizados aprovados (100% pass em 33 suítes) cobrindo domínio, ACID, mensageria e caos"
    ],
    weeklyEvolution: [
      { day: "Fase 1", phase: "Domínio & DDD", deliverable: "Value Objects SEFAZ mod-11, CNPJ duplo DV, Integer Cents e FSM de Duplicata e Lote." },
      { day: "Fase 2", phase: "Persistência ACID & Locks", deliverable: "Unit of Work com rollback atômico, Lock Manager anti-deadlock e proteção contra race condition." },
      { day: "Fase 3", phase: "Mensageria & Outbox Resiliente", deliverable: "Transactional Outbox atômico, Webhook HMAC timing-safe, anti-replay 300s e tolerância a falhas com DLQ." },
      { day: "Fase 4", phase: "Telemetria & Cockpit CVM 175", deliverable: "Taxa ponderada RN-11, histograma SEFAZ p95/p99 e probes Liveness/Readiness." },
      { day: "Fase 5", phase: "Hardening, Chaos & Release v1.4.0", deliverable: "Benchmark 24.553 ops/s (5.000 duplicatas em 203ms), Chaos Test 100% neutralizado e 44 testes (100% pass)." }
    ],
    metrics: [
      {
        label: "Throughput Motor",
        value: "24.553 ops/s",
        description: "5.000 duplicatas processadas em 203,64ms com zero drift sobre R$ 5,12M"
      },
      {
        label: "Chaos Engineering",
        value: "100% Rollback",
        description: "Injeção de falha de I/O neutralizada com restauração integral de estado"
      },
      {
        label: "Segurança Concorrente",
        value: "Zero Deadlocks",
        description: "Tempestade concorrente cruzada sem timeouts e bloqueio total de 100 ataques"
      },
      {
        label: "Testes Automatizados",
        value: "44 (100% Pass)",
        description: "33 suítes no runner nativo cobrindo domínio, ACID, resiliência e estresse"
      }
    ],
    securitySpec: {
      idempotencyStrategy: "Ledger de Recebíveis com constraint primária por Chave NF-e e locks lexicográficos. Tempestades de concorrência cruzada executadas sem deadlocks e retries idempotentes via Outbox Relay.",
      cryptography: "Validação SEFAZ mod-11 de 44 dígitos, HMAC-SHA256 timing-safe com bloqueio total de 100 ataques de tampering e rejeição de replays expirados (>300s).",
      precisionModel: "Aritmética estrita em centavos inteiros (Integer Cents): zero float drift comprovado sobre R$ 5.125.925,00 em lote massivo de 5.000 títulos (RN-13).",
      reconciliationAudit: "Unit of Work com rollback transacional à prova de injeção de falhas (Chaos Engineering RN-14), health checks com degradação automática e governança CVM 175."
    },
    keyUseCases: [
      {
        title: "Prevenção a Duplo Penhor de NF-e",
        desc: "Impede que o mesmo título faturado seja antecipado em mais de uma instituição financeira simultaneamente."
      },
      {
        title: "Auditoria de Borderôs e Deságio Composto",
        desc: "Calcula o valor presente exato de cada duplicata considerando o prazo em dias úteis até o vencimento."
      },
      {
        title: "Liquidação e Baixa Automática de Duplicatas",
        desc: "Coordena a transição de estado de CEDIDA para LIQUIDADA mediante confirmação de pagamento do sacado."
      }
    ],
    technologies: ["TypeScript", "Node.js", "Chaos Engineering", "Throughput Benchmark", "Transactional Outbox", "HMAC SHA-256", "CVM 175 Governance", "DDD", "Clean Architecture", "Native Test Runner"],
    githubUrl: "https://github.com/Gui1949/fidc-receivables-hub",
    status: "Produção Estabilizada (v1.4.0)"
  },
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
    name: "cloudshield-iac-platform",
    category: "Cloud Engineering & Platform",
    description: "Enterprise Infrastructure as Code, Policy-as-Code CIS Benchmark, orquestração de drift e governança FinOps.",
    technologies: ["TypeScript", "IaC", "CIS Benchmarks", "FinOps", "Clean Architecture"],
    githubUrl: "https://github.com/Gui1949/cloudshield-iac-platform",
    context: "Governança declarativa de nuvem com prevenção bitwise de colisão CIDR e travas orçamentárias FinOps."
  },
  {
    name: "titan-ledger-hub",
    category: "Core Banking & Fintech",
    description: "Motor de Core Banking com partidas dobradas (soma zero), ledger append-only imutável e validação Bacen Pix DICT.",
    technologies: ["TypeScript", "Core Banking", "Double-Entry", "Pix DICT", "Clean Architecture"],
    githubUrl: "https://github.com/Gui1949/titan-ledger-hub",
    context: "Arquitetura bancária de alta confiabilidade com garantia de equilíbrio contábil e zero money leakage."
  },
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
