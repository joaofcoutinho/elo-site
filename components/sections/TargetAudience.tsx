import { Building2, Camera, Stethoscope, HeartPulse } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";

const PROFILES = [
  {
    icon: Building2,
    title: "Hospitais",
    description: "Escala operação de imagem sem aumentar quadro fixo.",
  },
  {
    icon: Camera,
    title: "Clínicas de imagem",
    description: "Amplia serviços diagnósticos com investimento reduzido.",
  },
  {
    icon: Stethoscope,
    title: "Clínicas especializadas",
    description: "Acesso a laudos de subespecialistas sem contratar internamente.",
  },
  {
    icon: HeartPulse,
    title: "Operadoras de saúde",
    description: "Melhora a assertividade diagnóstica de rede credenciada.",
  },
];

export function TargetAudience() {
  return (
    <section aria-label="Para quem é a Elo e-Health" className="py-24 bg-[#EEF5FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionTag className="mb-4">Para quem é</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] font-[var(--font-plus-jakarta)]">
            Para quem é a Elo e-Health
          </h2>
          <p className="text-[#878787] text-lg mt-4 max-w-2xl mx-auto">
            Soluções desenhadas para diferentes perfis de serviço de saúde diagnóstica.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROFILES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-3xl border border-[#E2EDF5] overflow-hidden flex flex-col shadow-sm group transition-all duration-300 hover:-translate-y-1 hover:border-[#0070B3]/30"
            >
              {/* IMAGE PLACEHOLDER — substituir por foto real */}
              <div className="h-40 bg-[#EEF5FB] border-b border-[#E2EDF5] flex flex-col items-center justify-center gap-2">
                <span className="text-[#0070B3]/30 text-3xl">🖼</span>
                <span className="text-[#0070B3]/40 text-xs font-medium">Imagem — substituir</span>
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
