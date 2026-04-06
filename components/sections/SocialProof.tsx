import Image from "next/image";

const LOGOS = [1, 2, 3, 4, 5, 6, 7];

export function SocialProof() {
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <section
      aria-label="Parceiros e clientes"
      className="py-12 bg-[#F7FAFD] border-y border-[#E2EDF5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-[#878787] text-sm font-medium tracking-wider uppercase">
          Marcas que confiam na Elo e-Health
        </p>
      </div>

      <div className="relative" aria-hidden="true">
        {/* Fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #F7FAFD, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #F7FAFD, transparent)" }}
        />

        <div className="flex gap-6 animate-marquee">
          {doubled.map((n, i) => (
            <div
              key={`logo-${n}-${i}`}
              className="inline-flex items-center justify-center px-8 py-4 min-w-[160px] h-20 rounded-xl border border-[#E2EDF5] bg-white hover:border-[#99C1DD] hover:shadow-sm transition-all duration-300 flex-shrink-0"
            >
              <Image
                src={`/logos-parceiros-elo/${n}.png`}
                alt={`Parceiro ${n}`}
                width={120}
                height={48}
                className="object-contain max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
