import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Mail, 
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Lock,
  FileCheck,
  Calculator,
  Percent,
  Clock,
  Layers
} from 'lucide-react';
import { profileData } from './data/profile';
import { realWorldProjects, featuredGithubRepos, type RealWorldProject } from './data/learnings';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const App: React.FC = () => {
  // Interactive state for AegisPay Hub Spotlight
  const [activeTab, setActiveTab] = useState<'roi' | 'security' | 'lifecycle' | 'tests'>('roi');
  const [monthlyVolume, setMonthlyVolume] = useState<number>(1000000); // R$ 1.000.000
  const [mdrLeakageRate, setMdrLeakageRate] = useState<number>(2.5); // 2.5%
  const [activeStateStep, setActiveStateStep] = useState<number>(0);

  // Calculate simulated ROI
  const annualVolume = monthlyVolume * 12;
  const annualLeakageAvoided = (annualVolume * (mdrLeakageRate / 100));

  const aegisProject = realWorldProjects.find(p => p.id === 'fintech-payment-gateway') as RealWorldProject;
  const otherProjects = realWorldProjects.filter(p => p.id !== 'fintech-payment-gateway');

  const stateMachineSteps = [
    {
      state: "PENDING",
      title: "Iniciação de Cobrança",
      timing: "T+0ms",
      desc: "Geração imediata de Pix QR Code ou tokenização de Cartão de Crédito.",
      guard: "Validação estrita de Integer Cents (> 0) e verificação de Idempotency-Key com hash SHA-256 do payload."
    },
    {
      state: "AUTHORIZED",
      title: "Pré-Autorização Bancária",
      timing: "T+450ms",
      desc: "Reserva do limite de crédito do portador junto à adquirente emissora.",
      guard: "Transição imutável apenas para pagamentos via Cartão de Crédito antes da captura efetiva."
    },
    {
      state: "CAPTURED",
      title: "Captura Confirmada via Webhook HMAC",
      timing: "Pix D+0 / Cartão D+0",
      desc: "Venda formalizada. Webhook da adquirente recebido e validado com criptografia HMAC SHA-256 via timingSafeEqual.",
      guard: "Garantia de que requisições falsificadas ou replays de rede sejam sumariamente rejeitados."
    },
    {
      state: "SETTLED",
      title: "Conciliação Aprovada (Auditoria MATCHED)",
      timing: "D+0 (Pix) até D+360 (Cartão 12x)",
      desc: "Motor contábil cruza extrato de repasse bancário com MDR contratual. Valor líquido transferido com 100% de conferência.",
      guard: "Se a adquirente cobrar MDR divergente do contrato, a transação é retida como DIVERGENT para estorno."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#e6e8ec] antialiased selection:bg-zinc-800 selection:text-white">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-[#0c0d10]/90 backdrop-blur-md border-b border-zinc-800/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-medium text-sm text-zinc-100 tracking-tight">
              Guilherme Floriano
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-xs text-zinc-400 font-mono">Tech Lead</span>
          </div>

          <nav className="hidden sm:flex items-center gap-6 text-xs text-zinc-400">
            <a href="#aegispay" className="hover:text-zinc-200 transition-colors flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              AegisPay Hub
            </a>
            <a href="#projetos" className="hover:text-zinc-200 transition-colors">Sistemas Corporativos</a>
            <a href="#repositorios" className="hover:text-zinc-200 transition-colors">Código Aberto</a>
            <a href="#trajetoria" className="hover:text-zinc-200 transition-colors">Trajetória</a>
            <a href="#competencias" className="hover:text-zinc-200 transition-colors">Competências</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-zinc-400 hover:text-zinc-200 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-zinc-400 hover:text-zinc-200 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700/60 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" /> Contato
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-20">
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 text-xs text-zinc-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Disponível para liderança técnica, fintechs e arquitetura de integrações
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-100 tracking-tight leading-snug">
              {profileData.name}
            </h1>
            <p className="text-lg text-zinc-300 font-medium">
              {profileData.title}
            </p>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-3xl">
            {profileData.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 font-mono pt-2">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" /> {profileData.location}
            </span>
            <span>•</span>
            <span>Fintech & Meios de Pagamento</span>
            <span>•</span>
            <span>Mensageria & Resiliência</span>
            <span>•</span>
            <span>Integrações ERP</span>
          </div>

          {/* Real Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-zinc-850">
            {profileData.stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-[#111317] border border-zinc-800/80">
                <div className="text-2xl font-semibold text-zinc-100 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-zinc-300 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5 leading-tight">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED PRODUCT SHOWCASE: AegisPay & Financial Reconciliation Hub */}
        <section id="aegispay" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-zinc-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-950/70 text-blue-300 border border-blue-800/50">
                  Lançamento de Produto
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  Tags: {aegisProject.versionTag}
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-zinc-100 tracking-tight">
                {aegisProject.name}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-3xl">
                {aegisProject.tagline}
              </p>
            </div>
            <a
              href={aegisProject.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-colors self-start mt-2 sm:mt-0"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Ver no GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" />
            </a>
          </div>

          {/* Business Value Highlight Box */}
          <div className="p-5 sm:p-6 rounded-lg bg-[#111317] border border-zinc-800 space-y-5">
            {/* The 3 Core Business Problems Solved */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded bg-[#0c0d10] border border-zinc-850 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Abismo de Liquidação</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Autorização em 800ms vs liquidação em D+0 (Pix) e D+30 a D+360 (Cartão parcelado). O AegisPay rastreia o ciclo transacional completo até o crédito bancário real.
                </p>
              </div>

              <div className="p-4 rounded bg-[#0c0d10] border border-zinc-850 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Replay & Duplicidade</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Neutraliza retentativas de webhooks de adquirentes e bancos via <code className="text-zinc-200 font-mono">Idempotency-Key</code> (hash SHA-256) e assinaturas criptográficas HMAC SHA-256.
                </p>
              </div>

              <div className="p-4 rounded bg-[#0c0d10] border border-zinc-850 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
                  <Percent className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Divergências de MDR</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Adquirentes retêm taxas incorretas ou arredondamentos indevidos. O motor de conciliação audita contratos e estanca vazamentos silenciosos de <strong>1,5% a 4%</strong> da receita.
                </p>
              </div>
            </div>

            {/* Metrics Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              {aegisProject.metrics.map((metric, idx) => (
                <div key={idx} className="p-3.5 rounded bg-[#0c0d10] border border-zinc-850">
                  <div className="text-lg font-semibold text-zinc-100 font-mono">
                    {metric.value}
                  </div>
                  <div className="text-xs font-medium text-zinc-300 mt-0.5">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-1 leading-tight">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Showcase Tabs */}
            <div className="pt-3 border-t border-zinc-850 space-y-4">
              <div className="flex flex-wrap items-center gap-2 border-b border-zinc-800 pb-2">
                <button
                  onClick={() => setActiveTab('roi')}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors flex items-center gap-1.5 ${
                    activeTab === 'roi'
                      ? 'bg-zinc-800 text-zinc-100 border border-zinc-700'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850'
                  }`}
                >
                  <Calculator className="w-3.5 h-3.5" />
                  Calculadora de Margem MDR
                </button>
                <button
                  onClick={() => setActiveTab('security')}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors flex items-center gap-1.5 ${
                    activeTab === 'security'
                      ? 'bg-zinc-800 text-zinc-100 border border-zinc-700'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850'
                  }`}
                >
                  <Lock className="w-3.5 h-3.5" />
                  Segurança & Idempotência
                </button>
                <button
                  onClick={() => setActiveTab('lifecycle')}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors flex items-center gap-1.5 ${
                    activeTab === 'lifecycle'
                      ? 'bg-zinc-800 text-zinc-100 border border-zinc-700'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  Ciclo de Vida Transacional
                </button>
                <button
                  onClick={() => setActiveTab('tests')}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors flex items-center gap-1.5 ${
                    activeTab === 'tests'
                      ? 'bg-zinc-800 text-zinc-100 border border-zinc-700'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  15 Testes Automatizados (100% Pass)
                </button>
              </div>

              {/* Tab 1: ROI & MDR Loss Prevention Calculator */}
              {activeTab === 'roi' && (
                <div className="p-4 rounded bg-[#0c0d10] border border-zinc-850 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-100">
                        Simulador de Estancamento de Perdas em Taxas MDR
                      </h4>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Ajuste o volume transacionado e veja o montante de capital salvo pelo motor de conciliação contábil do AegisPay.
                      </p>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 self-start sm:self-auto">
                      Recuperação de 1,5% a 4% da Margem
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs text-zinc-300 mb-1">
                          <span>Faturamento Mensal Processado:</span>
                          <span className="font-mono font-semibold text-zinc-100">
                            {monthlyVolume.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="100000"
                          max="10000000"
                          step="100000"
                          value={monthlyVolume}
                          onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                          className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                        <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
                          <span>R$ 100 mil</span>
                          <span>R$ 5 milhões</span>
                          <span>R$ 10 milhões</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-zinc-300 mb-1">
                          <span>Taxa Média de Desvio / Divergência MDR:</span>
                          <span className="font-mono font-semibold text-amber-400">
                            {mdrLeakageRate.toFixed(1)}%
                          </span>
                        </div>
                        <input
                          type="range"
                          min="1.0"
                          max="4.0"
                          step="0.1"
                          value={mdrLeakageRate}
                          onChange={(e) => setMdrLeakageRate(Number(e.target.value))}
                          className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                        />
                        <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
                          <span>1.0% (Mínimo)</span>
                          <span>2.5% (Típico em Varejo)</span>
                          <span>4.0% (Pior Cenário)</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-[#111317] border border-zinc-800 flex flex-col justify-between">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider">
                          Perda Silenciosa Anual Estancada pelo AegisPay
                        </span>
                        <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">
                          {annualLeakageAvoided.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </div>
                        <p className="text-[11px] text-zinc-400 leading-tight pt-1">
                          Valor que seria retido indevidamente pela adquirente no extrato de liquidação bancária sem auditoria linha a linha.
                        </p>
                      </div>

                      <div className="mt-3 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs">
                        <span className="text-zinc-500 font-mono">Volume Anual:</span>
                        <span className="text-zinc-300 font-mono">
                          {annualVolume.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Security & Idempotency */}
              {activeTab === 'security' && (
                <div className="p-4 rounded bg-[#0c0d10] border border-zinc-850 space-y-4">
                  <h4 className="text-sm font-semibold text-zinc-100">
                    Defesas Criptográficas & Integridade Matemática
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 rounded bg-[#111317] border border-zinc-800 space-y-2">
                      <div className="font-mono font-semibold text-zinc-200 flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-blue-400" />
                        Idempotência Estrita
                      </div>
                      <p className="text-zinc-400 leading-relaxed">
                        Chave <code className="text-zinc-300">Idempotency-Key</code> vinculada ao hash SHA-256 do corpo da requisição. Disparos idênticos retornam o resultado original cacheado em milissegundos; payloads conflitantes disparam <code className="text-red-400">IdempotencyConflictError</code>.
                      </p>
                    </div>

                    <div className="p-3 rounded bg-[#111317] border border-zinc-800 space-y-2">
                      <div className="font-mono font-semibold text-zinc-200 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        HMAC SHA-256 Timing-Safe
                      </div>
                      <p className="text-zinc-400 leading-relaxed">
                        Webhooks de adquirentes são verificados com segredo criptográfico via <code className="text-zinc-300">crypto.timingSafeEqual</code> nativo do Node.js, bloqueando qualquer exploração de ataques de temporização (timing attacks).
                      </p>
                    </div>

                    <div className="p-3 rounded bg-[#111317] border border-zinc-800 space-y-2">
                      <div className="font-mono font-semibold text-zinc-200 flex items-center gap-1.5">
                        <FileCheck className="w-3.5 h-3.5 text-amber-400" />
                        Integer Cents (Zero Float)
                      </div>
                      <p className="text-zinc-400 leading-relaxed">
                        Toda a contabilidade de taxas de MDR e saldos líquidos é processada estritamente em inteiros (centavos), eliminando o clássico desvio de precisão de ponto flutuante da norma IEEE 754.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Transaction Lifecycle & State Machine */}
              {activeTab === 'lifecycle' && (
                <div className="p-4 rounded bg-[#0c0d10] border border-zinc-850 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-sm font-semibold text-zinc-100">
                      Máquina de Estados Finita (Transição Imutável com Validação de Guarda)
                    </h4>
                    <span className="text-[11px] font-mono text-zinc-500">
                      Clique nos estados para inspecionar
                    </span>
                  </div>

                  {/* Flow Diagram */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    {stateMachineSteps.map((step, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveStateStep(idx)}
                        className={`p-3 rounded text-left transition-all border ${
                          activeStateStep === idx
                            ? 'bg-zinc-800/90 border-blue-500/80 ring-1 ring-blue-500/30'
                            : 'bg-[#111317] border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-400">
                            {step.timing}
                          </span>
                          <span className={`w-2 h-2 rounded-full ${
                            idx === 3 ? 'bg-emerald-500' : 'bg-blue-400'
                          }`} />
                        </div>
                        <div className="font-mono font-semibold text-xs text-zinc-100">
                          {step.state}
                        </div>
                        <div className="text-[11px] text-zinc-400 truncate mt-0.5">
                          {step.title}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Active Step Details */}
                  <div className="p-3.5 rounded bg-[#111317] border border-zinc-800 space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-zinc-200 font-semibold">
                        Estado: {stateMachineSteps[activeStateStep].state}
                      </span>
                      <span className="text-zinc-600">|</span>
                      <span className="text-zinc-400">
                        {stateMachineSteps[activeStateStep].title}
                      </span>
                    </div>
                    <p className="text-zinc-300 leading-relaxed">
                      {stateMachineSteps[activeStateStep].desc}
                    </p>
                    <div className="pt-2 border-t border-zinc-850 text-zinc-400 text-[11px]">
                      <strong className="text-zinc-300">Regra de Guarda do Domínio:</strong> {stateMachineSteps[activeStateStep].guard}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: 15 Automated Tests */}
              {activeTab === 'tests' && (
                <div className="p-4 rounded bg-[#0c0d10] border border-zinc-850 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-zinc-300 pb-2 border-b border-zinc-850">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      15 testes aprovados em 6 suítes (0 falhas)
                    </span>
                    <span className="text-zinc-500 text-[11px]">Node.js Native Test Runner (node:test)</span>
                  </div>

                  <div className="space-y-1.5 text-zinc-400 text-[11px]">
                    <div className="flex items-center justify-between py-1 px-2 rounded bg-zinc-900/60 border border-zinc-850/60">
                      <span className="text-zinc-300">1. Domain & Integer Math Validation</span>
                      <span className="text-emerald-400">4/4 pass (MDR cents & zero float drift)</span>
                    </div>
                    <div className="flex items-center justify-between py-1 px-2 rounded bg-zinc-900/60 border border-zinc-850/60">
                      <span className="text-zinc-300">2. Strict Idempotency Mechanism</span>
                      <span className="text-emerald-400">2/2 pass (Cached reply & conflict detection)</span>
                    </div>
                    <div className="flex items-center justify-between py-1 px-2 rounded bg-zinc-900/60 border border-zinc-850/60">
                      <span className="text-zinc-300">3. Transaction State Machine Strict Transitions</span>
                      <span className="text-emerald-400">3/3 pass (Guards & terminal immutability)</span>
                    </div>
                    <div className="flex items-center justify-between py-1 px-2 rounded bg-zinc-900/60 border border-zinc-850/60">
                      <span className="text-zinc-300">4. Webhook Integrity & Cryptographic HMAC SHA-256</span>
                      <span className="text-emerald-400">3/3 pass (timingSafeEqual & tamper rejection)</span>
                    </div>
                    <div className="flex items-center justify-between py-1 px-2 rounded bg-zinc-900/60 border border-zinc-850/60">
                      <span className="text-zinc-300">5. Reconciliation Engine & Discrepancy Auditing</span>
                      <span className="text-emerald-400">3/3 pass (MATCHED & DIVERGENT rate detection)</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-zinc-500 text-[11px]">
                    <span>Execução local: <code className="text-zinc-300">cd projects/fintech-payment-gateway && npm test</code></span>
                    <span>Duração: ~310ms</span>
                  </div>
                </div>
              )}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-850">
              {aegisProject.technologies.map((t, idx) => (
                <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-850 text-zinc-400">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Real-World Systems Section */}
        <section id="projetos" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-zinc-800">
            <div>
              <h2 className="text-xl font-semibold text-zinc-100 tracking-tight">
                Outros Sistemas Corporativos em Produção
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                Aplicações de alta resiliência projetadas para resolver desafios operacionais de varejo e restaurantes
              </p>
            </div>
            <span className="text-xs text-zinc-500 font-mono">
              Total: 3 módulos corporativos
            </span>
          </div>

          <div className="space-y-4">
            {otherProjects.map((project) => (
              <article 
                key={project.id}
                className="p-5 sm:p-6 rounded-lg bg-[#111317] border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-750">
                        {project.businessDomain}
                      </span>
                      <span className="text-xs text-zinc-500 font-mono">
                        Status: {project.status}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-zinc-100">
                      {project.name}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium text-zinc-300 bg-zinc-850 hover:bg-zinc-800 border border-zinc-750 transition-colors self-start"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Ver código</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                  </a>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-2.5 rounded bg-[#0c0d10] border border-zinc-850">
                      <div className="text-sm font-semibold text-zinc-200 font-mono">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-4">
                  <div className="space-y-1">
                    <span className="font-medium text-zinc-400 uppercase tracking-wide text-[10px]">
                      Contexto de Negócio
                    </span>
                    <p className="text-zinc-300 leading-relaxed">
                      {project.businessProblem}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-medium text-zinc-400 uppercase tracking-wide text-[10px]">
                      Arquitetura Técnica & Impacto
                    </span>
                    <p className="text-zinc-300 leading-relaxed">
                      {project.solutionArchitecture}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded bg-[#0c0d10] border border-zinc-850 space-y-2 mb-4">
                  <span className="font-medium text-zinc-400 uppercase tracking-wide text-[10px]">
                    Critérios de Implementação
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <span className="text-zinc-600 select-none">―</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-850">
                  {project.technologies.map((t, idx) => (
                    <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-850 text-zinc-400">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Highlighted GitHub Repositories */}
        <section id="repositorios" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-zinc-800">
            <div>
              <h2 className="text-xl font-semibold text-zinc-100 tracking-tight">
                Repositórios Públicos no GitHub
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                Seleção de projetos autorais e utilitários abertos em github.com/Gui1949
              </p>
            </div>
            <a
              href="https://github.com/Gui1949"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-zinc-400 hover:text-zinc-200 inline-flex items-center gap-1 font-mono transition-colors"
            >
              <span>Ver todos os 36 repositórios</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {featuredGithubRepos.map((repo, idx) => (
              <a
                key={idx}
                href={repo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="group p-4 rounded-lg bg-[#111317] border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-mono text-zinc-400">
                      {repo.category}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                  </div>

                  <h3 className="text-sm font-semibold text-zinc-100 font-mono group-hover:text-blue-400 transition-colors mb-2">
                    {repo.name}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                    {repo.description}
                  </p>

                  <div className="text-[11px] text-zinc-500 mb-4 italic">
                    {repo.context}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-850">
                  {repo.technologies.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-850 text-zinc-400">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section id="trajetoria" className="space-y-6">
          <div className="pb-3 border-b border-zinc-800">
            <h2 className="text-xl font-semibold text-zinc-100 tracking-tight">
              Trajetória Profissional
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              Histórico com foco em integrações corporativas, liderança técnica e confiabilidade
            </p>
          </div>

          <div className="space-y-6">
            {profileData.experiences.map((exp, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-lg bg-[#111317] border border-zinc-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-100">
                      {exp.role}
                    </h3>
                    <div className="text-xs text-zinc-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>
                  <span className="text-xs text-zinc-500 font-mono">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                  {exp.description.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <span className="text-zinc-600 select-none mt-1">―</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-850">
                  {exp.badges.map((b, bIdx) => (
                    <span key={bIdx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-850 text-zinc-400">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Competencies & Education Grid */}
        <section id="competencias" className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-zinc-800">
          {/* Skills by Category */}
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-zinc-100">
              Competências Técnicas
            </h2>
            <div className="space-y-3">
              {profileData.skills.map((group, idx) => (
                <div key={idx} className="p-3.5 rounded bg-[#111317] border border-zinc-800">
                  <span className="text-xs font-mono text-zinc-400 block mb-2">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item, sIdx) => (
                      <span key={sIdx} className="text-xs px-2 py-0.5 rounded bg-zinc-850 text-zinc-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-base font-semibold text-zinc-100">
                Formação Acadêmica
              </h2>
              <div className="space-y-2.5">
                {profileData.education.map((edu, idx) => (
                  <div key={idx} className="p-3.5 rounded bg-[#111317] border border-zinc-800">
                    <div className="text-xs font-medium text-zinc-200">
                      {edu.degree}
                    </div>
                    <div className="text-xs text-zinc-400 mt-0.5">
                      {edu.institution}
                    </div>
                    <div className="text-[11px] text-zinc-500 font-mono mt-1">
                      {edu.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-zinc-100">
                Certificações
              </h2>
              <div className="flex flex-wrap gap-2">
                {profileData.certifications.map((cert, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded bg-[#111317] border border-zinc-800 text-zinc-300">
                    {cert.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-zinc-850 bg-[#0c0d10] text-xs text-zinc-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Guilherme Santiago Floriano
          </div>
          <div className="flex items-center gap-6 font-mono">
            <a href={profileData.github} target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">
              github.com/Gui1949
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">
              linkedin
            </a>
            <a href={`mailto:${profileData.email}`} className="hover:text-zinc-300 transition-colors">
              {profileData.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
