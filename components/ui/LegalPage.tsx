import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { ReactNode } from "react";

interface LegalPageProps {
  title: string;
  subtitle: string;
  updatedAt: string;
  children: ReactNode;
}

export function LegalPage({ title, subtitle, updatedAt, children }: LegalPageProps) {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <div className="bg-[#003A6B] pt-32 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#99C1DD] text-xs font-semibold uppercase tracking-widest mb-4">
              Elo e-Health
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[var(--font-plus-jakarta)]">
              {title}
            </h1>
            <p className="text-[#99C1DD] text-base">{subtitle}</p>
            <p className="text-white/40 text-sm mt-4">Atualizado em {updatedAt}</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose-legal">{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/* Prose components for consistent styling */
export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-[#003A6B] mb-4 font-[var(--font-plus-jakarta)] pb-2 border-b border-[#E2EDF5]">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-[#4A5568] text-sm leading-relaxed">{children}</p>;
}

export function Ul({ children }: { children: ReactNode }) {
  return (
    <ul className="space-y-2 ml-4">
      {children}
    </ul>
  );
}

export function Li({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-[#4A5568] leading-relaxed">
      <span className="w-1.5 h-1.5 rounded-full bg-[#0070B3] flex-shrink-0 mt-2" />
      <span>{children}</span>
    </li>
  );
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-[#003A6B]">{children}</strong>;
}
