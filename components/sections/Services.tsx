import Image from "next/image";
import { FileText, BarChart2, Database, ArrowRight, Monitor, Users, Cpu, GraduationCap } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { SERVICES } from "@/lib/constants";

const ICONS: Record<string, React.ElementType> = {
  FileText, BarChart2, Database, Monitor, Users, Cpu, GraduationCap,
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  image?: string | null;
}

function ServiceCard({ icon, title, description, href, image }: ServiceCardProps) {
  const Icon = ICONS[icon];
  return (
    <a
      href={href}
      className="group bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
      aria-label={`${title} — saiba mais`}
    >
      {image && (
        <div className="relative w-full h-44 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <div className="p-6 flex flex-col gap-4 flex-1">
        <div
          className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-[#0070B3] transition-colors duration-300"
          aria-hidden="true"
        >
          <span className="text-[#7DD3F8] group-hover:text-white transition-colors duration-300">
            {Icon && <Icon size={22} />}
          </span>
        </div>

        <div className="flex-1">
          <h3 className="text-white font-semibold mb-2 font-[var(--font-plus-jakarta)]">
            {title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-[#7DD3F8] text-sm font-semibold">Saiba mais</span>
          <span className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-[#0070B3] group-hover:border-[#0070B3] transition-all duration-300 flex-shrink-0">
            <ArrowRight size={15} className="text-[#7DD3F8] group-hover:text-white transition-colors duration-300" />
          </span>
        </div>
      </div>
    </a>
  );
}

export function Services() {
  return (
    <section id="servicos" aria-label="Nossos serviços" className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #001E3C 0%, #002D5A 40%, #003A6B 70%, #004080 100%)" }}>
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none" aria-hidden="true"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionTag dark className="mb-4">Nossos Serviços</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white font-[var(--font-plus-jakarta)]">
            Soluções completas em{" "}
            <span className="text-[#7DD3F8]">saúde e diagnóstico</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Qualidade, confiança e agilidade em diagnósticos por imagem, consultoria e dados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
