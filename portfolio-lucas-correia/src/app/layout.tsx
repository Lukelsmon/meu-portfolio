/**
 * LAYOUT RAIZ DA APLICAÇÃO
 * ------------------------------------------------------------
 * Este arquivo envolve TODA a aplicação (todas as seções do
 * portfólio nascem dentro dele, via "page.tsx"). Aqui configuramos:
 *
 * 1. Os metadados do site (título e descrição da aba do navegador)
 * 2. O ThemeProvider, responsável por controlar o Modo Claro/Escuro
 * 3. O Header fixo, que fica visível em todas as seções
 * ------------------------------------------------------------
 */

import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/Header";

// Metadados exibidos na aba do navegador e em compartilhamentos de link
export const metadata: Metadata = {
  title: "Lucas Correia | Portfólio",
  description:
    "Portfólio profissional de Lucas Correia — estudante e entusiasta de programação em formação como desenvolvedor de software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning evita aviso no console, pois o next-themes
    // altera a classe do <html> no navegador antes do React comparar o HTML
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        {/*
          ThemeProvider (next-themes):
          - attribute="class"   -> controla o tema usando a classe .dark
          - defaultTheme="light" -> o site abre no Tema Claro por padrão
          - enableSystem         -> também respeita a preferência do sistema
        */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* Header fica fora do <main> porque é fixo (position: fixed) */}
          <Header />

          {/* Aqui entra o conteúdo de page.tsx (todas as seções do portfólio) */}
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
