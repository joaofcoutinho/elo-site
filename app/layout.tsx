import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elo e-Health | Telerradiologia 24/7 — Laudos Médicos para Clínicas e Hospitais",
  description:
    "Laudos médicos de alta qualidade com agilidade e precisão. A Elo e-Health é referência em telerradiologia, telelaudo e laudo médico remoto no Espírito Santo. Atendemos clínicas e hospitais 24/7.",
  keywords: [
    "telerradiologia",
    "telelaudo",
    "laudo médico remoto",
    "laudos médicos",
    "radiologia",
    "Espírito Santo",
    "clínicas",
    "hospitais",
    "PACS",
    "RIS",
    "diagnóstico por imagem",
  ],
  authors: [{ name: "Elo e-Health" }],
  metadataBase: new URL("https://www.eloe-health.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.eloe-health.com.br",
    siteName: "Elo e-Health",
    title: "Elo e-Health | Telerradiologia 24/7 — Laudos Médicos para Clínicas e Hospitais",
    description:
      "Reduza custos, elimine filas e garanta diagnósticos precisos com a maior empresa de telerradiologia do Espírito Santo.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elo e-Health — Telerradiologia 24/7",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elo e-Health | Telerradiologia 24/7",
    description:
      "Laudos médicos de excelência para clínicas e hospitais. Disponível 24 horas, 7 dias por semana.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": ["Organization", "MedicalBusiness"],
  name: "Elo e-Health",
  url: "https://www.eloe-health.com.br",
  logo: "https://www.eloe-health.com.br/logo-elo-branca.png",
  description:
    "Referência em telerradiologia para clínicas e hospitais. Laudos médicos de excelência, disponíveis 24/7.",
  telephone: ["+55-27-99890-7202", "+55-27-98139-7567"],
  email: "comercial@eloe-health.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. José de Almeida Rebouças, 20 – Ed. Premium Office – Torre Business, sala 413",
    addressLocality: "Vitória",
    addressRegion: "ES",
    addressCountry: "BR",
    postalCode: "29066-370",
  },
  sameAs: [
    "https://www.linkedin.com/company/elo-e-health",
    "https://www.instagram.com/eloe_health",
    "https://www.facebook.com/eloehealth",
  ],
  medicalSpecialty: "Radiology",
  availableService: {
    "@type": "MedicalProcedure",
    name: "Telerradiologia 24/7",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#1A2E44] antialiased">
        <a href="#main-content" className="skip-to-content">
          Ir para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
