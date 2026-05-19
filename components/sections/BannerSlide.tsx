"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Banner = {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "right";
};

const BANNERS: Banner[] = [
  {
    src: "/banners/banner-1-novo.png",
    alt: "Elo e-Health — Serviços, Tecnologia e Educação",
    title: "Serviços, Tecnologia e Educação",
    subtitle: "para médicos e gestores de clínicas e hospitais",
    align: "left",
  },
  {
    src: "/banners/banner-2-novo.png",
    alt: "Elo RDI — telerradiologia com inteligência artificial",
    title: "Elo RDI",
    subtitle:
      "Unimos inteligência artificial, telerradiologia especializada e operação remota para garantir exames perfeitos à primeira tentativa e laudos ágeis de alta precisão 24 horas por dia.",
    align: "left",
  },
  {
    src: "/banners/banner-3-novo.png",
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
      <div className="relative w-full min-h-[460px] sm:min-h-0 sm:aspect-[16/7] lg:aspect-[16/5]">
        {BANNERS.map((banner, i) => (
          <div
            key={banner.src}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          >
            <Image
              src={banner.src}
              alt={banner.alt}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />

            {(banner.title || banner.subtitle) && (
              <>
                {/* Mobile readability gradient — strong fade for text contrast */}
                <div
                  className="absolute inset-0 pointer-events-none sm:hidden"
                  aria-hidden="true"
                  style={{
                    background:
                      banner.align === "right"
                        ? "linear-gradient(to left, rgba(0,30,60,0.85) 0%, rgba(0,30,60,0.65) 50%, rgba(0,30,60,0.3) 100%)"
                        : "linear-gradient(to right, rgba(0,30,60,0.85) 0%, rgba(0,30,60,0.6) 55%, rgba(0,30,60,0.2) 100%)",
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

                <div className="absolute inset-0 flex items-center pb-10 sm:pb-0">
                  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full flex">
                    <div
                      className={`max-w-[92%] sm:max-w-lg lg:max-w-xl text-white ${
                        banner.align === "right" ? "ml-auto sm:text-right" : ""
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
