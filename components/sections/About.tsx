import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";

const highlights = [
  "Referência em telerradiologia no Espírito Santo",
  "Equipe de radiologistas especializados",
  "Tecnologia PACS/RIS de última geração",
  "Conformidade total com LGPD e CFM",
];

export function About() {
  return (
    <section id="sobre" aria-label="Sobre a Elo e-Health" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Text — 60% */}
          <div className="lg:col-span-3">
            <SectionTag className="mb-5">Sobre nós</SectionTag>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6 text-[#003A6B] font-[var(--font-plus-jakarta)]">
              Conheça a{" "}
              <span className="text-[#0070B3]">Elo e-Health</span>
            </h2>

            <p className="text-[#4A5568] text-lg leading-relaxed mb-8">
              Fundada com a missão de proporcionar diagnósticos de excelência, a
              Elo e-Health é referência em telerradiologia para clínicas de médio
              e pequeno portes e hospitais. Fornecemos laudos médicos de qualidade
              e de forma ágil, dando suporte aos nossos parceiros para atenderem
              melhor seus pacientes, reduzindo custos e contribuindo no crescimento
              da empresa.
            </p>

            <ul className="space-y-3 mb-10" role="list">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-[#0070B3] mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-[#4A5568] text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Button href="/sobre" variant="outline" size="md" aria-label="Saiba mais sobre a Elo e-Health">
              Saiba mais
              <ArrowRight size={16} />
            </Button>
          </div>

          {/* Image — 40% */}
          <div className="lg:col-span-2">
            <div className="relative rounded-3xl overflow-hidden border border-[#E2EDF5] shadow-lg">
              {/* Placeholder — replace with next/image about.webp */}
              <div
                className="aspect-[4/5] relative flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #EEF5FB 0%, #F7FAFD 60%, #EEF5FB 100%)" }}
              >
                <div className="text-center px-8">
                  <div className="w-20 h-20 rounded-full bg-[#0070B3]/10 border border-[#0070B3]/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#0070B3] text-3xl font-bold font-[var(--font-plus-jakarta)]">E</span>
                  </div>
                  <p className="text-[#878787] text-sm">Substitua por foto da equipe</p>
                  <p className="text-[#878787]/60 text-xs mt-1">800×600 WebP</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-white rounded-xl px-4 py-3 shadow-md border border-[#E2EDF5]">
                <p className="text-[#0070B3] text-xs font-semibold">Fundada em 2019</p>
                <p className="text-[#003A6B] text-lg font-bold font-[var(--font-jetbrains-mono)]">5+</p>
                <p className="text-[#878787] text-xs">anos de experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
