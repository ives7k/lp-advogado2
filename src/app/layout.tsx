import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advogado Especialista | Defesa Rápida e Eficaz",
  description:
    "Atendimento ágil e estratégico em Direito. Fale agora pelo WhatsApp e receba orientação imediata.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Advogado Especialista | Defesa Rápida e Eficaz",
    description:
      "Atendimento ágil e estratégico em Direito. Fale agora pelo WhatsApp e receba orientação imediata.",
    url: "https://example.com",
    siteName: "Advocacia",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> 
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="#" className="flex items-center gap-2 text-foreground font-semibold">
              <div className="w-8 h-8 rounded bg-[--primary]" />
              <span>Advocacia</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm text-foreground/70">
              <Link href="#areas" className="hover:text-foreground">Áreas</Link>
              <Link href="#diferenciais" className="hover:text-foreground">Diferenciais</Link>
              <Link href="#processo" className="hover:text-foreground">Como funciona</Link>
              <Link href="#sobre" className="hover:text-foreground">Sobre</Link>
              <Link href="#depoimentos" className="hover:text-foreground">Depoimentos</Link>
              <Link href="#faq" className="hover:text-foreground">FAQ</Link>
            </nav>
            <div className="flex items-center gap-2">
              <Button asChild className="bg-[--primary] text-[--primary-foreground] hover:brightness-95">
                <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </Button>
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-foreground"><Menu className="w-5 h-5" /></Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="bg-white text-foreground border-l border-border">
                    <div className="mt-8 flex flex-col gap-4 text-lg">
                      <Link href="#areas">Áreas</Link>
                      <Link href="#diferenciais">Diferenciais</Link>
                      <Link href="#processo">Como funciona</Link>
                      <Link href="#sobre">Sobre</Link>
                      <Link href="#depoimentos">Depoimentos</Link>
                      <Link href="#faq">FAQ</Link>
                      <Button asChild className="mt-4 bg-[--primary] text-[--primary-foreground]">
                        <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </header>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
