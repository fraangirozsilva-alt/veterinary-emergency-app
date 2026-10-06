import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "PetFirst — Veterinary Emergency Guide",
  description:
    "Clear, step-by-step first aid guidance for pet emergencies, with what to do and what to avoid while you get to a vet.",
};

export const viewport: Viewport = {
  themeColor: "#c8322b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-dvh font-sans antialiased">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
