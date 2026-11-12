import React from 'react';
import { 
  ArrowUpRight, 
  Mail, 
  MapPin
} from 'lucide-react';
import { profileData } from './data/profile';
import { realWorldProjects, featuredGithubRepos } from './data/learnings';

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
            <a href="#projetos" className="hover:text-zinc-200 transition-colors">Sistemas</a>
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
            Disponível para liderança técnica e arquitetura de software
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
            <span>Integrações Corporativas</span>
            <span>•</span>
            <span>Mensageria & Resiliência</span>
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

        {/* Real-World Systems Section */}
        <section id="projetos" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-zinc-800">
            <div>
              <h2 className="text-xl font-semibold text-zinc-100 tracking-tight">
                Sistemas Corporativos em Produção
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                Aplicações desenvolvidas para resolver desafios reais de conciliação, estoque e mensageria
              </p>
            </div>
            <span className="text-xs text-zinc-500 font-mono">
              3 módulos disponíveis
            </span>
          </div>

          <div className="space-y-4">
            {realWorldProjects.map((project) => (
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
                      Arquitetura Técnica
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
