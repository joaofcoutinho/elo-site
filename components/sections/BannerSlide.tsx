"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const BANNERS = [
  { src: "/banners/banner-1.png", alt: "Elo e-Health" },
  { src: "/banners/banner-2.png", alt: "Elo e-Health" },
  { src: "/banners/banner-3.png", alt: "Elo e-Health" },
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
      <div className="relative w-full aspect-[16/5]">
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
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
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
