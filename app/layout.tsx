import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, DM_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Grain from "@/components/Grain";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DREAM GARAGE — Some dreams are built on wheels",
  description:
    "A personal automotive collection. Seven machines. One dream garage. Established 16.11.24.",
  openGraph: {
    title: "DREAM GARAGE",
    description: "A personal automotive collection. Seven machines. One dream garage.",
    type: "website",
    images: ["/images/hero-mclaren-gt.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#EAE7E0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bodoni.variable} ${manrope.variable} ${dmMono.variable} relative bg-paper text-ink`}
      >
        <a
          href="#main"
          className="fixed left-4 top-4 z-[200] -translate-y-24 bg-ink px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-paper transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Grain />
        <ScrollProgress />
        <Nav />
        {children}
      </body>
    </html>
  );
}
