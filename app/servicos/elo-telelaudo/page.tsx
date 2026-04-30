import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock, CheckCircle2, ArrowRight, FileText, Activity,
  Zap, Shield, Wifi, ChevronDown, MessageCircle,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_MESSAGE } from "@/lib/constants";
import { TelelaudoFaq } from "./TelelaudoFaq";

export const metadata: Metadata = {
  title: "Elo Telelaudo — Laudos de Radiologia 24/7 | Elo e-Health",
  description:
    "Conheça o Elo Telelaudo: laudos de RM, TC, Raio-X, Mamografia e Densitometria com prazos rigorosos, assinatura digital e 100% compatível com protocolo DICOM.",
};

/* ── Data ── */
const EXAMS = [
  {
    code: "RM",
    name: "Ressonância Magnética",
    description: "Alta precisão para tecidos moles, sistema nervoso central e musculoesquelético.",
    icon: Activity,
  },
  {
    code: "TC",
    name: "Tomografia Computadorizada",
    description: "Diagnóstico rápido para emergências, trauma e patologias complexas.",
    icon: Zap,
  },
  {
    code: "RX",
    name: "Raio-X",
    description: "Cobertura completa, incluindo laudos OIT para medicina do trabalho.",
    icon: FileText,
  },
  {
    code: "MG",
    name: "Mamografia",
    description: "Rastreamento e diagnóstico oncológico com alta sensibilidade de detecção.",
    icon: Shield,
  },
  {
    code: "DO",
    name: "Densitometria Óssea",
    description: "Diagnostica osteopenia e osteoporose com precisão para prevenção e acompanhamento.",
    icon: CheckCircle2,
  },
];

const SLA_ROWS = [
  { classification: "Emergência",   rm: "30 min",  tc: "30 min",  rx: "30 min",  mg: "—"       },
  { classification: "Urgência",     rm: "2 horas", tc: "2 horas", rx: "2 horas", mg: "—"       },
  { classification: "Internado",    rm: "6 horas", tc: "6 horas", rx: "6 horas", mg: "—"       },
  { classification: "Eletivo Geral",rm: "24 horas",tc: "24 horas",rx: "24 horas",mg: "24 horas"},
];

const STEPS = [
  {
    n: "01",
    title: "Realização do exame",
    description:
      "A equipe da clínica ou hospital realiza o exame radiológico normalmente, 24 horas por dia, 7 dias por semana.",
    badge: "24h · 7 dias",
  },
  {
    n: "02",
    title: "Envio pelo sistema",
    description:
      "A instituição submete as imagens via plataforma PACS WEB com protocolo DICOM — sem equipamentos adicionais ou instalações físicas.",
    badge: "Protocolo DICOM",
  },
  {
    n: "03",
    title: "Emissão do laudo",
    description:
      "A Elo e-Health emite o laudo dentro do SLA definido pela urgência, por radiologistas subespecializados em cada modalidade.",
    badge: "SLA garantido",
  },
  {
    n: "04",
    title: "Disponibilização",
    description:
      "O laudo é disponibilizado no sistema com assinatura digital, em conformidade com a LGPD e com validade jurídica plena.",
    badge: "LGPD · Assinatura digital",
  },
];

const PROBLEMS = [
  "Custos fixos altos com laudistas presenciais",
  "Aparelhos parados por falta de cobertura médica",
  "Dependência de agenda de médicos",
  "Falta de profissionais disponíveis em horários de pico",
  "Limitação de espaço físico para expansão",
  "Processos lentos que atrasam o atendimento ao paciente",
];

const HIGHLIGHTS = [
  { icon: Wifi,        label: "Compatível com qualquer aparelho", sub: "Via protocolo DICOM" },
  { icon: ArrowRight,  label: "Operação 100% remota",             sub: "Sem instalações adicionais" },
  { icon: Clock,       label: "Especialistas dedicados",          sub: "24h por dia, 7 dias por semana" },
];

/* ── Page ── */
export default function EloTelelaudoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ── */}
        <section
          aria-label="Elo Telelaudo"
          className="relative min-h-[60vh] flex items-end overflow-hidden pb-0"
          style={{ background: "linear-gradient(160deg, #001E3C 0%, #002D5A 40%, #003A6B 70%, #004080 100%)" }}
        >
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0070B3]/12 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-36 pb-20">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-white/40 text-xs mb-6" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-white/70 transition-colors">Início</Link>
                <span>/</span>
                <Link href="/servicos" className="hover:text-white/70 transition-colors">Serviços</Link>
                <span>/</span>
                <span className="text-white/70">Elo Telelaudo</span>
              </nav>

              <SectionTag dark className="mb-5">Serviço</SectionTag>

              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white mb-5 font-[var(--font-plus-jakarta)]">
                Elo Telelaudo —{" "}
                <span className="text-[#7DD3F8]">Laudos de Radiologia 24/7</span>
              </h1>

              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
                Laudos médicos de RM, TC, Raio-X, Mamografia e Densitometria emitidos por
                radiologistas subespecializados, com prazos rigorosos e assinatura digital —
                disponíveis a qualquer hora, de qualquer lugar.
              </p>

              <div className="flex flex-wrap gap-3">
                {["24h Disponível", "100% Remoto", "Assinatura Digital", "LGPD Compliant"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-white text-[#003A6B] text-xs font-semibold shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Highlights bar ── */}
        <div className="bg-[#002D5A] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {HIGHLIGHTS.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-4 py-5 px-4 sm:px-8">
                  <div className="w-10 h-10 rounded-2xl bg-[#0070B3]/20 border border-[#0070B3]/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#7DD3F8]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold font-[var(--font-plus-jakarta)]">{label}</p>
                    <p className="text-white/50 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Exames laudados ── */}
        <section aria-label="Exames laudados" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <SectionTag className="mb-4">Modalidades</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] mb-4 font-[var(--font-plus-jakarta)]">
                Exames que Laudamos
              </h2>
              <p className="text-[#878787] text-lg max-w-2xl mx-auto">
                Prazos rigorosamente cumpridos para cada nível de urgência, com especialistas
                dedicados a cada modalidade.
              </p>
            </div>

            {/* Exam cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
              {EXAMS.map(({ code, name, description, icon: Icon }) => (
                <div key={code} className="light-card rounded-3xl p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0070B3]/10 border border-[#0070B3]/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-[#0070B3]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-[#0070B3] font-[var(--font-jetbrains-mono)]">{code}</span>
                      <h3 className="text-[#003A6B] font-semibold text-sm font-[var(--font-plus-jakarta)]">{name}</h3>
                    </div>
                    <p className="text-[#878787] text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}

              {/* CTA card — 6º slot do grid */}
              <div className="rounded-3xl p-6 flex flex-col gap-4 justify-center"
                style={{ background: "linear-gradient(135deg, #003A6B 0%, #0070B3 100%)" }}>
                <p className="text-white text-sm font-semibold font-[var(--font-plus-jakarta)]">
                  Pronto para laudos 24/7 na sua clínica?
                </p>
                <Button href={WHATSAPP_MESSAGE} target="_blank" rel="noopener noreferrer" size="sm"
                  className="bg-white text-[#003A6B] hover:bg-white/90 border-0 shadow-md w-fit">
                  <MessageCircle size={14} />
                  Falar com especialista
                </Button>
              </div>
            </div>

            {/* SLA Table */}
            <div>
              <h3 className="text-[#003A6B] font-bold text-lg mb-5 font-[var(--font-plus-jakarta)]">
                Prazos de Entrega (SLA)
              </h3>
              <div className="overflow-x-auto rounded-3xl border border-[#E2EDF5]">
                <table className="w-full text-sm" aria-label="Tabela de prazos de entrega por classificação">
                  <thead>
                    <tr className="bg-[#003A6B] text-white">
                      <th className="text-left px-5 py-4 font-semibold font-[var(--font-plus-jakarta)] rounded-tl-2xl">Classificação</th>
                      <th className="text-center px-4 py-4 font-semibold">RM</th>
                      <th className="text-center px-4 py-4 font-semibold">TC</th>
                      <th className="text-center px-4 py-4 font-semibold">Raio-X</th>
                      <th className="text-center px-4 py-4 font-semibold rounded-tr-2xl">Mamografia</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SLA_ROWS.map((row, i) => (
                      <tr
                        key={row.classification}
                        className={i % 2 === 0 ? "bg-white" : "bg-[#F7FAFD]"}
                      >
                        <td className="px-5 py-4 font-medium text-[#003A6B] font-[var(--font-plus-jakarta)]">
                          {row.classification}
                        </td>
                        <td className="text-center px-4 py-4 text-[#0070B3] font-medium font-[var(--font-jetbrains-mono)]">{row.rm}</td>
                        <td className="text-center px-4 py-4 text-[#0070B3] font-medium font-[var(--font-jetbrains-mono)]">{row.tc}</td>
                        <td className="text-center px-4 py-4 text-[#0070B3] font-medium font-[var(--font-jetbrains-mono)]">{row.rx}</td>
                        <td className="text-center px-4 py-4 text-[#878787] font-[var(--font-jetbrains-mono)]">{row.mg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#878787] text-xs mt-3">
                * Prazo contado a partir do recebimento das imagens no sistema.
              </p>
            </div>
          </div>
        </section>

        {/* ── Problemas que resolve ── */}
        <section aria-label="Problemas que o telelaudo resolve" className="py-24 bg-[#EEF5FB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <SectionTag className="mb-5">Contexto</SectionTag>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] mb-4 font-[var(--font-plus-jakarta)]">
                  Desafios comuns em centros de diagnóstico
                </h2>
                <p className="text-[#4A5568] leading-relaxed mb-8">
                  Muitas clínicas e hospitais enfrentam gargalos operacionais que limitam a
                  capacidade de atendimento e elevam os custos. O telelaudo é uma alternativa
                  estruturada para superar essas barreiras.
                </p>
                <ul className="space-y-3" role="list">
                  {PROBLEMS.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0070B3]/10 border border-[#0070B3]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0070B3]" />
                      </div>
                      <span className="text-[#4A5568] text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* IMAGE PLACEHOLDER — substituir por foto real */}
              <div className="rounded-3xl bg-white border-2 border-dashed border-[#0070B3]/25 flex flex-col items-center justify-center h-full min-h-72 gap-3">
                <span className="text-[#0070B3]/30 text-4xl">🖼</span>
                <p className="text-[#0070B3]/40 text-sm font-medium">Imagem — substituir</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Como Funciona ── */}
        <section aria-label="Como funciona" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <SectionTag className="mb-4">Processo</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] mb-4 font-[var(--font-plus-jakarta)]">
                Como Funciona
              </h2>
              <p className="text-[#878787] text-lg max-w-xl mx-auto">
                Do exame ao laudo em 4 passos. Sem complexidade técnica para a sua operação.
              </p>
            </div>

            {/* Como o Telelaudo atua — destaque antes dos steps */}
            <div className="rounded-3xl mb-10 p-8 grid lg:grid-cols-2 gap-8 items-center"
              style={{ background: "linear-gradient(135deg, #003A6B 0%, #0070B3 100%)" }}>
              <div>
                <p className="text-[#7DD3F8] text-xs font-bold uppercase tracking-widest mb-3">Como o Elo Telelaudo atua</p>
                <p className="text-white text-lg font-semibold font-[var(--font-plus-jakarta)] mb-3 leading-snug">
                  O telelaudo elimina gargalos operacionais ao substituir a dependência de laudistas presenciais por uma operação 100% remota, escalável e disponível 24 horas por dia.
                </p>
                <p className="text-white/60 text-sm">Sem obras, sem contratações e sem equipamentos adicionais.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Faturamento por volume — sem mensalidade fixa",
                  "Implementação em dias, sem instalações físicas",
                  "Escala de operação sem aumento de estrutura",
                  "Cancele quando quiser, sem multa contratual",
                ].map((item) => (
                  <div key={item} className="bg-white/10 rounded-2xl p-4 flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-[#7DD3F8] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-white/80 text-xs leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {STEPS.map((step) => (
                <div key={step.n} className="light-card rounded-3xl p-6 flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <span className="text-3xl font-bold text-[#E2EDF5] font-[var(--font-jetbrains-mono)]">
                      {step.n}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#0070B3]/10 text-[#0070B3] text-[10px] font-semibold border border-[#0070B3]/15 whitespace-nowrap">
                      {step.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[#003A6B] font-semibold mb-2 font-[var(--font-plus-jakarta)]">
                      {step.title}
                    </h3>
                    <p className="text-[#878787] text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <TelelaudoFaq />

        {/* ── CTA ── */}
        <section
          aria-label="Fale com um especialista"
          className="py-20"
          style={{ background: "linear-gradient(135deg, #004A8F 0%, #0070B3 35%, #003A6B 70%, #002D5A 100%)" }}
        >
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[var(--font-plus-jakarta)]">
              Quer saber se o Elo Telelaudo{" "}
              <span className="text-[#99C1DD]">funciona para a sua operação?</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Fale com um especialista da Elo e-Health. Sem compromisso — apenas uma
              conversa para entender o seu contexto e apresentar como o serviço se encaixa.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                href={WHATSAPP_MESSAGE}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="bg-white text-[#003A6B] hover:bg-[#EEF5FB] shadow-xl w-full sm:w-auto"
              >
                <MessageCircle size={18} />
                Falar com um especialista
              </Button>
              <Button
                href="/servicos"
                variant="outline-dark"
                size="lg"
                className="w-full sm:w-auto"
              >
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
