import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CurriculumForm } from "./CurriculumForm";
import { Heart, Stethoscope, TrendingUp, Users } from "lucide-react";
import { WHATSAPP_MESSAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Trabalhe Conosco | Elo e-Health",
  description:
    "Faça parte da maior empresa de telerradiologia do Espírito Santo. Cadastre seu currículo e junte-se à equipe Elo e-Health.",
  robots: { index: true, follow: true },
};

const BENEFITS = [
  {
    icon: Stethoscope,
    title: "Excelência médica",
    description: "Trabalhe com tecnologia de ponta e monitores certificados pela ANVISA.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento contínuo",
    description: "Ambiente dinâmico, com oportunidades reais de desenvolvimento profissional.",
  },
  {
    icon: Users,
    title: "Equipe comprometida",
    description: "Um time de radiologistas apaixonados por diagnóstico de qualidade.",
  },
  {
    icon: Heart,
    title: "Propósito real",
    description: "Cada laudo emitido impacta diretamente a vida de um paciente.",
  },
];


export default function TrabalheConoscoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <div className="relative pt-32 pb-20 overflow-hidden">
          <Image
            src="/trabalhe-conosco.png"
            alt=""
            fill
            className="object-cover object-[center_30%]"
            priority
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{ background: "linear-gradient(160deg, rgba(0,14,28,0.92) 0%, rgba(0,30,60,0.88) 50%, rgba(0,42,80,0.85) 100%)" }}
          />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#99C1DD] text-xs font-semibold uppercase tracking-widest mb-4">
              Carreiras
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[var(--font-plus-jakarta)]">
              Trabalhe Conosco
            </h1>
            <p className="text-[#99C1DD] text-base">
              Faça parte da equipe que está transformando a telerradiologia no Brasil.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-[#F7FAFE] py-16 border-b border-[#E2EDF5]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-[#003A6B] font-[var(--font-plus-jakarta)] mb-10">
              Por que fazer parte da Elo e-Health?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BENEFITS.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl border border-[#E2EDF5] p-6 flex flex-col gap-3 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EEF5FB] flex items-center justify-center">
                    <Icon size={20} className="text-[#0070B3]" />
                  </div>
                  <h3 className="font-semibold text-[#003A6B] text-sm font-[var(--font-plus-jakarta)]">
                    {title}
                  </h3>
                  <p className="text-xs text-[#4A5568] leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Form */}
        <div id="curriculo" className="bg-[#F7FAFE] py-16">
          <div className="max-w-xl mx-auto px-4 sm:px-6">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-[#003A6B] font-[var(--font-plus-jakarta)] mb-2">
                Cadastre seu Currículo
              </h2>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                Estamos sempre em busca de{" "}
                <strong className="text-[#003A6B]">Médicos Radiologistas</strong> dedicados e
                qualificados para integrar nossa equipe. Preencha o formulário abaixo e entraremos
                em contato.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[#E2EDF5] shadow-sm p-8">
              <CurriculumForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
