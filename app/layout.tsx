import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Syne } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { company, siteUrl } from "@/lib/site";

import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "Hofnie Trading CC offers construction, renovation, and other property-related work in Windhoek, Ondangwa, Oshakati, and Ongwediva.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hofnie Trading CC | Construction in Windhoek and northern Namibia",
    template: `%s | ${company.name}`,
  },
  description,
  applicationName: company.name,
  authors: [{ name: company.name }],
  creator: company.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_NA",
    siteName: company.name,
    title: "Hofnie Trading CC | Construction in Windhoek and northern Namibia",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hofnie Trading CC | Construction in Windhoek and northern Namibia",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#07080b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${grotesk.variable}`}>
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
