import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BG Innova | Soluciones Tecnológicas y Transformación Digital",
  description: "Desarrollo de software a medida, consultoría IT y servicios tecnológicos avanzados para Startups y PYMES. Elevando la innovación más allá de los límites.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "BG Innova | Soluciones Tecnológicas y Transformación Digital",
    description: "Desarrollo de software a medida, consultoría IT y servicios tecnológicos avanzados para Startups y PYMES. Elevando la innovación más allá de los límites.",
    url: "https://www.bginnova.com/",
    siteName: "BG iNNOVA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BG Innova - Ingeniería sin Fronteras",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BG Innova | Soluciones Tecnológicas",
    description: "Desarrollo de software a medida y consultoría IT.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-brand-teal/30 selection:text-brand-teal">
        {children}
      </body>
    </html>
  );
}
