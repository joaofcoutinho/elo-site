import Image from "next/image";
import { Building2, Camera, Stethoscope } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";

const PROFILES = [
  {
    icon: Building2,
    title: "Hospitais",
    description:
      "Elevamos o padrão de eficiência e governança hospitalar através de soluções inteligentes e processos baseados em dados.",
    image: "/pra-quem-e-elo/hospitais.jpg",
    imageAlt: "Fachada de hospital — Pronto Socorro",
  },
  {
    icon: Camera,
    title: "Clínicas de Imagem",
    description:
      "Eliminamos a ociosidade de suas máquinas e garantimos precisão diagnóstica com laudagem e operação remota de alta performance.",
    image: "/pra-quem-e-elo/clinicas-de-imagem.jpg",
    imageAlt: "Equipamento de tomografia computadorizada com paciente e técnica",
  },
  {
    icon: Stethoscope,
    title: "Clínicas Especializadas",
    description:
      "Transformamos a gestão técnica em eficiência estratégica, estruturando o crescimento e protegendo a lucratividade da sua clínica.",
    image: "/pra-quem-e-elo/clinicas-especializadas.jpg",
    imageAlt: "Equipe médica analisando exames de imagem em reunião clínica",
  },
];

export function TargetAudience() {
  return (
    <section aria-label="Pra quem é a Elo e-Health" className="py-24 bg-[#EEF5FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionTag className="mb-4">Pra quem é</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] font-[var(--font-plus-jakarta)]">
            Pra quem é a Elo e-Health?
          </h2>
          <p className="text-[#878787] text-lg mt-4 max-w-2xl mx-auto">
            Soluções desenhadas para diferentes perfis de operações de saúde.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFILES.map(({ icon: Icon, title, description, image, imageAlt }) => (
            <div
              key={title}
              className="bg-white rounded-3xl border border-[#E2EDF5] overflow-hidden flex flex-col shadow-sm group transition-all duration-300 hover:-translate-y-1 hover:border-[#0070B3]/30"
            >
              <div className="relative h-44 border-b border-[#E2EDF5] overflow-hidden bg-[#EEF5FB]">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0070B3]/10 border border-[#0070B3]/15 flex items-center justify-center group-hover:bg-[#0070B3] transition-colors duration-300">
                  <Icon size={18} className="text-[#0070B3] group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                </div>
                <h3 className="text-[#003A6B] font-bold text-base font-[var(--font-plus-jakarta)]">
                  {title}
                </h3>
                <p className="text-[#878787] text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
