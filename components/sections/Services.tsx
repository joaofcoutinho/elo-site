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
  image?: string;
}

function ServiceCard({ icon, title, description, href, image }: ServiceCardProps) {
  const Icon = ICONS[icon];
  return (
    <a
      href={href}
      className="group light-card rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
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
          className="w-12 h-12 rounded-xl bg-[#0070B3]/10 border border-[#0070B3]/15 flex items-center justify-center group-hover:bg-[#0070B3] transition-colors duration-300"
          aria-hidden="true"
        >
          <span className="text-[#0070B3] group-hover:text-white transition-colors duration-300">
            {Icon && <Icon size={22} />}
          </span>
        </div>

        <div className="flex-1">
          <h3 className="text-[#003A6B] font-semibold mb-2 font-[var(--font-plus-jakarta)]">
            {title}
          </h3>
          <p className="text-[#878787] text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-[#0070B3] text-sm font-semibold">Saiba mais</span>
          <span className="w-9 h-9 rounded-full bg-[#0070B3]/10 border border-[#0070B3]/20 flex items-center justify-center group-hover:bg-[#0070B3] group-hover:border-[#0070B3] transition-all duration-300 flex-shrink-0">
            <ArrowRight size={15} className="text-[#0070B3] group-hover:text-white transition-colors duration-300" />
          </span>
        </div>
      </div>
    </a>
  );
}

export function Services() {
  return (
    <section id="servicos" aria-label="Nossos serviços" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionTag className="mb-4">Nossos Serviços</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#003A6B] font-[var(--font-plus-jakarta)]">
            Soluções completas em{" "}
            <span className="text-[#0070B3]">saúde e diagnóstico</span>
          </h2>
          <p className="text-[#878787] text-lg max-w-2xl mx-auto">
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
