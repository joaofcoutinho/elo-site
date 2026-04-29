import { TrendingUp, DollarSign, Star } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Receita ampliada",
    description:
      "Mais exames por turno, horários flexíveis e serviços diagnósticos que antes eram inviáveis operacionalmente.",
  },
  {
    icon: DollarSign,
    title: "Custos sob controle",
    description:
      "Redução de ociosidade, menos infraestrutura física e operação otimizada com protocolos revisados continuamente.",
  },
  {
    icon: Star,
    title: "Reputação e satisfação",
    description:
      "Imagens de maior qualidade, laudos mais assertivos e pacientes que recomendam. O diagnóstico vira diferencial competitivo.",
  },
];

export function HubBenefits() {
  return (
    <section aria-label="O que você ganha com o hub" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionTag className="mb-4">O que você ganha</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] font-[var(--font-plus-jakarta)]">
            O que você ganha com o hub
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="light-card rounded-3xl p-8 flex flex-col gap-4 group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-2 h-8 rounded-full bg-[#0070B3]" aria-hidden="true" />
              <h3 className="text-[#003A6B] font-bold text-lg font-[var(--font-plus-jakarta)]">
                {title}
              </h3>
              <p className="text-[#878787] text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
