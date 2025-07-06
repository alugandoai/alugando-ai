import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "mealug.ai - Aluguel Inteligente de Acervos Empresariais",
  description: "Solução definitiva de aluguel corporativo para acervos e equipamentos. Previsibilidade financeira, gestão de contratos e proteção de ativos.",
  keywords: "aluguel corporativo, acervos empresariais, equipamentos, ferramentas, tecnologia compartilhada",
  authors: [{ name: "mealug.ai" }],
  openGraph: {
    title: "mealug.ai - Aluguel Inteligente de Acervos Empresariais",
    description: "Solução definitiva de aluguel corporativo para acervos e equipamentos.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
