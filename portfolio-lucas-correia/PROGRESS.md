# Progresso do Portfólio — Lucas Correia

> Este arquivo documenta o estado atual do projeto para que qualquer pessoa
> (inclusive eu, em outro dia) consiga continuar o desenvolvimento sem
> precisar reler todo o histórico de conversa.

## Stack utilizada

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- framer-motion (animações)
- next-themes (modo claro/escuro)
- react-icons (ícones)
- @tsparticles/react, @tsparticles/engine, @tsparticles/slim (animação de galáxia)

## Paleta de cores (definida em `src/app/globals.css`)

**Tema Claro (padrão):** fundo branco (`#ffffff`), destaque amarelo forte (`#ffc300`)
**Tema Escuro:** fundo preto (`#000000`), destaque ciano (`#00e5ff`)

As cores são controladas por variáveis CSS (`--color-background`, `--color-primary` etc.)
e conectadas ao Tailwind via `@theme inline`. A troca de tema é feita pela
classe `.dark` no `<html>`, controlada pela biblioteca `next-themes`.

## Estrutura de pastas (arquitetura modular)

src/
├── app/
│ ├── layout.tsx ✅ criado e funcionando
│ ├── page.tsx ⏳ ainda vazio
│ └── globals.css ✅ criado e funcionando
├── components/
│ ├── layout/
│ │ ├── Header.tsx ⚠️ COM ERRO — ver seção "Problema em aberto"
│ │ └── ThemeToggle.tsx ✅ criado e funcionando
│ ├── sections/
│ │ ├── Hero.tsx ⏳ vazio (próximo passo)
│ │ ├── About.tsx ⏳ vazio
│ │ ├── Experience.tsx ⏳ vazio
│ │ ├── TechSkills.tsx ⏳ vazio
│ │ ├── Objective.tsx ⏳ vazio
│ │ ├── Projects.tsx ⏳ vazio
│ │ └── Contact.tsx ⏳ vazio
│ └── ui/
│ ├── GalaxyBackground.tsx ⏳ vazio (próximo passo)
│ ├── ProjectCard.tsx ⏳ vazio
│ └── ContactCard.tsx ⏳ vazio
├── data/
│ ├── projects.ts ⏳ vazio
│ └── skills.ts ⏳ vazio
└── types/
└── index.ts ⏳ vazio

## O que já está pronto

1. Projeto Next.js criado com TypeScript + Tailwind + App Router + `src/`.
2. Todas as bibliotecas necessárias instaladas (ver `package.json`).
3. Estrutura de pastas modular criada.
4. `globals.css` com as duas paletas de cor prontas.
5. `layout.tsx` com `ThemeProvider` configurado (tema claro por padrão).
6. `ThemeToggle.tsx` funcionando (botão de sol/lua que troca o tema).
7. Repositório Git conectado e com commits enviados para
   `https://github.com/Lukelsmon/meu-portfolio`.

## ⚠️ Problema em aberto: `Header.tsx`

O arquivo `Header.tsx` está gerando ~48 erros no TypeScript. A causa raiz
identificada: ao colar o código no editor, a tag de abertura `<a` do link do
menu está sendo perdida, deixando os atributos (`key`, `href`, `className`)
"soltos" sem elemento pai. Isso quebra o parser do JSX e gera erros em cadeia.

**Tentativas já feitas sem sucesso:**
- Colar via terminal com `cat > arquivo << EOF` → texto se corrompeu na colagem.
- Selecionar e colar manualmente no editor → mesmo problema se repetiu.

**Próxima tentativa a fazer (ainda não testada):** apagar o arquivo por
completo pelo Explorer (botão direito → Delete) e recriar do zero com
"New File", digitando o nome exatamente como `Header.tsx`, garantindo que o
VSCode não esteja com nenhum estado de autocomplete/snippet interferindo.
Colar o código usando o atalho `CTRL+SHIFT+V` (colar sem formatação), se
disponível, em vez do `CTRL+V` padrão.

Código-fonte completo do `Header.tsx` (versão correta e final) está registrado
no histórico da conversa do Claude — buscar pela mensagem que contém
`export default function Header()`.

## Próximos passos (na ordem)

1. Resolver o erro do `Header.tsx`.
2. Rodar `npm run dev` e confirmar 0 erros no painel "Problemas".
3. Criar `page.tsx` (monta todas as seções na ordem certa).
4. Criar `Hero.tsx` (foto de perfil + apresentação + animação de galáxia "LC").
5. Criar `GalaxyBackground.tsx` (partículas com tsParticles).
6. Seguir para `About.tsx`, `Experience.tsx`, `Objective.tsx`, `TechSkills.tsx`,
   `Projects.tsx` (com o projeto AngularNews completo) e `Contact.tsx`.

## Requisitos do projeto (lembrete geral)

- Header com navegação para: Sobre Mim, Experiência, Objetivo, Projetos, Contato.
- Experiência Profissional: mencionar faculdade em andamento, ensino médio
  concluído, e espaço dizendo que não há experiência de mercado ainda.
- Seção separada de "Experiência Técnica" com:
  - Frameworks: Angular, Tailwind CSS, Node.js
  - Linguagens: JavaScript, HTML, CSS, TypeScript, Python
  - Áreas de interesse: Google Cloud, AWS, Azure, Java, React, MySQL,
    PostgreSQL, MongoDB, Docker
  - Ferramentas: VSCode, GitHub Codespaces, Ubuntu, Git, GitHub
- Objetivo Profissional entre Experiência e Projetos.
- Projetos: 4 no total — 1 completo (AngularNews, com link do GitHub:
  https://github.com/Lukelsmon/AngularNews.git) e 3 vazios/editáveis.
- Contato: Email, Instagram, WhatsApp — formato interativo e inovador
  (não um formulário de texto tradicional).
- Modo escuro funcional (já implementado no ThemeToggle).
- Animação de galáxia com as letras "LC" perto da seção Sobre Mim.
- Gifs/imagens relaxantes no meio e no final da página.
- Site responsivo, interativo, com boa UX/UI.