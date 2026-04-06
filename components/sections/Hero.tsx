import { MessageCircle, Calculator, Clock, Shield, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_MESSAGE } from "@/lib/constants";

const BADGES = [
  { icon: Clock,     label: "24h Disponível"       },
  { icon: BarChart2, label: "+309K Exames Laudados" },
  { icon: Shield,    label: "LGPD Compliant"        },
];

export function Hero() {
  return (
    <section
      aria-label="Apresentação principal"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #001E3C 0%, #002D5A 35%, #003A6B 60%, #004080 100%)",
      }}
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/0406.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "linear-gradient(160deg, rgba(0,14,28,0.95) 0%, rgba(0,24,50,0.92) 40%, rgba(0,32,64,0.90) 100%)" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0070B3]/12 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#002D5A]/80 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#0070B3]/8 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div
        className="relative max-w-2xl mx-auto px-4 sm:px-6 w-full text-center"
        style={{ paddingTop: "calc(64px + 2.5rem)", paddingBottom: "2.5rem" }}
      >
        {/* Badge */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#0070B3]/20 text-[#7DD3F8] border border-[#0070B3]/30 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7DD3F8]" />
            Telerradiologia de excelência
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.2] tracking-tight mb-4 font-[var(--font-plus-jakarta)] text-white">
          <span className="block">
            Telelaudos{" "}
            <span
              className="text-[#7DD3F8]"
              style={{ textShadow: "0 0 40px rgba(125,211,248,0.35)" }}
            >
              24/7 -
            </span>
          </span>
          <span className="block">Laudos médicos de excelência</span>
          <span className="block">para clínicas e hospitais</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-8 max-w-lg mx-auto">
          Reduza custos, elimine filas e garanta diagnósticos precisos com a
          maior empresa de telerradiologia do Espírito Santo.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Button
            href={WHATSAPP_MESSAGE}
            target="_blank"
            rel="noopener noreferrer"
            size="md"
            aria-label="Falar com consultor via WhatsApp"
          >
            <MessageCircle size={16} />
            Falar com Consultor
          </Button>
          <Button
            href="http://calculadora.eloe-health.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline-dark"
            size="md"
            aria-label="Acessar calculadora de custos"
          >
            <Calculator size={16} />
            Calculadora de Custos
          </Button>
        </div>

        {/* Stat badges */}
        <div className="flex flex-wrap gap-2 justify-center">
          {BADGES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/6 border border-white/12 text-xs text-white/75 backdrop-blur-sm"
            >
              <Icon size={12} className="text-[#7DD3F8]" aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="mt-10 h-px w-24 mx-auto"
          style={{ background: "linear-gradient(to right, transparent, rgba(153,193,221,0.4), transparent)" }}
        />
      </div>
    </section>
  );
}
