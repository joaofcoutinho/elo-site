import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, CalendarCheck, FileText, DollarSign, Package, BarChart2, Cpu, Mic, Eye } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_MESSAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Elo Tech & System — PACS/RIS com IA Integrada | Elo e-Health",
  description:
    "O sistema completo para sua clínica. O Elo System conecta toda a operação em uma plataforma própria com IA integrada e acesso em tempo real.",
};

const STATS = [
  { value: "100%",  label: "Em nuvem — sem servidor local necessário" },
  { value: "PACS/RIS", label: "Sistema integrado em uma só plataforma" },
  { value: "24/7", label: "Atendimento e agendamento via IA (Elena)" },
  { value: "ISO",  label: "Suporte à acreditação ONA, PADI e 9001:2015" },
];

const MODULES = [
  {
    icon: CalendarCheck,
    title: "Agendamento",
    items: ["Agendamento via web ou central telefônica", "Confirmação automática por SMS ou e-mail", "Integração direta com o sistema de gestão"],
  },
  {
    icon: FileText,
    title: "Laudos",
    items: ["Filas personalizadas por médico", "Laudo por gravação ou reconhecimento de voz", "Entrega do resultado via web ao paciente"],
  },
  {
    icon: DollarSign,
    title: "Faturamento",
    items: ["Conciliação eletrônica automática", "Repasse médico integrado", "Controle e rastreabilidade total"],
  },
  {
    icon: Package,
    title: "Estoque e compras",
    items: ["Pedidos e ordens de compra", "Rastreabilidade de estoque em tempo real", "Customização e integrações disponíveis"],
  },
  {
    icon: BarChart2,
    title: "Gestão e qualidade",
    items: ["Controle de reuniões, atas e processos", "Avaliação e gestão de fornecedores", "Suporte à ISO 9001, ONA e PADI"],
  },
];

const AI_FEATURES = [
  {
    icon: Mic,
    title: "IA Assistente — Pré-laudo e transcrição",
    description: "Analisa imagens de TC e RM e gera pré-laudos estruturados. Também transcreve laudos narrados pelos médicos, preenchendo automaticamente os campos com vocabulário técnico.",
  },
  {
    icon: Eye,
    title: "Módulo de imagem — Imagem e laudo",
    description: "Acelerador de processamento de imagens, aperfeiçoamento visual e interpretação de voz para produção de laudos diretamente no fluxo de trabalho do radiologista.",
  },
];

const BENEFITS = [
  { title: "Decisões com base em dados reais",     description: "Dashboard com visão completa da operação: agendamentos, produção de laudos, faturamento e performance da equipe — em tempo real." },
  { title: "Menos retrabalho, mais agilidade",      description: "IA de laudo, agendamento automático e faturamento integrado eliminam etapas manuais e reduzem erros operacionais." },
  { title: "Controle financeiro sem lacunas",       description: "Conciliação eletrônica automática, repasse médico e geração de arquivo DMED garantem fechamento preciso sem planilhas paralelas." },
  { title: "Qualidade e conformidade garantidas",   description: "Suporte integrado às exigências da ISO 9001:2015, acreditação ONA e PADI — documentação, processos e auditorias organizadas na plataforma." },
];

export default function EloTechPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section
          aria-label="Elo Tech & System"
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
                <span className="text-white/70">Elo Tech & System</span>
              </nav>

              <SectionTag dark className="mb-5">Plataforma SaaS</SectionTag>

              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white mb-5 font-[var(--font-plus-jakarta)]">
                Mais que ERP ou PACS/RIS —{" "}
                <span className="text-[#7DD3F8]">o sistema completo da sua clínica</span>
              </h1>

              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
                O Elo System conecta toda a operação em uma plataforma própria, com IA integrada
                e acesso em tempo real — do agendamento ao faturamento, do laudo ao financeiro.
              </p>

              <div className="flex flex-wrap gap-3">
                {["100% em nuvem", "IA integrada (Elena)", "PACS/RIS próprio", "ISO · ONA · PADI"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-white/70 text-xs font-medium">{tag}</span>
                ))}
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
                  <p className="text-2xl font-bold text-[#7DD3F8] font-[var(--font-jetbrains-mono)] mb-1">{value}</p>
                  <p className="text-white/60 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Módulos */}
        <section aria-label="Módulos do sistema" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <SectionTag className="mb-4">Funcionalidades</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] mb-4 font-[var(--font-plus-jakarta)]">
                Elo System é operação integrada
              </h2>
              <p className="text-[#878787] text-lg max-w-2xl mx-auto">
                Funcionalidades flexíveis que cobrem do primeiro contato até a última entrega.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {MODULES.map(({ icon: Icon, title, items }) => (
                <div key={title} className="light-card rounded-3xl p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0070B3]/10 border border-[#0070B3]/15 flex items-center justify-center">
                      <Icon size={18} className="text-[#0070B3]" aria-hidden="true" />
                    </div>
                    <h3 className="text-[#003A6B] font-bold text-sm font-[var(--font-plus-jakarta)]">{title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0070B3] mt-1.5 flex-shrink-0" />
                        <span className="text-[#878787] text-xs leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IA */}
        <section aria-label="Inteligência Artificial" className="py-24 bg-[#EEF5FB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <SectionTag className="mb-4">Inteligência Artificial</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] mb-4 font-[var(--font-plus-jakarta)]">
                A IA que trabalha com a sua equipe, não no lugar dela
              </h2>
              <p className="text-[#878787] text-lg max-w-2xl mx-auto">
                Elena IA integrada ao fluxo de trabalho do radiologista.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {AI_FEATURES.map(({ icon: Icon, title, description }) => (
                <div key={title} className="bg-white rounded-3xl border border-[#E2EDF5] p-8 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#0070B3]/10 border border-[#0070B3]/15 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#0070B3]" aria-hidden="true" />
                  </div>
                  <h3 className="text-[#003A6B] font-bold mb-3 font-[var(--font-plus-jakarta)]">{title}</h3>
                  <p className="text-[#878787] text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impacto */}
        <section aria-label="Impacto na operação" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <SectionTag className="mb-4">O que você ganha</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] font-[var(--font-plus-jakarta)]">
                Impacto direto na operação e no resultado
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {BENEFITS.map(({ title, description }) => (
                <div key={title} className="light-card rounded-3xl p-8 flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#0070B3]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Cpu size={16} className="text-[#0070B3]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-[#003A6B] font-bold text-sm mb-2 font-[var(--font-plus-jakarta)]">{title}</h3>
                    <p className="text-[#878787] text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="Solicitar demonstração" className="py-20"
          style={{ background: "linear-gradient(135deg, #004A8F 0%, #0070B3 35%, #003A6B 70%, #002D5A 100%)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[var(--font-plus-jakarta)]">
              Pronto para operar com <span className="text-[#99C1DD]">tecnologia de verdade</span>?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Solicite uma demonstração do Elo System e veja como ele pode transformar a operação da sua clínica.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href={WHATSAPP_MESSAGE} target="_blank" rel="noopener noreferrer" size="lg"
                className="bg-[#25D366] hover:bg-[#1DB954] text-white shadow-xl w-full sm:w-auto border-0">
                <MessageCircle size={18} />
                Solicitar demonstração
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
