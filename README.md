# Aprenda Go — Controle de Estudos

Aplicação web estática para acompanhar uma playlist de **184 aulas de Go**, marcar aulas concluídas e acompanhar o avanço por tempo e por domínio de estudo.

## Recursos

- 184 aulas com título, duração e link para o vídeo
- Checkboxes com persistência em `localStorage`
- Contagem de aulas concluídas
- Tempo estudado e tempo restante
- Filtro por título
- Conclusão em lote das aulas visíveis
- Aba **Progresso** com mapa estimado de domínio
- Instalação PWA quando o navegador libera o prompt nativo
- Cache offline básico via Service Worker

## Estrutura

```text
.
├── index.html
├── style.css
├── app.js
├── playlist.csv
├── manifest.json
├── sw.js
├── icon.svg
├── README.md
└── .github/workflows/deploy-pages.yml
```

## Progresso

O percentual da playlist é exato e corresponde às aulas marcadas como concluídas.

O **Mapa de Domínio Go** é uma estimativa pedagógica baseada nos temas identificados nos títulos das aulas. Ele não representa certificação nem domínio completo da linguagem: documentação, prática, testes e projetos continuam necessários.

## Instalação no celular

A seta de instalação só é exibida quando o navegador disponibiliza o evento nativo de instalação. Isso evita mostrar um botão que não consegue instalar o aplicativo.

## Publicação

O projeto usa GitHub Actions para publicar automaticamente no GitHub Pages a cada alteração na branch `main`.

## Tecnologias

HTML, CSS, JavaScript puro, Web App Manifest, Service Worker e GitHub Pages.
