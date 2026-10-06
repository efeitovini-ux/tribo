# Tribo

Página de venda e página pós-compra da **Tribo**, o clube por assinatura de quem organiza a vida com o
[Meu Segundo Cérebro](https://prumo.digital/). Projeto da **Agência Prumo**.

**No ar:** [tribo.prumo.digital](https://tribo.prumo.digital/)

## O que tem aqui

| Rota | Para que serve |
|---|---|
| `/` | Página de venda, para anúncio, bio e divulgação |
| `/obrigado/` | Abre depois da compra do Meu Segundo Cérebro: confirma a entrega primeiro e convida para a Tribo depois, com uma saída honesta para quem recusa |
| `/termos/` e `/privacidade/` | Termos da assinatura e política de privacidade (LGPD) |

## Destaques

- **Rede animada no topo:** vários cérebros conectados e um ponto marcado "você" entrando na rede.
- **Seletor de áreas da vida:** a pessoa escolhe uma das nove áreas e vê o canal do Discord e um exemplo de desafio.
- **Mesma família visual do Meu Segundo Cérebro:** tinta, névoa e menta, com post-its como o momento em que tudo fica simples.
- **Acessível:** contraste mínimo de 4.5:1, textos a partir de 16 px, áreas de toque de 44 px, navegação por teclado e animações desligadas para quem pede menos movimento.
- **Leve:** sem biblioteca de componentes e sem pacote de ícones; animações em SVG.

## Stack

Vite · React · TypeScript · Tailwind CSS · Framer Motion · Vercel

```
npm install
npm run dev
npm run build
```

Os textos, links da Kiwify e o conteúdo das áreas ficam em `src/data/conteudo.ts`.
