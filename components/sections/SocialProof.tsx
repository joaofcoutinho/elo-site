import Image from "next/image";

const CLIENTS = [
  { name: "Hospital Meridional Serra",     logo: "/logos-marcas/meridional-serra.png" },
  { name: "Hospital Meridional Vitória",   logo: "/logos-marcas/meridional-vitoria.png" },
  { name: "Hospital Praia da Costa",       logo: "/logos-marcas/meridional-praia-da-costa.png" },
  { name: "Hospital São Luiz",             logo: "/logos-marcas/meridional-sao-luiz.png" },
  { name: "Hospital São Mateus",           logo: "/logos-marcas/meridional-sao-mateus.png" },
  { name: "Otoimagem Aldeota",             logo: "/logos-marcas/oto-aldeota.png" },
  { name: "Otoimagem Caucaia",             logo: "/logos-marcas/oto-caucaia.png" },
  { name: "Oto Santos Dumont",             logo: "/logos-marcas/oto-santos-dumont.png" },
  { name: "Hospital Encore",               logo: "/logos-marcas/hospital-encore.png" },
  { name: "Instituto de Neurologia",       logo: "/logos-marcas/instituto-neurologia.png" },
  { name: "Hospital Medical Palmas",       logo: "/logos-marcas/medical-palmas.png" },
];

export function SocialProof() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section
      aria-label="Parceiros e clientes"
      className="py-6 bg-[#F7FAFD] border-y border-[#E2EDF5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <p className="text-center text-[#878787] text-sm font-medium tracking-wider uppercase">
          Marcas que confiam na Elo e-Health
        </p>
      </div>

      <div className="relative" aria-hidden="true">
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #F7FAFD, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #F7FAFD, transparent)" }}
        />

        <div className="flex gap-8 animate-marquee">
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="inline-flex items-center justify-center flex-shrink-0 w-64"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={280}
                height={120}
                className="object-contain h-28 w-auto max-w-[280px]"
                sizes="280px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
