---
name: "Brisa"
description: "Sistema visual implementado — Hotel & pousada"
colors:
  primary: "#244956"
  background: "#f6f3eb"
  text: "#244956"
  surface: "#e1e9e6"
  secondary-surface: "#dce6e9"
  on-primary: "#fff"
  frame-background: "#09090b"
  frame-text: "#f5f5f7"
  focus: "#ff2d60"
typography:
  display:
    fontFamily: "Georgia, serif"
    fontSize: "65px"
    fontWeight: 400
    lineHeight: 1.09
    letterSpacing: "-2.5px"
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    lineHeight: 1.5
---

# Design System: Brisa

## Overview

Hospitalidade serena com azul acinzentado, creme e fotografia panorâmica. Marca e títulos serifados acompanham o cartão de suíte em arco.

Registro descritivo do código atual, com autoridade de preservação da [referência pública](https://lofranotecnologia.com.br/modelos/brisa). Fontes normativas: [estilos do modelo](../src/demo.css), [base compartilhada](../src/base.css), [componentes da demonstração](../src/Demo.jsx) e [moldura de distribuição](../src/App.jsx). Layout, contraste e overflow visual permanecem não verificados em navegador; valores abaixo são declarações de fonte, não medições de renderização.

## Colors

Azul profundo conduz texto e ação; superfícies azuladas distinguem suíte e momentos. A abertura mantém texto claro sobre fotografia e gradientes. O frontmatter registra cores principais por papel; variações locais permanecem no CSS. A moldura LOFRANO conserva fundo escuro, texto claro e foco rosa. Paleta fixa, sem alternância de tema.

## Typography

Georgia aparece em marca, títulos e abas de suítes; Arial/Helvetica no corpo, com detalhes pontuais em Arial. O título principal passa a (44px) até (760px). Manrope e DM Sans são fontes locais de [`assets/`](../assets/); Georgia, Arial e Helvetica dependem das alternativas do sistema. O token display descreve o título principal em desktop. A base define h2 móvel (34px), com espaçamento de letras (-1.3px), até (760px); regras mais específicas do modelo prevalecem.

## Layout

Hero de (600px), introdução centralizada, hospedagem em duas colunas e momentos em três. Até (760px), hero usa (510px), hospedagem/momentos viram uma coluna e os espaços laterais passam majoritariamente a (7%).

A moldura organiza autoria e links acima da demonstração, guia abaixo e rodapé final. Cabeçalho e rodapé permitem quebra; até (600px), o guia reduz o padding para (40px 20px).

## Elevation & Depth

Gradientes sobre a fotografia e sobreposição de texto compõem a abertura; áreas de hospedagem usam tons e bordas, sem sombras.

## Shapes

Cartão da suíte em arco (120px 120px 0 0); botões de noites quadrados (30px), ação retangular e abas em linhas. A imagem conceitual está em [`assets/brisa.webp`](../assets/brisa.webp); preservar seu recorte definido pelo CSS.

## Components

- Suítes: seleção troca conteúdo e limpa a simulação; aba ativa fica em itálico e reforça a borda inferior.
- Noites: contador de (1) a (7), iniciado em (2). Botões desabilitam nos limites e reduzem opacidade para (0.4).
- Disponibilidade: ação mostra status demonstrativo; mudar suíte ou noites limpa a confirmação.
- Estados compartilhados: Âncoras, botões e seletores da demonstração sobrescrevem o foco para contorno da cor corrente (3px), afastado (5px); a moldura usa rosa. A moldura inverte o botão de reinício para fundo branco no hover. As interações do modelo usam os estados descritos acima; não há variante de hover adicional declarada para elas. Reiniciar remonta a demonstração e restaura o estado local.
- Movimento: a base usa rolagem suave; a preferência por movimento reduzido troca a rolagem CSS para automática e reduz durações de animação/transição para (0.01ms).

## Do's and Don'ts

- **Do:** Preservar o arco, os títulos serifados e a calma das superfícies azuladas.
- **Do:** manter avisos de conceito fictício, foco visível e estados de seleção coerentes com os controles.
- **Don't:** Apresentar a disponibilidade ilustrativa como reserva ou inventário real.
- **Don't:** interpretar a moldura compartilhada como autorização para substituir a identidade visual do modelo.
