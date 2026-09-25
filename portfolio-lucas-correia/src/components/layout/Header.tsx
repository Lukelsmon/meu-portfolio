"use client";
/**
 * HEADER — Menu de navegação principal do portfólio
 * ------------------------------------------------------------
 * Função: permitir que o visitante pule diretamente para qualquer
 * seção do site (Sobre Mim, Experiência, Objetivo, Projetos, Contato).
 *
 * Responsividade:
 * - Desktop: menu horizontal completo, sempre visível.
 * - Mobile: menu "hambúrguer" que abre/fecha com animação suave
 *   (usando a biblioteca framer-motion).
 * ------------------------------------------------------------
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

// Lista central dos links do menu.
// Para adicionar/remover uma seção do menu, basta editar este array —
// nenhum outro lugar do código precisa ser alterado.
const navLinks = [
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Objetivo", href: "#objetivo" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  // Controla se o menu mobile está aberto ou fechado
  const [menuAberto, setMenuAberto] = useState(false);

  // Fecha o menu mobile após o clique em um link
  // (evita o menu sobrepondo a seção que o usuário acabou de acessar)
  const fecharMenu = () => setMenuAberto(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-background/80 backdrop-blur-md
        border-b border-border
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Iniciais do nome, funcionando também como link para o topo do site */}
        <a href="#topo" className="text-2xl font-bold text-primary tracking-wide">
          LC
        </a>

        {/* Menu horizontal — visível apenas em telas médias/grandes */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            
              key={link.href}
              href={link.href}
              className="text-text font-medium hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botão de tema + botão hambúrguer (mobile) */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="md:hidden text-text text-2xl"
            aria-label="Abrir menu de navegação"
          >
            {menuAberto ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Menu mobile — some/aparece com animação de altura + opacidade */}
      <AnimatePresence>
        {menuAberto && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                
                  key={link.href}
                  href={link.href}
                  onClick={fecharMenu}
                  className="text-text font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}