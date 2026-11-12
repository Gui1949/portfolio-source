export interface DailyLearning {
  day: number;
  date: string;
  title: string;
  category: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  codePath: string;
  status: "completed" | "in-progress" | "planned";
}

export const dailyLearnings: DailyLearning[] = [
  {
    day: 1,
    date: "2026-11-12",
    title: "Transactional Outbox Pattern & Event Publishing Resiliente",
    category: "Arquitetura Distribuída & Mensageria",
    summary: "Implementação prática do padrão Transactional Outbox em Node.js com TypeScript e RabbitMQ, garantindo consistência eventual e eliminando perda de eventos entre banco de dados e mensageria sem necessidade de transações distribuídas (2PC).",
    highlights: [
      "Persistência atômica da entidade de negócio e da mensagem de outbox no mesmo commit do banco",
      "Processador em background com polling incremental e retry exponencial",
      "Publicação idempotente no RabbitMQ com confirmação de broker (publisher confirms)",
      "Tratamento de Dead Letter Exchange (DLX) para mensagens com falha persistente"
    ],
    technologies: ["TypeScript", "Node.js", "RabbitMQ", "Clean Architecture", "Jest"],
    codePath: "studies/day-01-outbox-pattern",
    status: "completed"
  }
];
