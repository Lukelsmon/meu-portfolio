"use client";
/**
 * THEME TOGGLE — Botão de troca entre Modo Claro e Modo Escuro
 * ------------------------------------------------------------
 * Alterna entre:
 * - Tema Claro: Branco + Amarelo Forte
 * - Tema Escuro: Preto + Ciano
 *
 * Por que existe a variável "mounted"?
 * O Next.js gera o HTML primeiro no servidor, onde ainda não é
 * possível saber qual tema o usuário escolheu da última vez (essa
 * informação só existe no navegador, no localStorage). Por isso,
 * esperamos o componente "montar" no cliente antes de decidir qual
 * ícone mostrar — isso evita erro de hydration mismatch.
 * ------------------------------------------------------------
 */

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Placeholder do mesmo tamanho do botão, evitando "pulo" de layout
  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  // Função chamada ao clicar: inverte o tema atual
  const alternarTema = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={alternarTema}
      aria-label="Alternar entre modo claro e escuro"
      className="
        w-9 h-9 flex items-center justify-center rounded-full
        border border-border text-primary
        hover:bg-primary hover:text-background
        transition-colors duration-300
      "
    >
      {theme === "light" ? <HiMoon size={18} /> : <HiSun size={18} />}
    </button>
  );
}