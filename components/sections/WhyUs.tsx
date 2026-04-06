import { MonitorCheck, Wallet, Headphones } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { WHY_US } from "@/lib/constants";

const ICONS: Record<string, React.ElementType> = { MonitorCheck, Wallet, Headphones };

export function WhyUs() {
  return (
    <section
      aria-label="Por que contratar a Elo e-Health"
      className="py-24 bg-[#F7FAFD]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionTag className="mb-4">Diferenciais</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#003A6B] font-[var(--font-plus-jakarta)]">
            Por que nos contratar?
          </h2>
          <p className="text-[#878787] text-lg max-w-2xl mx-auto">
            Foque em fazer os exames — deixe que a Elo te entregue os laudos
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {WHY_US.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <div
                key={item.title}
                className="light-card rounded-3xl p-8 text-center group transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-16 h-16 rounded-3xl bg-[#0070B3]/10 border border-[#0070B3]/15 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0070B3] transition-colors duration-300"
                  aria-hidden="true"
                >
                  <span className="text-[#0070B3] group-hover:text-white transition-colors duration-300">
                    {Icon && <Icon size={28} />}
                  </span>
                </div>
                <h3 className="text-[#003A6B] font-bold text-lg mb-3 font-[var(--font-plus-jakarta)]">
                  {item.title}
                </h3>
                <p className="text-[#878787] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
