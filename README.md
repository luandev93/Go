# Go + Rust + PostgreSQL — Controle de Estudos

**Versão funcional: 1.0.0 · 2026**

PWA estático para acompanhar uma jornada contínua de estudos em Go, Rust e PostgreSQL, com progresso independente por trilha e meta global de **1000 horas**.

> As linguagens são os caminhos. As 1000 horas são a jornada.

## Trilhas atuais

| Trilha | Aulas | Persistência |
|---|---:|---|
| Go | 184 | independente |
| Rust | 42 | independente |
| PostgreSQL | 35 | independente |

Cada trilha possui seu próprio estado de conclusão. O tempo de uma aula somente entra na meta global quando ela é marcada como concluída.

## Interface

A interface é developer-first, dark e orientada a conteúdo.

Padrão visual canônico:

- Go → `go.svg`, azul;
- Rust → `rust.svg`, laranja;
- PostgreSQL → `postgres.svg`, azul PostgreSQL;
- Progresso → `progress.svg`, verde;
- identidade do aplicativo → `a_clean_vector_cartoon_illustration_on_a_dark_navy.png`.

Os logos das tecnologias aparecem na navegação desktop, navegação mobile e cards de progresso. Cada função possui uma única fonte de verdade visual; não usar emojis, variantes duplicadas ou caixas artificiais sobre os logos.

## Ícone do aplicativo

A imagem `a_clean_vector_cartoon_illustration_on_a_dark_navy.png` é a identidade do aplicativo.

Ela é usada como:

- favicon;
- ícone do PWA/atalho instalado;
- marca do rodapé;
- ícone visual do botão `Download` de instalação.

O antigo `icon.svg` não faz mais parte do frontend.

## Persistência

O estado atual é local:

- `aprenda_go_progress_v3`
- `aprenda_rust_progress_v1`
- `postgresql_progress_v1`
- `study_timeline_v1`

Não há login, API, banco remoto ou sincronização entre dispositivos.

## PWA

Arquivos principais:

- `manifest.json`
- `sw.js`
- `a_clean_vector_cartoon_illustration_on_a_dark_navy.png`

A instalação usa o mecanismo nativo do navegador por `beforeinstallprompt`. O botão do rodapé é chamado **Download** e não simula download de HTML ou ZIP.

O cache técnico atual é `v35`. Isso não altera a versão funcional `1.0.0`.

## Arquivos principais

```text
.
├── index.html
├── app.js
├── style.css
├── ui-enhancements.css
├── ui-v19.css
├── go.svg
├── rust.svg
├── postgres.svg
├── progress.svg
├── a_clean_vector_cartoon_illustration_on_a_dark_navy.png
├── playlist.csv
├── rust-playlist.csv
├── postgresql-playlist.csv
├── manifest.json
├── sw.js
├── README.md
└── HANDOFF.md
```

## Arquitetura atual

```text
GitHub Repository
      ↓
GitHub Pages
      ↓
PWA / Browser
      ↓
HTML + CSS + JavaScript
      ↓
CSV + SVG + app icon
      ↓
localStorage
      ↓
Progresso por trilha
      ↓
Meta global 1000h
```

## Arquitetura futura

```text
PWA
 ↓
API
 ↓
PostgreSQL
 ↓
usuário + aulas + study_events + progresso
```

O backend não faz parte do baseline atual.

## Princípios de continuidade

1. Não misturar o progresso das trilhas.
2. Não inventar aulas.
3. Preservar os catálogos.
4. Diferenciar playlist de domínio real da tecnologia.
5. Manter 1000h como meta global.
6. Tratar timeline como local enquanto não houver servidor.
7. Usar uma única fonte visual por função.
8. Preferir correção da implementação existente a novas camadas.
9. Validar desktop, mobile, assets, PWA/cache e ausência de duplicações antes de publicar.

**Release baseline: v1.0.0.**
