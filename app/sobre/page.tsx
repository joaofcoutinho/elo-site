import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, MessageCircle, CheckCircle2, MapPin, Mail, Phone,
  Building2, TrendingUp, ThumbsUp, FileCheck, Users, Target, Award, Zap,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_MESSAGE, CONTACT, METRICS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre nós — Elo e-Health",
  description:
    "Conheça a Elo e-Health: missão, visão, valores e a equipe por trás dos serviços de telerradiologia, consultoria e gestão em saúde.",
};

const METRIC_ICONS: Record<string, React.ElementType> = {
  Building2, TrendingUp, ThumbsUp, FileCheck,
};

const VALUES = [
  { icon: Zap,       title: "Inovação",           description: "Buscamos continuamente novas formas de entregar diagnósticos e soluções mais eficientes." },
  { icon: Award,     title: "Qualidade",           description: "Padrões rigorosos em cada laudo, protocolo e entrega — sem concessões." },
  { icon: Target,    title: "Agilidade",           description: "Resultados rápidos sem comprometer a precisão. Cada minuto importa na saúde." },
  { icon: CheckCircle2, title: "Segurança",        description: "Processos em conformidade com a LGPD e melhores práticas de privacidade de dados." },
  { icon: TrendingUp, title: "Melhoria contínua",  description: "Revisamos protocolos, processos e tecnologia constantemente para evoluir junto com nossos clientes." },
  { icon: Users,     title: "Parceria real",       description: "Não somos apenas fornecedores. Atuamos integrados à operação de cada cliente." },
];

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section
          aria-label="Sobre a Elo e-Health"
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #001E3C 0%, #002D5A 40%, #003A6B 70%, #004080 100%)" }}
        >
          <div className="absolute inset-0 opacity-[0.035] pointer-events-none" aria-hidden="true"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0070B3]/12 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-36 pb-24">
            <nav className="flex items-center gap-2 text-white/40 text-xs mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white/70 transition-colors">Início</Link>
              <span>/</span>
              <span className="text-white/70">Sobre nós</span>
            </nav>

            <SectionTag dark className="mb-5">Quem somos</SectionTag>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white mb-6 max-w-3xl font-[var(--font-plus-jakarta)]">
              Diagnóstico, tecnologia e pessoas{" "}
              <span className="text-[#7DD3F8]">integrados em um só parceiro</span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mb-10">
              A Elo e-Health nasceu em 2019 com a missão de transformar a operação de saúde
              no Brasil — unindo telerradiologia de excelência, consultoria estratégica e
              tecnologia proprietária para clínicas e hospitais de todos os portes.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Fundada em 2019", "Vitória — ES", "Atuação nacional", "LGPD compliant"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-white/70 text-xs font-medium">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Números */}
        <div className="bg-[#002D5A] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {METRICS.map(({ value, suffix, prefix, label }) => {
                return (
                  <div key={label} className="py-6 px-8 text-center">
                    <p className="text-3xl font-bold text-[#7DD3F8] font-[var(--font-jetbrains-mono)] mb-1">
                      {prefix}{value}{suffix}
                    </p>
                    <p className="text-white/60 text-xs">{label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quem somos */}
        <section aria-label="Nossa história" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionTag className="mb-5">Nossa história</SectionTag>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] mb-6 font-[var(--font-plus-jakarta)]">
                  Nascemos para resolver o que o mercado deixava para trás
                </h2>
                <p className="text-[#4A5568] leading-relaxed mb-5">
                  A Elo e-Health surgiu da percepção de que clínicas e hospitais de médio porte
                  enfrentavam desafios estruturais sem solução integrada: laudos lentos, equipes
                  desorganizadas, equipamentos ociosos e tecnologia fragmentada.
                </p>
                <p className="text-[#4A5568] leading-relaxed mb-5">
                  Reunimos especialistas em radiologia, gestão hospitalar, tecnologia e
                  desenvolvimento humano para criar um hub de soluções que atua de ponta a ponta
                  na operação de saúde — do primeiro exame ao desenvolvimento da equipe.
                </p>
                <p className="text-[#4A5568] leading-relaxed mb-10">
                  Hoje, atuamos em todo o Brasil com presença em 10 estados, atendendo
                  hospitais, clínicas de diagnóstico e redes de saúde que precisam de
                  resultado real, não apenas de fornecedores.
                </p>

                <ul className="space-y-3" role="list">
                  {[
                    "Referência em telerradiologia no Espírito Santo",
                    "Equipe própria de médicos especialistas e subespecialistas",
                    "Tecnologia PACS/RIS de última geração",
                    "Processos em conformidade total com a LGPD",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#0070B3] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-[#4A5568] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Missão / Visão / Valores */}
              <div className="flex flex-col gap-5">
                {[
                  {
                    label: "Missão",
                    text: "Proporcionar diagnósticos rápidos, precisos e acessíveis, contribuindo para a melhoria da qualidade do atendimento em saúde em todo o Brasil.",
                    color: "border-l-[#0070B3]",
                  },
                  {
                    label: "Visão",
                    text: "Ser a referência nacional em soluções integradas de saúde, reconhecida pela excelência, inovação e pelo impacto real na operação dos nossos clientes.",
                    color: "border-l-[#003A6B]",
                  },
                  {
                    label: "Propósito",
                    text: "Conectar tecnologia, pessoas e processos para que cada clínica e hospital possa entregar o melhor cuidado possível — independente do tamanho.",
                    color: "border-l-[#7DD3F8]",
                  },
                ].map(({ label, text, color }) => (
                  <div key={label} className={`rounded-2xl border border-[#E2EDF5] bg-[#F7FAFD] p-6 border-l-4 ${color}`}>
                    <p className="text-[#0070B3] text-xs font-bold uppercase tracking-widest mb-3">{label}</p>
                    <p className="text-[#4A5568] text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section aria-label="Nossos valores" className="py-24 bg-[#EEF5FB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <SectionTag className="mb-4">Valores</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] font-[var(--font-plus-jakarta)]">
                O que guia cada decisão
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {VALUES.map(({ icon: Icon, title, description }) => (
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

        {/* Onde estamos */}
        <section aria-label="Contato e localização" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <SectionTag className="mb-5">Onde estamos</SectionTag>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] mb-6 font-[var(--font-plus-jakarta)]">
                  Sede em Vitória, atuação em todo o Brasil
                </h2>
                <p className="text-[#4A5568] leading-relaxed mb-10">
                  Nossa base de operações fica em Vitória — ES, mas atendemos clientes
                  em todo o território nacional com equipes remotas e presença física
                  quando necessário.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0070B3]/10 border border-[#0070B3]/15 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-[#0070B3]" />
                    </div>
                    <div>
                      <p className="text-[#003A6B] font-semibold text-sm mb-1">Endereço</p>
                      <p className="text-[#4A5568] text-sm leading-relaxed">{CONTACT.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0070B3]/10 border border-[#0070B3]/15 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-[#0070B3]" />
                    </div>
                    <div>
                      <p className="text-[#003A6B] font-semibold text-sm mb-1">E-mail</p>
                      <a href={`mailto:${CONTACT.email}`} className="text-[#0070B3] text-sm hover:underline">{CONTACT.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0070B3]/10 border border-[#0070B3]/15 flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-[#0070B3]" />
                    </div>
                    <div>
                      <p className="text-[#003A6B] font-semibold text-sm mb-1">Telefone</p>
                      <p className="text-[#4A5568] text-sm">{CONTACT.phone1}</p>
                      <p className="text-[#4A5568] text-sm">{CONTACT.phone2}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA lateral */}
              <div className="rounded-3xl p-10 flex flex-col gap-6" style={{ background: "linear-gradient(135deg, #004A8F 0%, #0070B3 50%, #003A6B 100%)" }}>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Fale com a gente</p>
                <h3 className="text-2xl font-bold text-white font-[var(--font-plus-jakarta)]">
                  Quer entender como a Elo e-Health pode transformar sua operação?
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Converse com um especialista e descubra qual solução faz mais sentido
                  para o momento da sua clínica ou hospital.
                </p>
                <div className="flex flex-col gap-3">
                  <Button
                    href={WHATSAPP_MESSAGE}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#1DB954] text-white border-0 shadow-xl w-full justify-center"
                  >
                    <MessageCircle size={18} />
                    Falar com especialista
                  </Button>
                  <Button href="/servicos" variant="outline-dark" size="lg" className="w-full justify-center">
                    Ver nossos serviços
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
