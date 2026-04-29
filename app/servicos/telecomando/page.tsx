import type { Metadata } from "next";
import Link from "next/link";
import { Monitor, ArrowRight, MessageCircle, TrendingUp, Package, BadgeCheck, Smile, Check, ArrowDown } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_MESSAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Telecomando — Operação Remota de RM e TC | Elo e-Health",
  description:
    "Técnicos radiológicos especialistas operam remotamente seus equipamentos de RM e TC com protocolos otimizados, reduzindo ociosidade e custos.",
};

const STATS = [
  { value: "<0,2%", label: "Taxa de reconvocação de pacientes" },
  { value: "24/7",  label: "Operação ininterrupta com horários ampliados" },
  { value: "Zero",  label: "Troca de equipamento necessária" },
  { value: "100%",  label: "Especialistas certificados em RM e TC" },
];


const HOW_IT_WORKS = [
  { n: "01", title: "Diagnóstico da operação", description: "A Elo e-Health analisa os equipamentos, protocolos atuais e fluxo de trabalho da sua clínica ou hospital." },
  { n: "02", title: "Configuração remota",     description: "Conectamos nossos técnicos especializados ao seu ambiente via plataforma segura, sem instalação física." },
  { n: "03", title: "Operação em tempo real",  description: "Os técnicos operam os equipamentos de RM e TC remotamente, seguindo protocolos otimizados para cada exame." },
  { n: "04", title: "Monitoramento contínuo",  description: "Acompanhamento em tempo real de qualidade, performance e taxa de reconvocação, com relatórios periódicos." },
];

export default function TelecomandoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section
          aria-label="Telecomando"
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
                  <span className="text-white/70">Telecomando</span>
                </nav>

                <SectionTag dark className="mb-5">Serviço</SectionTag>

                <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white mb-5 font-[var(--font-plus-jakarta)]">
                  Seus equipamentos de{" "}
                  <span className="text-[#7DD3F8]">RM e TC operando com máxima eficiência</span>{" "}
                  — de onde for
                </h1>

                <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
                  Técnicos radiológicos especialistas operam remotamente os exames seguindo
                  rigorosamente protocolos otimizados para garantir o melhor resultado para
                  a sua clínica ou hospital.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["Operação 24/7", "Sem troca de equipamento", "Reconvocação < 0,2%", "Protocolos otimizados"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-white/70 text-xs font-medium">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Card — Operação em tempo real */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 flex flex-col gap-5">

                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-white font-[var(--font-plus-jakarta)]">Operação em tempo real</p>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Ativo
                    </span>
                  </div>

                  {/* Equipamentos */}
                  <div className="space-y-3">
                    {[
                      { label: "RM 1,5T",       location: "Sala A — São Paulo" },
                      { label: "TC 64 canais",   location: "Sala B — Rio de Janeiro" },
                    ].map(({ label, location }) => (
                      <div key={label} className="flex items-center justify-between rounded-xl bg-white/5 border border-white/8 px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Monitor size={14} className="text-[#7DD3F8]" />
                          <span className="text-sm font-medium text-white">{label}</span>
                        </div>
                        <span className="text-xs text-white/50">{location}</span>
                      </div>
                    ))}
                  </div>

                  {/* Centro de telecomando */}
                  <div className="rounded-xl px-5 py-4 flex flex-col gap-1" style={{ background: "linear-gradient(90deg, #0070B3 0%, #004A8F 100%)" }}>
                    <p className="text-white/60 text-xs">Centro de telecomando Elo</p>
                    <p className="text-white text-sm font-semibold font-[var(--font-plus-jakarta)]">Técnicos especialistas — operação contínua</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/5 border border-white/8 p-4 text-center">
                      <p className="text-white font-bold text-xl font-[var(--font-jetbrains-mono)] mb-1">&lt;0,2%</p>
                      <p className="text-white/40 text-xs">Reconvocação</p>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/8 p-4 text-center">
                      <p className="text-white font-bold text-xl font-[var(--font-jetbrains-mono)] mb-1">+40%</p>
                      <p className="text-white/40 text-xs">Capacidade de exames</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Stats */}
        <div className="bg-[#002D5A] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {STATS.map(({ value, label }) => (
                <div key={label} className="py-6 px-8 text-center">
                  <p className="text-3xl font-bold text-[#7DD3F8] font-[var(--font-jetbrains-mono)] mb-1">{value}</p>
                  <p className="text-white/60 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* O que você ganha */}
        <section aria-label="O que você ganha" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <SectionTag className="mb-4">O que você ganha</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] font-[var(--font-plus-jakarta)]">
                Benefícios diretos para a sua operação
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: TrendingUp,
                  color: "text-green-600",
                  bg: "bg-green-50 border-green-100",
                  title: "Mais exames, mais receita",
                  description: "Horários flexíveis e operação sem depender de equipe local aumentam o volume de exames realizados.",
                  items: [
                    "Funcionamento em horários ampliados",
                    "Redução de filas e tempo de espera",
                    "Aumento da capacidade sem expansão física",
                  ],
                },
                {
                  icon: Package,
                  color: "text-[#0070B3]",
                  bg: "bg-[#EEF5FB] border-[#D0E8F5]",
                  title: "Redução de custos operacionais",
                  description: "Sem custos de contratação, infraestrutura de TI local ou ociosidade de equipamentos caros.",
                  items: [
                    "Eliminação de custo de ociosidade de máquina",
                    "Redução de infraestrutura de informática local",
                    "Sem custo de treinamento contínuo da equipe",
                  ],
                },
                {
                  icon: BadgeCheck,
                  color: "text-[#0070B3]",
                  bg: "bg-[#EEF5FB] border-[#D0E8F5]",
                  title: "Qualidade e acurácia garantidas",
                  description: "Técnicos especializados e protocolos revisados continuamente asseguram exames precisos desde o primeiro dia.",
                  items: [
                    "Taxa de reconvocação menor que 0,2%",
                    "Revisão periódica de protocolos de exame",
                    "Análise de obsolescência de equipamentos",
                  ],
                },
                {
                  icon: Smile,
                  color: "text-orange-500",
                  bg: "bg-orange-50 border-orange-100",
                  title: "Satisfação do paciente",
                  description: "Menos reconvocações, exames mais rápidos e agendamentos mais ágeis elevam a experiência do paciente.",
                  items: [
                    "Paciente posicionado e atendido corretamente",
                    "Maior recomendação orgânica da clínica",
                    "Fortalecimento da reputação institucional",
                  ],
                },
              ].map(({ icon: Icon, color, bg, title, description, items }) => (
                <div key={title} className="light-card rounded-2xl p-7 flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${bg}`}>
                      <Icon size={18} className={color} />
                    </div>
                    <div>
                      <h3 className="text-[#003A6B] font-bold text-base mb-1 font-[var(--font-plus-jakarta)]">{title}</h3>
                      <p className="text-[#878787] text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 pl-1">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-[#4A5568] text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <div className="w-8 h-8 rounded-full border border-[#E2EDF5] flex items-center justify-center">
                <ArrowDown size={14} className="text-[#878787]" />
              </div>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section aria-label="Como funciona" className="py-24 bg-[#EEF5FB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <SectionTag className="mb-4">Processo</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] font-[var(--font-plus-jakarta)]">Como funciona</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HOW_IT_WORKS.map((step) => (
                <div key={step.n} className="light-card rounded-3xl p-6 flex flex-col gap-4">
                  <span className="text-3xl font-bold text-[#E2EDF5] font-[var(--font-jetbrains-mono)]">{step.n}</span>
                  <h3 className="text-[#003A6B] font-semibold font-[var(--font-plus-jakarta)]">{step.title}</h3>
                  <p className="text-[#878787] text-sm leading-relaxed">{step.description}</p>
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
              Pronto para operar com <span className="text-[#99C1DD]">máxima eficiência</span>?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Fale com um especialista e descubra como o telecomando pode transformar a operação dos seus equipamentos.
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
