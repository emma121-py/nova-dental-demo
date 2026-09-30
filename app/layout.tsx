import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({ src: "../public/fonts/inter-latin.woff2", variable: "--font-inter", display: "swap", weight: "100 900" });
export const metadata: Metadata = {
  title: "Nova Dental | Odontología en Asunción · Demo",
  description: "Una experiencia odontológica moderna y cercana en Asunción, Paraguay. Nova Dental es una clínica ficticia para un proyecto demostrativo.",
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-PY" className={inter.variable}><body>{children}</body></html>;
}
