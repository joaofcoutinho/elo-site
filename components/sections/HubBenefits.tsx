import { TrendingUp, DollarSign, Gauge } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Receita ampliada",
    description:
      "Mais exames por turno e mais serviços de diagnóstico que antes eram inviáveis operacionalmente.",
  },
  {
    icon: DollarSign,
    title: "Redução de custos operacionais",
    description:
      "Maior eficiência operacional através de gestão profissional, redução de ociosidade de equipamentos, menos estrutura física e operação otimizada.",
  },
  {
    icon: Gauge,
    title: "Controle da operação",
    description:
      "Maior controle da sua operação de saúde através da implementação de processos e tecnologia que fornecem dados estruturados para melhor tomada de decisão gerencial.",
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

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="grid sm:grid-cols-1 gap-6">
            {BENEFITS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="light-card rounded-3xl p-8 flex flex-col gap-4 group transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-1.5 rounded-full bg-[#0070B3]" aria-hidden="true" />
                <h3 className="text-[#003A6B] font-bold text-lg font-[var(--font-plus-jakarta)]">
                  {title}
                </h3>
                <p className="text-[#878787] text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          {/* IMAGE PLACEHOLDER — substituir por foto real */}
          <div className="rounded-3xl bg-[#EEF5FB] border-2 border-dashed border-[#0070B3]/25 flex flex-col items-center justify-center h-full min-h-80 gap-3">
            <span className="text-[#0070B3]/30 text-4xl">🖼</span>
            <p className="text-[#0070B3]/40 text-sm font-medium">Imagem — substituir</p>
          </div>
        </div>
      </div>
    </section>
  );
}
