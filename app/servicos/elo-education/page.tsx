import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, BookOpen, Users, Target, Lightbulb, Award, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_MESSAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Elo Education — Formação para Profissionais de Saúde | Elo e-Health",
  description:
    "A Elo Education desenvolve profissionais da saúde para atuar com clareza estratégica, liderança e protagonismo no mercado. Formação prática, aplicada e conectada à realidade do setor.",
};

const APPROACH = [
  { icon: BookOpen,   title: "Base prática",          description: "Conteúdo conectado à realidade do setor de saúde." },
  { icon: Users,      title: "Profissionais de mercado",description: "Quem ensina, executa." },
  { icon: Target,     title: "Visão estratégica",      description: "Desenvolvimento além da técnica." },
  { icon: Lightbulb,  title: "Aplicação contínua",     description: "Aprendizado que se traduz em ação." },
];

const HOW = [
  "Trilhas de conhecimento (vídeos, artigos, e-books)",
  "Aulas e palestras com profissionais atuantes",
  "Estudos de caso clínicos e operacionais",
  "Exercícios e avaliações práticas",
  "Preceptoria e mentoria",
  "Ferramentas colaborativas e interativas",
  "Acompanhamento da evolução do aluno",
  "Modalidade online e presencial",
];

const FOR_WHO = [
  "Médicos que buscam ampliar sua visão de negócio",
  "Enfermeiros e técnicos que desejam evoluir na carreira",
  "Gestores e equipes administrativas",
  "Profissionais da saúde que querem crescer com direção",
];

const ELOS = [
  { label: "Mentalidade e expansão de visão" },
  { label: "Conexão e influência" },
  { label: "Liderança e estrutura" },
  { label: "Comunicação e posicionamento" },
  { label: "Notoriedade e crescimento" },
];

const FORMATS = [
  "Cursos online (EAD)",
  "Programas estruturados",
  "Workshops e treinamentos",
  "Imersões presenciais",
  "Conteúdos contínuos",
];

const DIFERENTIAL = [
  "Mentalidade estratégica",
  "Liderança consciente",
  "Comunicação de alto nível",
  "Posicionamento profissional",
];

export default function EloEducationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section
          aria-label="Elo Education"
          className="relative min-h-[60vh] flex items-end overflow-hidden"
          style={{ background: "linear-gradient(160deg, #001E3C 0%, #002D5A 40%, #003A6B 70%, #004080 100%)" }}
        >
          <div className="absolute inset-0 opacity-[0.035] pointer-events-none" aria-hidden="true"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0070B3]/12 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-36 pb-20">
            <div className="max-w-3xl">
              <nav className="flex items-center gap-2 text-white/40 text-xs mb-6" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-white/70 transition-colors">Início</Link>
                <span>/</span>
                <Link href="/servicos" className="hover:text-white/70 transition-colors">Serviços</Link>
                <span>/</span>
                <span className="text-white/70">Elo Education</span>
              </nav>

              <SectionTag dark className="mb-5">Formação Profissional</SectionTag>

              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white mb-5 font-[var(--font-plus-jakarta)]">
                Excelência técnica não sustenta crescimento.{" "}
                <span className="text-[#7DD3F8]">Estrutura, visão e posicionamento sustentam.</span>
              </h1>

              <p className="text-lg text-white/70 leading-relaxed mb-4 max-w-2xl">
                A Elo Education desenvolve profissionais da saúde para atuar com clareza
                estratégica, liderança e protagonismo no mercado.
              </p>
              <p className="text-sm text-white/50 italic mb-8 max-w-xl">
                Formação prática, aplicada e conectada à realidade do setor.
              </p>

              <div className="bg-[#FFEB3B]/10 border border-[#FFEB3B]/20 rounded-2xl px-5 py-3 inline-block">
                <p className="text-[#FFEB3B] text-xs font-semibold uppercase tracking-widest">Em construção — em breve com novas turmas</p>
              </div>
            </div>
          </div>
        </section>

        {/* O que é */}
        <section aria-label="O que é a Elo Education" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <SectionTag className="mb-5">Educação aplicada à saúde</SectionTag>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] mb-6 font-[var(--font-plus-jakarta)]">
                  Educação aplicada à realidade da saúde.
                </h2>
                <p className="text-[#4A5568] leading-relaxed mb-4">
                  A Elo Education nasce para responder a um gap claro do mercado: profissionais
                  altamente capacitados tecnicamente, mas sem estrutura para sustentar crescimento,
                  liderança e posicionamento.
                </p>
                <p className="text-[#4A5568] leading-relaxed mb-4">
                  Mais do que ensinar, a Elo Education desenvolve a capacidade de pensar
                  estrategicamente, tomar decisões com clareza, estruturar carreira e operação,
                  e sustentar evolução no longo prazo.
                </p>
                <p className="text-[#003A6B] font-semibold">
                  Não é sobre acumular conhecimento. É sobre transformar conhecimento em resultado.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {APPROACH.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="light-card rounded-3xl p-5 flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0070B3]/10 border border-[#0070B3]/15 flex items-center justify-center">
                      <Icon size={18} className="text-[#0070B3]" aria-hidden="true" />
                    </div>
                    <h3 className="text-[#003A6B] font-bold text-sm font-[var(--font-plus-jakarta)]">{title}</h3>
                    <p className="text-[#878787] text-xs leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Como desenvolvemos */}
        <section aria-label="Como desenvolvemos" className="py-24 bg-[#EEF5FB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div>
                <SectionTag className="mb-5">Ecossistema de aprendizagem</SectionTag>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] mb-6 font-[var(--font-plus-jakarta)]">
                  Um ecossistema de aprendizagem contínua.
                </h2>
                <ul className="space-y-3">
                  {HOW.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#0070B3] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-[#4A5568] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[#003A6B] font-bold text-lg mb-6 font-[var(--font-plus-jakarta)]">Para quem é</h3>
                <p className="text-[#0070B3] text-sm font-medium mb-4">
                  Para profissionais que não querem mais operar no automático.
                </p>
                <ul className="space-y-3 mb-10">
                  {FOR_WHO.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0070B3] mt-2 flex-shrink-0" />
                      <span className="text-[#4A5568] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-[#003A6B] font-bold text-lg mb-4 font-[var(--font-plus-jakarta)]">Formatos de aprendizagem</h3>
                <div className="flex flex-wrap gap-2">
                  {FORMATS.map((f) => (
                    <span key={f} className="px-3 py-1.5 rounded-full bg-[#0070B3]/10 border border-[#0070B3]/20 text-[#0070B3] text-xs font-medium">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diferencial */}
        <section aria-label="Diferencial Elo Education" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <SectionTag className="mb-5">Diferencial</SectionTag>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] mb-4 font-[var(--font-plus-jakarta)]">
                  Não formamos alunos. Desenvolvemos protagonistas.
                </h2>
                <p className="text-[#4A5568] leading-relaxed mb-4">
                  A maioria das formações foca em conteúdo. A Elo Education foca em transformação.
                </p>
                <p className="text-[#4A5568] leading-relaxed mb-6">
                  Porque o desafio do profissional da saúde não é aprender mais. É estruturar melhor.
                </p>
                <p className="text-[#003A6B] font-semibold mb-6">Nossa proposta é desenvolver:</p>
                <ul className="space-y-3">
                  {DIFERENTIAL.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Award size={16} className="text-[#0070B3] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-[#4A5568] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#003A6B] rounded-3xl p-8">
                <p className="text-[#99C1DD] text-xs font-bold uppercase tracking-widest mb-6">Conexão com o Método Elo</p>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  Uma jornada estruturada de evolução. Cada etapa amplia a capacidade do profissional
                  de transformar intenção em impacto real.
                </p>
                <div className="space-y-3">
                  {ELOS.map(({ label }, i) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#0070B3] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{i + 1}</span>
                      <span className="text-white/80 text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="Conheça os programas" className="py-20"
          style={{ background: "linear-gradient(135deg, #004A8F 0%, #0070B3 35%, #003A6B 70%, #002D5A 100%)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[var(--font-plus-jakarta)]">
              Pronto para <span className="text-[#99C1DD]">crescer com direção</span>?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Fale com um especialista e conheça os programas da Elo Education.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href={WHATSAPP_MESSAGE} target="_blank" rel="noopener noreferrer" size="lg"
                className="bg-[#25D366] hover:bg-[#1DB954] text-white shadow-xl w-full sm:w-auto border-0">
                <MessageCircle size={18} />
                Falar com especialista
              </Button>
              <Button href="/servicos" variant="outline-dark" size="lg" className="w-full sm:w-auto">
                Ver outros serviços
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
