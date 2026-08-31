# Aprenda Go + Rust + PostgreSQL — Controle de Estudos

**Versão de referência: 1.0.0 · 2026**

PWA para acompanhar uma jornada contínua de estudos em programação, com progresso independente por trilha e uma **meta global de 1000 horas**.

> **As linguagens são os caminhos. As 1000 horas são a jornada.**

## Trilhas atuais

| Trilha | Aulas | Progresso |
|---|---:|---|
| Go | 184 | independente |
| Rust | 42 | independente |
| PostgreSQL | 35 | independente |

Cada trilha possui seu próprio histórico de conclusão e seu próprio tempo estudado. O conteúdo continua fiel às playlists catalogadas; não há tentativa de transformar conclusão de vídeo em domínio completo da tecnologia.

## Meta global de 1000 horas

Todo conteúdo concluído contribui para uma única jornada:

```text
Go + Rust + PostgreSQL + futuras trilhas
                    ↓
              1000 horas
```

1000 horas = **3.600.000 segundos**.

O tempo de uma aula somente entra na meta quando a aula é marcada como concluída.

## PostgreSQL

A trilha PostgreSQL contém **35 aulas**, preservadas na ordem original, com título, duração em segundos e link direto para cada vídeo.

Os temas catalogados incluem instalação e configuração, `psql`, pgAdmin, usuários e bancos, tipos de dados, tabelas, CRUD, filtros, ordenação, agregações, `JOIN`, views, materialized views, arrays, JSON, tabelas herdadas, subqueries, backup/restauração, funções de strings e introdução a procedimentos armazenados.

O catálogo está em `postgresql-playlist.csv`.

## Interface

O frontend segue uma estética **developer-first**, inspirada em IDEs e terminais:

- Go em azul;
- Rust com símbolo oficial em branco sobre o tema escuro, garantindo contraste;
- PostgreSQL em roxo;
- painel de progresso geral;
- meta de 1000 horas;
- navegação lateral no desktop;
- navegação inferior no celular;
- filtros de aulas;
- busca;
- links diretos para o YouTube;
- relógio e data como registro temporal de estudo;
- linha do tempo de progresso;
- instalação PWA nativa quando disponibilizada pelo navegador;
- identidade visual compartilhada entre Go, Rust e PostgreSQL.

## Persistência atual

O progresso é salvo automaticamente no navegador através de `localStorage`.

Isso permite funcionamento sem backend, mas o histórico permanece vinculado ao navegador/dispositivo. A linha do tempo atual é um registro local; ela ainda não é um histórico sincronizado em servidor.

## PWA

O projeto utiliza:

- `manifest.json`;
- `sw.js`;
- `icon.svg`;
- Service Worker com cache versionado;
- instalação nativa quando o navegador reconhece os critérios de PWA.

A arte principal do aplicativo reúne os símbolos/mascotes de Go, Rust e PostgreSQL e é utilizada como identidade do aplicativo.

## Arquitetura atual

```text
GitHub Pages / PWA
        │
        ▼
Frontend estático
        │
        ├── Go — 184 aulas
        ├── Rust — 42 aulas
        └── PostgreSQL — 35 aulas
                │
                ▼
       progresso por trilha
                │
                ▼
          meta global 1000h
```

## Arquivos principais

```text
.
├── index.html
├── style.css
├── ui-enhancements.css
├── ui-v19.css
├── app.js
├── ui-enhancements.js
├── playlist.csv
├── rust-playlist.csv
├── postgresql-playlist.csv
├── manifest.json
├── sw.js
├── icon.svg
├── README.md
└── HANDOFF.md
```

## Evolução planejada

A aplicação foi desenhada para crescer com a jornada:

```text
Nova linguagem / tecnologia
          ↓
       Playlist
          ↓
        Aulas
          ↓
  Progresso independente
          ↓
     Meta global 1000h
          ↓
 Histórico ao longo dos anos
```

Próximas evoluções possíveis:

- catálogo orientado a dados para adicionar novas trilhas sem reconstruir o frontend;
- login;
- sincronização entre dispositivos;
- histórico persistente no servidor;
- métricas por dia, mês e ano;
- calendário de estudo;
- metas personalizadas;
- integração com PostgreSQL/Neon ou Railway;
- importação/atualização de playlists;
- relatórios de evolução.

## Princípios de continuidade

1. Não misturar o progresso das linguagens.
2. Não inventar aulas para completar uma playlist.
3. Preservar a ordem e a duração dos catálogos.
4. Diferenciar **playlist concluída** de **domínio da tecnologia**.
5. Manter a meta global de 1000 horas como métrica de jornada.
6. Tratar o histórico local como provisório até existir persistência sincronizada.
7. Priorizar mudanças incrementais e verificáveis.

## Publicação

O projeto é preparado para GitHub Pages e pode ser utilizado como PWA no navegador compatível.

Para testar uma atualização de frontend, use uma query de cache-busting, por exemplo:

```text
https://luandev93.github.io/Go/?v=20
```

## Estado da release

**v1.0.0 — baseline funcional e visual.**

Esta versão consolida Go, Rust e PostgreSQL, a meta de 1000 horas, o progresso independente, a linha do tempo local, o relógio/data, o PWA e a identidade visual developer-first. Alterações futuras devem partir deste estado e ser registradas no `HANDOFF.md`.
