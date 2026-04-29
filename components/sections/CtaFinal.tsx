import { MessageCircle, CalendarCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_MESSAGE } from "@/lib/constants";

const CHECKMARKS = [
  "Implementação em dias",
  "Suporte técnico dedicado",
  "Pague por uso",
  "Cancele sem multa",
];

export function CtaFinal() {
  return (
    <section
      aria-label="Chamada para ação final"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #004A8F 0%, #0070B3 35%, #003A6B 70%, #002D5A 100%)",
      }}
    >
      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-[#0070B3]/20 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5 text-white font-[var(--font-plus-jakarta)]">
          Eleve o seu{" "}
          <span className="text-[#99C1DD]">centro de diagnóstico</span>{" "}
          com a Elo e-Health.
        </h2>

        <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Fale com um especialista e descubra como reduzir custos, eliminar filas
          e atender mais pacientes.
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-10" role="list">
          {CHECKMARKS.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-white/90">
              <CheckCircle2 size={16} className="text-[#99C1DD] flex-shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href={WHATSAPP_MESSAGE}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1DB954] text-white shadow-xl border-0"
            aria-label="Chamar a Elo e-Health no WhatsApp"
          >
            <MessageCircle size={18} />
            Chamar no WhatsApp
          </Button>
          <Button
            href={WHATSAPP_MESSAGE}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline-dark"
            size="lg"
            className="w-full sm:w-auto"
            aria-label="Solicitar demonstração da Elo e-Health"
          >
            <CalendarCheck size={18} />
            Solicitar Demonstração
          </Button>
        </div>
      </div>
    </section>
  );
}
