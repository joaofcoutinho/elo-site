import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Linkedin } from "lucide-react";
import { CONTACT, FOOTER_LINKS, WHATSAPP_MESSAGE } from "@/lib/constants";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#E2EDF5] mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1 — Logo + description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 w-fit" aria-label="Elo e-Health — Página inicial">
              <Image src="/logo-azul.png" alt="Elo e-Health" width={160} height={80} className="h-9 w-auto scale-[2]" />
            </Link>
            <p className="text-[#878787] text-sm leading-relaxed mb-6 max-w-xs">
              Referência em telerradiologia para clínicas e hospitais. Laudos
              médicos de excelência, disponíveis 24h por dia, 7 dias por semana.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: CONTACT.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: CONTACT.instagram, icon: InstagramIcon, label: "Instagram" },
                { href: CONTACT.facebook, icon: FacebookIcon, label: "Facebook" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Elo e-Health no ${label}`}
                  className="w-9 h-9 rounded-lg bg-[#EEF5FB] border border-[#E2EDF5] flex items-center justify-center text-[#878787] hover:text-white hover:bg-[#0070B3] hover:border-[#0070B3] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Columns 2 & 3 — Links */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h3 className="text-[#003A6B] font-semibold text-sm mb-5 font-[var(--font-plus-jakarta)]">
                {section.title}
              </h3>
              <ul className="space-y-3" role="list">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[#878787] text-sm hover:text-[#0070B3] transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-[#003A6B] font-semibold text-sm mb-5 font-[var(--font-plus-jakarta)]">
              Contato
            </h3>
            <ul className="space-y-4" role="list">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-3 text-[#878787] text-sm hover:text-[#0070B3] transition-colors">
                  <Mail size={15} className="mt-0.5 flex-shrink-0 text-[#0070B3]" />
                  <span>{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a href="tel:+5527998907202" className="flex items-center gap-3 text-[#878787] text-sm hover:text-[#0070B3] transition-colors">
                  <Phone size={15} className="flex-shrink-0 text-[#0070B3]" />
                  <span>{CONTACT.phone1}</span>
                </a>
              </li>
              <li>
                <a href="tel:+5527981397567" className="flex items-center gap-3 text-[#878787] text-sm hover:text-[#0070B3] transition-colors">
                  <Phone size={15} className="flex-shrink-0 text-[#0070B3]" />
                  <span>{CONTACT.phone2}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[#878787] text-sm">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0 text-[#0070B3]" />
                  <address className="not-italic leading-relaxed">{CONTACT.address}</address>
                </div>
              </li>
            </ul>

            <a
              href={WHATSAPP_MESSAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 bg-[#0070B3] text-white text-sm font-medium rounded-lg hover:bg-[#005A92] transition-all duration-200"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[#E2EDF5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#878787] text-sm">
            © {currentYear} Elo e-Health. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/termos" className="text-[#878787] text-sm hover:text-[#0070B3] transition-colors">Termos e Condições</Link>
            <Link href="/privacidade" className="text-[#878787] text-sm hover:text-[#0070B3] transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
