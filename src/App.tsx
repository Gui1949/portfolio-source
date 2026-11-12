import React from 'react';
import { 
  Terminal, 
  Layers, 
  Sparkles, 
  Mail, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Code2, 
  ShieldCheck, 
  Bot,
  Building2,
  FolderGit2
} from 'lucide-react';
import { profileData } from './data/profile';
import { realWorldProjects } from './data/learnings';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Banner */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-lg text-indigo-400">
                GF
              </div>
            </div>
            <div>
              <span className="font-bold text-slate-100 tracking-tight text-lg">Guilherme Floriano</span>
              <span className="hidden sm:inline-block ml-2 text-xs px-2 py-0.5 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-800/50 font-medium">
                Tech Lead & Senior Dev
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#sobre" className="hover:text-indigo-400 transition-colors">Sobre</a>
            <a href="#metricas" className="hover:text-indigo-400 transition-colors">Resultados</a>
            <a href="#projetos-reais" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1.5 transition-colors">
              <Sparkles className="w-4 h-4" /> Produtos Reais
            </a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Stack</a>
            <a href="#experiencia" className="hover:text-indigo-400 transition-colors">Carreira</a>
            <a href="#agentes" className="hover:text-indigo-400 transition-colors">Agentes Maestri</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-md shadow-indigo-600/30"
            >
              <Mail className="w-4 h-4" /> Contato
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="sobre" className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.25),rgba(255,255,255,0))] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-semibold text-cyan-300 mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              Desenvolvimento Contínuo de Produtos Reais para Empresas
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Sistemas Corporativos, <br />
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
                Produtos Reais & Integrações
              </span> de Alto Impacto.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              {profileData.bio}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-8">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-400" /> {profileData.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-cyan-400" /> Soluções para Lojas, Restaurantes & Varejo
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Resiliência com RabbitMQ & Datadog
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projetos-reais"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold flex items-center gap-2 shadow-lg shadow-indigo-500/25 transition-all"
              >
                <Sparkles className="w-5 h-5" /> Ver Produtos de Mercado
              </a>
              <a
                href="#experiencia"
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold border border-slate-800 flex items-center gap-2 transition-all"
              >
                <Layers className="w-5 h-5 text-slate-400" /> Trajetória Profissional
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Counter Section */}
      <section id="metricas" className="py-12 bg-slate-900/60 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {profileData.stats.map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-indigo-500/40 transition-colors">
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-200 mb-1">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Business Projects Hub */}
      <section id="projetos-reais" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-xs font-semibold text-cyan-300 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Software Enterprise Aplicado
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Módulos & Produtos Reais de Negócio
              </h2>
              <p className="text-slate-400 mt-2 max-w-2xl text-sm sm:text-base">
                Projetos práticos desenvolvidos para resolver dores operacionais e comerciais reais (redes de varejo, restaurantes, ERPs e e-commerce).
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-semibold text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              {realWorldProjects.length} Produto(s) em Produção / Portfólio
            </div>
          </div>

          <div className="space-y-8">
            {realWorldProjects.map((item) => (
              <div 
                key={item.id}
                className="group relative rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/50 p-6 sm:p-8 transition-all duration-300 shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2 rounded-xl bg-slate-800/80 border border-slate-700">
                      {item.segmentIcon}
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                        {item.businessDomain}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-800/40">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Pronto para Produção
                    </span>
                  </div>
                </div>

                {/* Business problem vs technical solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
                      ⚠️ O Desafio de Negócio
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.businessProblem}
                    </p>
                  </div>

                  <div className="bg-cyan-950/20 border border-cyan-900/30 rounded-xl p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                      💡 A Arquitetura Implementada
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.solutionArchitecture}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-950/90 rounded-xl p-5 border border-slate-800/80 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Destaques de Engenharia & Funcionalidades
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <span className="text-cyan-400 font-bold">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-800/60">
                  <div className="flex flex-wrap items-center gap-2">
                    {item.technologies.map((tech, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <FolderGit2 className="w-4 h-4 text-slate-500" />
                    <span className="text-xs text-slate-400 font-mono">
                      Pasta: <code className="text-cyan-300">{item.projectPath}</code>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autonomous Maestri Agents Workflow Section */}
      <section id="agentes" className="py-16 bg-slate-900/50 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/50 text-xs font-semibold text-indigo-300 mb-3">
              <Bot className="w-3.5 h-3.5 text-indigo-400" /> Maestri Spatial Architecture
            </div>
            <h2 className="text-3xl font-extrabold text-white">
              Equipe Autônoma de Engenharia no Maestri Canvas
            </h2>
            <p className="text-slate-400 mt-2 text-sm">
              Criados e conectados na tela do Maestri com foco exclusivo em conceber e codificar produtos de software reais.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-amber-500/30 hover:border-amber-400/60 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4 font-bold text-xl">
                💡
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">Farol</div>
              <h3 className="font-bold text-white text-base mb-2">Curator de Produtos</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mapeia dores de negócios reais (varejo, food service, fintechs) e define a arquitetura dos produtos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-orange-500/30 hover:border-orange-400/60 transition-all">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4 font-bold text-xl">
                🔨
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-1">Forja</div>
              <h3 className="font-bold text-white text-base mb-2">Engenheiro de Código</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Implementa os produtos reais com Clean Architecture, regras de negócio ricas, persistência e testes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-blue-500/30 hover:border-blue-400/60 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 font-bold text-xl">
                🌐
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">Hermes</div>
              <h3 className="font-bold text-white text-base mb-2">DevOps & GitHub</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Versionamento profissional, commits semânticos e publicação no GitHub (@Gui1949).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-purple-500/30 hover:border-purple-400/60 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 font-bold text-xl">
                ✨
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-1">Prisma</div>
              <h3 className="font-bold text-white text-base mb-2">Curador de Portfólio</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Apresenta os sistemas com foco em valor de negócio e resultados operacionais nesta aplicação web.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Competencies */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Competências & Tecnologias
            </h2>
            <p className="text-slate-400 mt-3 text-base">
              Ecossistema dominado ao longo de 8+ anos de liderança técnica e entrega em ambientes corporativos de alto impacto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileData.skills.map((skillGroup, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors">
                <h3 className="font-bold text-indigo-400 text-lg mb-4 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-indigo-400" />
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs font-medium border border-slate-800 hover:border-indigo-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section id="experiencia" className="py-20 bg-slate-900/40 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Trajetória Profissional
            </h2>
            <p className="text-slate-400 mt-3 text-base">
              Histórico com foco em transformação digital, liderança técnica e eliminação de processos manuais.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-10">
            {profileData.experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10 border-l-2 border-indigo-600/40">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950" />
                
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-xs font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-indigo-400 font-semibold text-sm mb-4">
                    {exp.company}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, dIdx) => (
                      <li key={dIdx} className="text-sm text-slate-300 flex items-start gap-2.5">
                        <span className="text-indigo-400 mt-1">▪</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                    {exp.badges.map((badge, bIdx) => (
                      <span key={bIdx} className="text-xs px-2.5 py-1 rounded-md bg-slate-950 text-slate-400 border border-slate-800">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Academic */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-indigo-400" /> Formação Acadêmica
              </h2>
              <div className="space-y-4">
                {profileData.education.map((edu, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h3 className="font-bold text-white text-base">{edu.degree}</h3>
                    <div className="text-indigo-400 text-sm">{edu.institution}</div>
                    <div className="text-xs text-slate-500 mt-1">{edu.period}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-cyan-400" /> Certificações & Especializações
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profileData.certifications.map((cert, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <div className="font-semibold text-slate-200 text-sm">{cert.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-10 bg-slate-950 border-t border-slate-800/80 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Guilherme Santiago Floriano. Portfólio de Produtos de Software & Engenharia.
          </div>
          <div className="flex items-center gap-4">
            <a href={profileData.github} target="_blank" rel="noreferrer" className="hover:text-slate-300">GitHub: @Gui1949</a>
            <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-300">LinkedIn</a>
            <a href={`mailto:${profileData.email}`} className="hover:text-slate-300">{profileData.email}</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
