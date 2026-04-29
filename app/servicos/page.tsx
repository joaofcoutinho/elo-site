import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Services } from "@/components/sections/Services";
import { CtaFinal } from "@/components/sections/CtaFinal";

export const metadata: Metadata = {
  title: "Serviços — Elo e-Health",
  description:
    "Conheça todas as soluções da Elo e-Health: telerradiologia, telecomando, consultoria, gestão de pessoas, tecnologia e educação em saúde.",
};

export default function ServicosPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section
          aria-label="Serviços"
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #001E3C 0%, #002D5A 40%, #003A6B 70%, #004080 100%)" }}
        >
          <div className="absolute inset-0 opacity-[0.035] pointer-events-none" aria-hidden="true"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-36 pb-20">
            <nav className="flex items-center gap-2 text-white/40 text-xs mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white/70 transition-colors">Início</Link>
              <span>/</span>
              <span className="text-white/70">Serviços</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white mb-5 font-[var(--font-plus-jakarta)]">
              Soluções completas em{" "}
              <span className="text-[#7DD3F8]">saúde e diagnóstico</span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Da operação de equipamentos ao desenvolvimento de pessoas — a Elo e-Health
              atua em cada frente da sua operação de saúde.
            </p>
          </div>
        </section>

        <Services />
        <CtaFinal />

      </main>
      <Footer />
    </>
  );
}
