import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Never Miss Another Customer Call | Valtrix OÜ — Smart Phone Receptionist",
  description:
    "An intelligent call assistant that answers calls, gathers customer details, and sends you everything you need — instantly. Built for electricians, plumbers, HVAC, and trade professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-zinc-100`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
