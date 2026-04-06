"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, WHATSAPP_MESSAGE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type NavItem = (typeof NAV_LINKS)[number];

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          className="px-4 py-2 text-sm rounded-lg transition-all duration-200 text-[#4A5568] hover:text-[#003A6B] hover:bg-[#EEF5FB]"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        className={cn(
          "flex items-center gap-1 px-4 py-2 text-sm rounded-lg transition-all duration-200",
          open ? "text-[#003A6B] bg-[#EEF5FB]" : "text-[#4A5568] hover:text-[#003A6B] hover:bg-[#EEF5FB]"
        )}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          size={14}
          className={cn("transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      {/* Dropdown panel */}
      <div
        onMouseLeave={() => setOpen(false)}
        className={cn(
          "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] bg-white rounded-3xl border border-[#E2EDF5] shadow-xl shadow-[#0070B3]/8 p-5 z-50",
          "transition-all duration-200 origin-top",
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <div className="grid grid-cols-3 gap-4">
          {item.children.map((group) => (
            <div key={group.group}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#0070B3] mb-3 px-1">
                {group.group}
              </p>
              <ul className="space-y-1">
                {group.items.map((sub) => (
                  <li key={sub.href}>
                    <Link
                      href={sub.href}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2.5 rounded-2xl hover:bg-[#EEF5FB] transition-colors group"
                    >
                      <span className="block text-sm font-medium text-[#003A6B] group-hover:text-[#0070B3] transition-colors">
                        {sub.label}
                      </span>
                      <span className="block text-xs text-[#878787] mt-0.5">
                        {sub.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-4 pt-4 border-t border-[#E2EDF5]">
          <Link
            href="/servicos"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-1.5 text-sm text-[#0070B3] font-medium hover:underline"
          >
            Ver todos os serviços →
          </Link>
        </div>
      </div>
    </li>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E2EDF5] shadow-sm py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" aria-label="Navegação principal">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 rounded focus-visible:outline-2 focus-visible:outline-[#0070B3] flex-shrink-0"
              aria-label="Elo e-Health — Página inicial"
            >
              <Image src="/logo-azul.png" alt="Elo e-Health" width={160} height={80} className="h-9 w-auto scale-[2]" priority />
            </Link>

            {/* Desktop nav — centered */}
            <ul
              className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2"
              role="list"
            >
              {NAV_LINKS.map((item) => (
                <DesktopDropdown key={item.href} item={item} />
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <Button href={WHATSAPP_MESSAGE} target="_blank" rel="noopener noreferrer" size="md">
                Solicitar Demonstração
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors text-[#003A6B] hover:bg-[#EEF5FB]"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menu de navegação"
        aria-modal="true"
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-72 bg-white border-l border-[#E2EDF5] shadow-2xl lg:hidden",
          "flex flex-col transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E2EDF5]">
          <Image src="/logo-azul.png" alt="Elo e-Health" width={140} height={70} className="h-8 w-auto scale-[2]" />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-[#878787] hover:text-[#003A6B] hover:bg-[#EEF5FB] transition-colors"
            aria-label="Fechar menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="space-y-1" role="list">
            {NAV_LINKS.map((item) => {
              if (!item.children) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-[#4A5568] hover:text-[#003A6B] hover:bg-[#EEF5FB] rounded-lg transition-all duration-200 font-medium"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-4 py-3 text-[#4A5568] hover:text-[#003A6B] hover:bg-[#EEF5FB] rounded-lg transition-all duration-200 font-medium"
                    aria-expanded={mobileServicesOpen}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={cn("transition-transform duration-200", mobileServicesOpen && "rotate-180")}
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div className="mt-1 ml-4 space-y-4">
                      {item.children.map((group) => (
                        <div key={group.group}>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#0070B3] px-4 mb-2">
                            {group.group}
                          </p>
                          {group.items.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="block px-4 py-2 text-sm text-[#4A5568] hover:text-[#003A6B] hover:bg-[#EEF5FB] rounded-lg transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="px-6 pb-8 border-t border-[#E2EDF5] pt-6">
          <Button
            href={WHATSAPP_MESSAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full justify-center"
          >
            Solicitar Demonstração
          </Button>
        </div>
      </div>
    </>
  );
}
