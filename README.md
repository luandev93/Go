# Go + Rust + PostgreSQL — Controle de Estudos

PWA para acompanhar uma jornada contínua de estudos em programação, com progresso independente por trilha e uma **meta global de 1000 horas**.

## Trilhas atuais

| Trilha | Aulas | Progresso |
|---|---:|---|
| Go | 184 | independente |
| Rust | 42 | independente |
| PostgreSQL | 35 | independente |

### PostgreSQL

A trilha adicionada a partir do catálogo fornecido contém **35 aulas**, preservadas na ordem original, com título, duração em segundos e link direto para cada vídeo.

Os temas presentes incluem:

- instalação e configuração;
- `psql` e pgAdmin;
- usuários e bancos;
- tipos de dados;
- `CREATE TABLE`;
- `INSERT`, `SELECT`, `UPDATE`, `DELETE` e `TRUNCATE`;
- `WHERE`, `ORDER BY`, `LIMIT`, `OFFSET` e `BETWEEN`;
- agregações e aliases;
- `INNER JOIN`;
- views e materialized views;
- arrays e JSON;
- tabelas herdadas;
- subqueries;
- backup/restauração com `pg_dump`;
- funções de strings;
- introdução a procedimentos armazenados.

A trilha está catalogada em `postgresql-playlist.csv`.

## Modelo de progresso

Existem três níveis:

### 1. Meta global — 1000 horas

Todo conteúdo concluído contribui para uma única jornada:

```text
Go + Rust + PostgreSQL + futuras trilhas
                    ↓
              1000 horas
```

1000 horas = **3.600.000 segundos**.

O tempo de uma aula somente entra na meta quando a aula é marcada como concluída.

### 2. Progresso independente

Cada trilha possui:

- checkbox próprio;
- percentual próprio;
- tempo estudado;
- tempo restante;
- total de aulas;
- armazenamento independente no `localStorage`.

Marcar PostgreSQL não altera Go ou Rust.

### 3. Amplitude do conteúdo

O painel de Progresso diferencia:

> **progresso da playlist** ≠ **domínio completo da tecnologia**

O mapa de domínios é uma estimativa visual baseada nos títulos das aulas. Ele não pretende substituir prática, documentação, exercícios ou projetos reais.

## Interface

O frontend segue uma estética **developer-first**, inspirada em IDEs e terminais:

- Go em azul;
- Rust em laranja;
- PostgreSQL em roxo;
- painel de progresso geral;
- meta de 1000 horas;
- navegação lateral no desktop;
- navegação inferior no celular;
- filtros de aulas;
- busca;
- links diretos para o YouTube;
- PWA com instalação nativa quando disponibilizada pelo navegador.

## Arquitetura preparada para crescimento

A aplicação foi estruturada para receber novas trilhas conforme a jornada avançar:

```text
Linguagem / Tecnologia
        ↓
      Curso
        ↓
      Aula
        ↓
  Progresso individual
        ↓
  Meta global de 1000h
```

O próximo passo natural é transformar esse catálogo em dados dinâmicos, permitindo adicionar novas linguagens sem alterar o núcleo do frontend.

## Arquivos principais

```text
.
├── index.html
├── style.css
├── app.js
├── playlist.csv
├── rust-playlist.csv
├── postgresql-playlist.csv
├── manifest.json
├── sw.js
├── icon.svg
├── README.md
└── .github/workflows/
```

## Persistência atual

O progresso é salvo automaticamente no navegador através de `localStorage`.

Isso permite funcionamento sem backend, mas o histórico permanece vinculado ao navegador/dispositivo.

## Próxima evolução

A arquitetura planejada para a evolução do projeto é:

```text
GitHub Pages / PWA
        │
        ▼
Frontend de Estudos
        │
        ▼
API
        │
        ▼
PostgreSQL / Railway
```

Isso permitirá futuramente:

- login;
- sincronização entre dispositivos;
- histórico de estudo;
- catálogo dinâmico;
- novas linguagens e cursos;
- alteração de playlists sem reconstruir o frontend;
- estatísticas históricas.

## Princípio central

> **As linguagens são os caminhos. As 1000 horas são a jornada.**
