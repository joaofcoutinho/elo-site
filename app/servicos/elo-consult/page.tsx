import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageCircle, BarChart2, Layers, Settings, TrendingUp, Award } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_MESSAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Elo Consult — Consultoria em Saúde Diagnóstica | Elo e-Health",
  description:
    "A Elo Consult atua dentro da sua operação conectando dados, processos e estratégia para identificar soluções e transformar seus resultados.",
};

const PILLARS = [
  {
    icon: Layers,
    title: "Estrutura",
    description: "Mapeamento e redesenho de processos com foco em eficiência e qualidade.",
  },
  {
    icon: BarChart2,
    title: "Dados",
    description: "Análise e organização de indicadores para apoiar decisões mais seguras.",
  },
  {
    icon: Settings,
    title: "Operação",
    description: "Construção de rotinas sustentáveis, adaptadas à realidade da equipe.",
  },
  {
    icon: TrendingUp,
    title: "Resultado",
    description: "Redução de desperdícios, ganho de eficiência e melhora na performance financeira.",
  },
];

const HOW = [
  { n: "01", title: "Imersão", description: "Mergulhamos na rotina, entendemos fluxos e identificamos gargalos com base em dados e prática real." },
  { n: "02", title: "Diagnóstico", description: "Mapeamos processos, cultura e performance para entender antes de agir com precisão." },
  { n: "03", title: "Estruturação", description: "Desenvolvemos um modelo personalizado que funcione no dia a dia da sua operação." },
  { n: "04", title: "Acompanhamento", description: "Monitoramos indicadores e ajustamos estratégias para garantir resultados sustentáveis." },
];

const CERTS = ["ISO 9001", "PADI", "ONA"];

export default function EloConsultPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section
          aria-label="Elo Consult"
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
                <span className="text-white/70">Elo Consult</span>
              </nav>

              <SectionTag dark className="mb-5">Consultoria</SectionTag>

              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white mb-5 font-[var(--font-plus-jakarta)]">
                A consultoria que atua{" "}
                <span className="text-[#7DD3F8]">dentro da sua operação</span>
              </h1>

              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
                A Elo Consult conecta dados, processos e estratégia para identificar soluções
                e transformar os resultados do seu serviço de saúde.
              </p>

              <div className="flex flex-wrap gap-3">
                {["De dentro para fora", "Baseado em dados", "Personalizado", "Resultados mensuráveis"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-white/70 text-xs font-medium">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section aria-label="Como a Elo Consult funciona" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div>
                <SectionTag className="mb-5">Metodologia</SectionTag>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] mb-6 font-[var(--font-plus-jakarta)]">
                  Como a Elo Consult funciona
                </h2>
                <p className="text-[#4A5568] leading-relaxed mb-4">
                  A consultoria Elo e-Health atua de dentro para fora.
                </p>
                <p className="text-[#4A5568] leading-relaxed mb-4">
                  Mergulhamos na rotina, entendemos fluxos, identificamos gargalos e organizamos
                  a operação com base em dados e prática real.
                </p>
                <p className="text-[#4A5568] leading-relaxed">
                  Desenvolvemos um modelo que funcione no dia a dia de forma personalizada para
                  otimizar de forma estratégica e sistêmica a sua operação.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {HOW.map((step) => (
                  <div key={step.n} className="light-card rounded-3xl p-6 flex flex-col gap-3">
                    <span className="text-2xl font-bold text-[#E2EDF5] font-[var(--font-jetbrains-mono)]">{step.n}</span>
                    <h3 className="text-[#003A6B] font-semibold text-sm font-[var(--font-plus-jakarta)]">{step.title}</h3>
                    <p className="text-[#878787] text-xs leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pilares */}
        <section aria-label="Pilares da consultoria" className="py-24 bg-[#EEF5FB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <SectionTag className="mb-4">Pilares</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] font-[var(--font-plus-jakarta)]">
                Pilares da consultoria
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PILLARS.map(({ icon: Icon, title, description }) => (
                <div key={title} className="bg-white rounded-3xl border border-[#E2EDF5] p-8 flex flex-col gap-4 shadow-sm group hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#0070B3]/10 border border-[#0070B3]/15 flex items-center justify-center group-hover:bg-[#0070B3] transition-colors duration-300">
                    <Icon size={22} className="text-[#0070B3] group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <h3 className="text-[#003A6B] font-bold font-[var(--font-plus-jakarta)]">{title}</h3>
                  <p className="text-[#878787] text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificações */}
        <section aria-label="Certificações e qualidade" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <SectionTag className="mb-4">Certificações</SectionTag>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#003A6B] mb-4 font-[var(--font-plus-jakarta)]">
                Certificações e qualidade
              </h2>
              <p className="text-[#4A5568] text-base leading-relaxed mb-10">
                A Elo e-Health também atua em projetos de implantação e adequação para
                certificações relevantes do setor, com foco em operadores de saúde que
                buscam elevar seu padrão de qualidade e governança.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {CERTS.map((cert) => (
                  <div key={cert} className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#EEF5FB] border border-[#0070B3]/20">
                    <Award size={18} className="text-[#0070B3]" aria-hidden="true" />
                    <span className="text-[#003A6B] font-bold text-sm font-[var(--font-plus-jakarta)]">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="Fale com um especialista" className="py-20"
          style={{ background: "linear-gradient(135deg, #004A8F 0%, #0070B3 35%, #003A6B 70%, #002D5A 100%)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[var(--font-plus-jakarta)]">
              Quer entender como <span className="text-[#99C1DD]">estruturar melhor a sua operação</span>?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Fale com um especialista da Elo e-Health e descubra como a consultoria pode transformar seus resultados.
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
