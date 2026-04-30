"use client";

import { MapPin, TrendingUp, ThumbsUp, Hospital } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { METRICS } from "@/lib/constants";
import { SectionTag } from "@/components/ui/SectionTag";

const ICONS = { MapPin, TrendingUp, ThumbsUp, Hospital };
type IconName = keyof typeof ICONS;

export function Metrics() {
  return (
    <section
      aria-label="Métricas e resultados"
      className="py-24 bg-[#EEF5FB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionTag className="mb-4">Nossos números</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] font-[var(--font-plus-jakarta)]">
            Resultados que{" "}
            <span className="text-[#0070B3]">falam por si</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric) => {
            const Icon = ICONS[metric.icon as IconName];
            return (
              <div
                key={metric.label}
                className="light-card rounded-3xl p-8 text-center group transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-14 h-14 rounded-xl bg-[#0070B3]/10 border border-[#0070B3]/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#0070B3]/20 transition-colors"
                  aria-hidden="true"
                >
                  {Icon && <Icon size={24} className="text-[#0070B3]" />}
                </div>

                <p
                  className="text-4xl font-bold text-[#003A6B] mb-2 font-[var(--font-jetbrains-mono)]"
                  aria-label={`${metric.prefix ?? ""}${metric.value}${metric.suffix ?? ""} ${metric.label}`}
                >
                  <CountUp end={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                </p>

                <p className="text-[#003A6B] font-semibold text-sm mb-1 font-[var(--font-plus-jakarta)]">
                  {metric.label}
                </p>
                <p className="text-[#878787] text-xs leading-relaxed">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
