export interface RealWorldProject {
  id: string;
  name: string;
  businessDomain: "Varejo & Redes de Lojas" | "Restaurantes & Food Service" | "Fintech & Integrações" | "Logística & Supply Chain";
  segmentIcon: string;
  businessProblem: string;
  solutionArchitecture: string;
  highlights: string[];
  technologies: string[];
  projectPath: string;
  status: "production-ready" | "in-development";
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
    projectPath: "projects/restaurant-kitchen-hub",
    status: "production-ready"
  }
];
