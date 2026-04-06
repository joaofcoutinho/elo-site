"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Funciona com qualquer marca de aparelho de imagem?",
    a: "Sim. O sistema é 100% compatível com qualquer equipamento que suporte o protocolo DICOM — o padrão internacional da medicina. Isso inclui aparelhos de TC, RM, Raio-X e Mamografia de todas as marcas líderes, como GE, Siemens, Philips e outras.",
  },
  {
    q: "Como é feita a cobrança do serviço?",
    a: "O faturamento é mensal e baseado no volume de exames laudados no período. Você paga apenas pelo que utilizar, sem mensalidades fixas. Isso torna o modelo ideal tanto para clínicas menores quanto para grandes centros de diagnóstico.",
  },
  {
    q: "Os laudos têm assinatura digital?",
    a: "Sim. Todos os laudos são assinados digitalmente, garantindo validade jurídica, autenticidade e rastreabilidade total do documento.",
  },
  {
    q: "Como é garantida a segurança e privacidade dos dados?",
    a: "A plataforma é totalmente aderente à LGPD (Lei Geral de Proteção de Dados). As imagens e laudos são transmitidos e armazenados com criptografia de ponta a ponta, em infraestrutura de nuvem certificada, com contratos de confidencialidade com toda a equipe.",
  },
  {
    q: "Quanto tempo leva para implementar o serviço?",
    a: "A implementação é ágil. A equipe técnica configura a integração DICOM remotamente em poucos dias. Não é necessário instalar nenhum equipamento adicional — apenas uma conexão de internet estável já é suficiente.",
  },
  {
    q: "O serviço atende laudos de medicina do trabalho (OIT)?",
    a: "Sim. Há expertise em laudos de Raio-X de tórax pelo padrão OIT, espirometria e outros exames voltados à medicina ocupacional — um nicho atendido com qualidade e agilidade.",
  },
];

export function TelelaudoFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section aria-label="Perguntas frequentes" className="py-24 bg-[#F7FAFD]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionTag className="mb-4">FAQ</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] mb-4 font-[var(--font-plus-jakarta)]">
            Perguntas Frequentes
          </h2>
          <p className="text-[#878787] text-lg">
            Respostas para as dúvidas mais comuns sobre o Elo Telelaudo.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="light-card rounded-3xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="text-[#003A6B] font-semibold text-sm font-[var(--font-plus-jakarta)]">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={cn(
                    "text-[#0070B3] flex-shrink-0 transition-transform duration-200",
                    open === i && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  open === i ? "max-h-48" : "max-h-0"
                )}
              >
                <p className="px-6 pb-5 text-[#4A5568] text-sm leading-relaxed border-t border-[#E2EDF5] pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
