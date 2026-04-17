import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Italianno } from "next/font/google";
import "./globals.css";

const aldine = localFont({
  src: "../../public/fonts/Aldine721BT-Light.otf",
  variable: "--font-aldine",
  display: "swap",
});

const antenna = localFont({
  src: [
    { path: "../../public/fonts/Antenna-Light.otf", weight: "300" },
    { path: "../../public/fonts/Antenna-Regular.otf", weight: "400" },
    { path: "../../public/fonts/Antenna-Medium.otf", weight: "500" },
  ],
  variable: "--font-antenna",
  display: "swap",
});

const italianno = Italianno({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italianno",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://granreservatreviso.com.br"),
  title: {
    default: "Gran Reserva Treviso | Lançamento Granlote Urbanismo — Paulínia/SP",
    template: "%s · Gran Reserva Treviso",
  },
  description:
    "Pré-lançamento Gran Reserva Treviso: residencial fechado de alto padrão em Paulínia com 525 lotes a partir de 300 m², clube completo, heliponto e 80.376 m² de área verde preservada. Realização Granlote Urbanismo.",
  keywords: [
    "Gran Reserva Treviso",
    "Granlote Urbanismo",
    "loteamento Paulínia",
    "alto padrão Paulínia",
    "lançamento imobiliário",
    "residencial fechado Paulínia",
    "lotes 300 m² Paulínia",
    "heliponto loteamento",
  ],
  authors: [{ name: "Granlote Urbanismo" }],
  creator: "Granlote Urbanismo",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://granreservatreviso.com.br",
    siteName: "Gran Reserva Treviso",
    title: "Gran Reserva Treviso — Exclusivo em todos os detalhes",
    description:
      "Residencial fechado de alto padrão em Paulínia. 525 lotes, clube completo, heliponto, 80.376 m² preservados. Realização Granlote Urbanismo.",
    images: [
      {
        url: "/images/fotomontagem-1920.webp",
        width: 1920,
        height: 1140,
        alt: "Fotomontagem aérea do Gran Reserva Treviso",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gran Reserva Treviso",
    description: "Exclusivo em todos os detalhes. Pré-lançamento em Paulínia.",
    images: ["/images/fotomontagem-1920.webp"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#D9D9CD",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${aldine.variable} ${antenna.variable} ${italianno.variable} antialiased`}
    >
      <body className="min-h-full">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateListing",
              name: "Gran Reserva Treviso",
              description:
                "Residencial fechado de alto padrão em Paulínia com 525 lotes a partir de 300 m², clube completo, heliponto e 80.376 m² de área verde preservada.",
              url: "https://granreservatreviso.com.br",
              image: "https://granreservatreviso.com.br/images/fotomontagem-1920.webp",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Paulínia",
                addressRegion: "SP",
                addressCountry: "BR",
              },
              offeredBy: {
                "@type": "Organization",
                name: "Granlote Urbanismo",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
