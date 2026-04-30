import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, Users, Target, Layers, Star, TrendingUp, Compass } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_MESSAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Elo People — Gestão e Estrutura de Pessoas | Elo e-Health",
  description:
    "A Elo People organiza liderança, cultura e operação para que equipes de saúde sustentem resultado com clareza, consistência e direção.",
};

const SYSTEM = [
  { icon: Users,    title: "Liderança",     description: "Quem sustenta a direção e dá clareza à equipe." },
  { icon: Star,     title: "Cultura",       description: "Os padrões que guiam decisões e comportamentos." },
  { icon: Layers,   title: "Processos",     description: "A integração que gera performance sustentável." },
  { icon: Compass,  title: "Comportamento", description: "Como pessoas agem e reagem no contexto do trabalho." },
  { icon: TrendingUp,title:"Execução",      description: "Processos e rituais que transformam estratégia em resultado." },
  { icon: Target,   title: "Resultado",     description: "Coerência entre estratégia, pessoas e entrega." },
];

const HOW = [
  { n: "01", title: "Diagnóstico",    description: "Mapeamento de cultura, liderança, processos e performance para entender antes de agir." },
  { n: "02", title: "Estruturação",   description: "Desenho de processos, papéis, rituais e organização que dão forma à operação." },
  { n: "03", title: "Desenvolvimento",description: "Formação de líderes e evolução do comportamento organizacional para quem sustenta o resultado." },
  { n: "04", title: "Execução",       description: "Acompanhamento, gestão e sustentação da estratégia no dia a dia — sem abandonar no meio do caminho." },
];

const SOLUTIONS = [
  { group: "Diagnóstico e direção",          items: ["Diagnóstico 360° Organizacional", "Diagnóstico Cultural + Plano de Ação"] },
  { group: "Estrutura e organização",         items: ["Arquitetura de Processos", "Planejamento Estratégico (BSC)", "PMaaS — execução do planejamento"] },
  { group: "Liderança e performance",         items: ["Sprint de Performance Humana", "Programa de Desenvolvimento de Liderança", "Palestras e Treinamentos Corporativos"] },
  { group: "Aquisição e formação de talentos",items: ["Recrutamento e Seleção Estratégico", "Programa de Estágio Estruturado"] },
  { group: "Saúde, ergonomia e sustentação",  items: ["Blitz Ergonômica", "AEP — Análise Ergonômica Preliminar", "Ginástica Laboral Estruturada", "Programa Bem+ Elo"] },
  { group: "Gestão e escala",                 items: ["RH as a Service", "Universidade Corporativa — Elo Education"] },
  { group: "Transformação completa",          items: ["MED360°", "Consultoria Estratégica Completa"] },
];

export default function EloPeoplePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section
          aria-label="Elo People"
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #001E3C 0%, #002D5A 40%, #003A6B 70%, #004080 100%)" }}
        >
          <div className="absolute inset-0 opacity-[0.035] pointer-events-none" aria-hidden="true"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0070B3]/12 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-36 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Texto */}
              <div>
                <nav className="flex items-center gap-2 text-white/40 text-xs mb-6" aria-label="Breadcrumb">
                  <Link href="/" className="hover:text-white/70 transition-colors">Início</Link>
                  <span>/</span>
                  <Link href="/servicos" className="hover:text-white/70 transition-colors">Serviços</Link>
                  <span>/</span>
                  <span className="text-white/70">Elo People</span>
                </nav>

                <SectionTag dark className="mb-5">Gestão de Pessoas</SectionTag>

                <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white mb-5 font-[var(--font-plus-jakarta)]">
                  Estrutura de pessoas para quem precisa de{" "}
                  <span className="text-[#7DD3F8]">performance real</span>
                </h1>

                <p className="text-lg text-white/70 leading-relaxed mb-4 max-w-xl">
                  A Elo People organiza liderança, cultura e operação para que equipes de saúde
                  sustentem resultado com clareza, consistência e direção.
                </p>
                <p className="text-base text-white/50 leading-relaxed mb-8 max-w-xl italic">
                  Consultoria, estruturação e execução em gestão de pessoas para clínicas,
                  hospitais e empresas em crescimento.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["Liderança", "Cultura", "Performance", "Execução"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-white/70 text-xs font-medium">{tag}</span>
                  ))}
                </div>
              </div>

              {/* IMAGE PLACEHOLDER — substituir por foto real */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md rounded-2xl border-2 border-dashed border-white/20 bg-white/5 flex flex-col items-center justify-center h-80 gap-3">
                  <span className="text-white/30 text-4xl">🖼</span>
                  <p className="text-white/30 text-sm font-medium">Imagem — substituir</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* O que é */}
        <section aria-label="O que é a Elo People" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <SectionTag className="mb-4">Gestão estratégica de pessoas</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] mb-6 font-[var(--font-plus-jakarta)]">
                Uma frente estratégica dedicada à estrutura de pessoas.
              </h2>
              <p className="text-[#4A5568] leading-relaxed">
                A Elo People nasce da necessidade de ir além da gestão tradicional de RH. Não atuamos
                em partes do problema, atuamos no core que sustenta a performance das equipes.
                O foco está na coerência entre estratégia, pessoas e execução.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SYSTEM.map(({ icon: Icon, title, description }) => (
                <div key={title} className="light-card rounded-3xl p-6 flex gap-4 group hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#0070B3]/10 border border-[#0070B3]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0070B3] transition-colors duration-300">
                    <Icon size={18} className="text-[#0070B3] group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-[#003A6B] font-bold text-sm mb-1 font-[var(--font-plus-jakarta)]">{title}</h3>
                    <p className="text-[#878787] text-xs leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como atuamos */}
        <section aria-label="Como atuamos" className="py-24 bg-[#EEF5FB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <SectionTag className="mb-4">Metodologia</SectionTag>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] mb-10 font-[var(--font-plus-jakarta)]">
                  Da análise à execução.
                </h2>
                <div className="flex flex-col gap-6">
                  {HOW.map((step) => (
                    <div key={step.n} className="flex gap-5 items-start">
                      <span className="text-3xl font-bold text-[#E2EDF5] font-[var(--font-jetbrains-mono)] leading-none flex-shrink-0 w-10">{step.n}</span>
                      <div>
                        <h3 className="text-[#003A6B] font-semibold mb-1 font-[var(--font-plus-jakarta)]">{step.title}</h3>
                        <p className="text-[#878787] text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* IMAGE PLACEHOLDER — substituir por foto real */}
              <div className="rounded-2xl border-2 border-dashed border-[#0070B3]/25 bg-white flex flex-col items-center justify-center h-96 gap-3">
                <span className="text-[#0070B3]/30 text-4xl">🖼</span>
                <p className="text-[#0070B3]/40 text-sm font-medium">Imagem — substituir</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio de soluções */}
        <section aria-label="Portfolio de soluções" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <SectionTag className="mb-4">Portfólio</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] mb-4 font-[var(--font-plus-jakarta)]">
                Não listamos produtos. Organizamos linhas de solução.
              </h2>
              <p className="text-[#878787] text-lg max-w-2xl mx-auto">
                Cada linha foi desenhada para responder a um momento específico da jornada organizacional.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SOLUTIONS.map(({ group, items }) => (
                <div key={group} className="light-card rounded-3xl p-6 flex flex-col gap-3">
                  <h3 className="text-[#003A6B] font-bold text-sm font-[var(--font-plus-jakarta)] pb-2 border-b border-[#E2EDF5]">{group}</h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0070B3] mt-1.5 flex-shrink-0" />
                        <span className="text-[#4A5568] text-xs leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="Fale com um especialista" className="py-20"
          style={{ background: "linear-gradient(135deg, #004A8F 0%, #0070B3 35%, #003A6B 70%, #002D5A 100%)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[var(--font-plus-jakarta)]">
              Pronto para <span className="text-[#99C1DD]">estruturar as pessoas</span> da sua organização?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Comece pelo diagnóstico — e entenda onde sua operação pode evoluir.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href={WHATSAPP_MESSAGE} target="_blank" rel="noopener noreferrer" size="lg"
                className="bg-[#25D366] hover:bg-[#1DB954] text-white shadow-xl w-full sm:w-auto border-0">
                <MessageCircle size={18} />
                Iniciar diagnóstico
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
