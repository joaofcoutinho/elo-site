"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Banner = {
  src: string;
  mobileSrc?: string;
  alt: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "right";
};

const BANNERS: Banner[] = [
  {
    src: "/banners/banner-1-novo.png",
    mobileSrc: "/banners/banner-1-mobile.png",
    alt: "Elo e-Health — Serviços, Tecnologia e Educação",
    title: "Serviços, Tecnologia e Educação",
    subtitle: "para médicos e gestores de clínicas e hospitais",
    align: "left",
  },
  {
    src: "/banners/banner-2-novo.png",
    mobileSrc: "/banners/banner-2-mobile.png",
    alt: "Elo RDI — telerradiologia com inteligência artificial",
    title: "Elo RDI",
    subtitle:
      "Unimos inteligência artificial, telerradiologia especializada e operação remota para garantir exames perfeitos à primeira tentativa e laudos ágeis de alta precisão 24 horas por dia.",
    align: "left",
  },
  {
    src: "/banners/banner-3-novo.png",
    mobileSrc: "/banners/banner-3-mobile.png",
    alt: "Elo Education — escola de negócios para médicos e gestores",
    title: "Elo Education",
    subtitle:
      "A escola de negócios pensada para médicos e gestores de clínicas e hospitais que querem se preparar para o mercado atual.",
    align: "left",
  },
];

const INTERVAL = 5000;

export function BannerSlide() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % BANNERS.length), INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section aria-label="Banner" className="relative w-full overflow-hidden pt-[65px]">
      <div className="relative w-full aspect-[3/4] sm:aspect-[16/7] lg:aspect-[16/5]">
        {BANNERS.map((banner, i) => (
          <div
            key={banner.src}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          >
            {/* Mobile image (text on top, photo below) */}
            <Image
              src={banner.mobileSrc ?? banner.src}
              alt={banner.alt}
              fill
              className="object-cover sm:hidden"
              priority={i === 0}
              sizes="100vw"
            />
            {/* Desktop / tablet image */}
            <Image
              src={banner.src}
              alt={banner.alt}
              fill
              className="object-cover hidden sm:block"
              priority={i === 0}
              sizes="100vw"
            />

            {(banner.title || banner.subtitle) && (
              <>
                {/* Mobile readability gradient — fades from top */}
                <div
                  className="absolute inset-0 pointer-events-none sm:hidden"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,30,60,0.55) 0%, rgba(0,30,60,0.2) 36%, transparent 56%)",
                  }}
                />
                {/* Desktop subtle gradient on text side */}
                <div
                  className="absolute inset-0 pointer-events-none hidden sm:block"
                  aria-hidden="true"
                  style={{
                    background:
                      banner.align === "right"
                        ? "linear-gradient(to left, rgba(0,30,60,0.55) 0%, rgba(0,30,60,0.2) 40%, transparent 65%)"
                        : "linear-gradient(to right, rgba(0,30,60,0.55) 0%, rgba(0,30,60,0.2) 40%, transparent 65%)",
                  }}
                />

                <div className="absolute inset-x-0 top-0 h-[40%] flex items-center justify-center sm:inset-0 sm:h-full sm:justify-start">
                  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full flex justify-center sm:justify-start">
                    <div
                      className={`max-w-[88%] text-center sm:max-w-lg sm:text-left lg:max-w-xl text-white ${
                        banner.align === "right" ? "sm:ml-auto sm:text-right" : ""
                      }`}
                    >
                      {banner.title && (
                        <h2 className="font-bold leading-[1.15] text-3xl sm:text-3xl lg:text-5xl font-[var(--font-plus-jakarta)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                          {banner.title}
                        </h2>
                      )}
                      {banner.subtitle && (
                        <p className="mt-3 sm:mt-3 lg:mt-4 text-[15px] leading-relaxed sm:text-base lg:text-lg text-white/95 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
                          {banner.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {BANNERS.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
