# HANDOFF — Go + Rust + PostgreSQL — Controle de Estudos

**Release funcional:** v1.0.0  
**Data de auditoria:** 31/08/2026  
**Repositório:** `luandev93/Go`  
**Branch operacional:** `main`  
**Publicação:** GitHub Pages  
**Arquitetura:** PWA estático, client-side, `localStorage`, sem backend.

## 1. Baseline funcional

| Trilha | Aulas |
|---|---:|
| Go | 184 |
| Rust | 42 |
| PostgreSQL | 35 |

Meta global: **1000 horas = 3.600.000 segundos**.

Cada trilha possui chave de progresso independente:

- `aprenda_go_progress_v3`
- `aprenda_rust_progress_v1`
- `postgresql_progress_v1`

Apenas aulas efetivamente concluídas entram no tempo estudado e na meta global.

## 2. Fonte de verdade do conteúdo

- `playlist.csv` → Go
- `rust-playlist.csv` → Rust
- `postgresql-playlist.csv` → PostgreSQL

O catálogo deve permanecer fiel às playlists. Não criar aulas artificiais, não alterar duração para melhorar métricas e não misturar estados entre cursos.

O JavaScript transforma cada linha em `id`, `videoId`, `title`, `duration`, `seconds` e URL do YouTube.

## 3. Padrão canônico de identidade visual

Existe **uma identidade do aplicativo** e **três identidades de tecnologia**, mais o ícone específico de progresso.

### Identidade do aplicativo

Fonte única:

`a_clean_vector_cartoon_illustration_on_a_dark_navy.png`

Uso aprovado:

- favicon;
- ícone do PWA;
- atalho/ícone instalado na área de trabalho ou launcher, via `manifest.json`;
- marca do rodapé;
- ícone visual do botão `Download` quando a instalação nativa estiver disponível.

Não criar outro `icon.svg` para representar o aplicativo.

### Logos das tecnologias

Cada tecnologia usa somente seu SVG local:

- Go → `go.svg`
- Rust → `rust.svg`
- PostgreSQL → `postgres.svg`

Locais canônicos:

1. navegação lateral desktop;
2. navegação inferior mobile;
3. cards de progresso por curso.

Os logos não devem receber quadrados coloridos artificiais, emojis ou SVG duplicado. O asset local é a fonte de verdade.

### Progresso

`progress.svg` é exclusivo da função **Progresso**.

Ele aparece:

- na navegação lateral desktop;
- na navegação inferior mobile.

Não substituir o logo de uma tecnologia pelo ícone de progresso.

## 4. Limpeza realizada

Removidos por não terem mais função após a padronização:

- `icon.svg` — identidade antiga do aplicativo;
- `rust-white.svg` — variante não utilizada do logo Rust.

A documentação anterior também continha referências a `ui-enhancements.js` e `fix-v22.js`, arquivos que não fazem parte do baseline atual; essas referências foram removidas da documentação.

## 5. Instalação PWA

O botão do rodapé é `#nativeInstall`.

Fluxo:

`beforeinstallprompt` → botão `Download` → prompt nativo → instalação PWA.

Não existe download falso de HTML/ZIP.

O mesmo asset principal do aplicativo é usado visualmente no botão de instalação.

A disponibilidade do botão continua dependente do navegador. O botão permanece oculto quando `beforeinstallprompt` não é fornecido.

## 6. Cache

A release funcional continua sendo **v1.0.0**.

A revisão técnica atual é **v35**:

- HTML;
- CSS;
- JavaScript;
- manifest;
- Service Worker;
- SVGs;
- ícone do aplicativo.

O Service Worker usa `aprenda-go-v35`.

A versão técnica de cache não representa uma nova release funcional.

## 7. Progresso e linha do tempo

O progresso permanece somente no navegador.

A linha do tempo usa:

`study_timeline_v1`

Ela é um snapshot local acumulativo, não um diário imutável nem histórico sincronizado.

Arquitetura futura:

`PWA → API → PostgreSQL → study_events → timeline`

Não introduzir backend, autenticação ou Neon apenas para esta fase.

## 8. Auditoria funcional relevante

O comportamento de `Marcar visíveis` foi corrigido para respeitar simultaneamente:

- busca;
- filtro `Todas`;
- filtro `Não assistidas`;
- filtro `Concluídas`.

Isso evita marcar aulas fora do conjunto realmente visível.

As funções de progresso, meta de 1000h, timeline, navegação e persistência foram preservadas.

## 9. CSS e regra de continuidade

Arquivos atuais:

- `style.css`
- `ui-enhancements.css`
- `ui-v19.css`

Não criar `ui-v20.css`, `ui-v21.css`, `fix-v35.css` ou novas camadas apenas para corrigir uma regressão.

Antes de alterar CSS:

1. identificar a fonte de verdade;
2. corrigir a implementação existente;
3. testar desktop e mobile;
4. verificar assets;
5. verificar PWA/cache;
6. verificar ausência de duplicações.

## 10. Regra de ouro

> Não reinventar o que já funciona.

Não alterar sem necessidade:

- playlists;
- quantidade real de aulas;
- chaves `localStorage`;
- regra das 1000h;
- separação dos cursos;
- estrutura PWA;
- release v1.0.0.

Toda evolução deve ser incremental, testável, reversível e sem duplicação.
