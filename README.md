# Go + Rust — Controle de Estudos

Aplicação web/PWA para acompanhar uma jornada contínua de estudos em programação. O projeto começou com **Go** e **Rust**, mas a arquitetura agora é preparada para receber novas linguagens, cursos e aulas sem alterar o conceito central.

## Objetivo

O objetivo deixou de ser apenas concluir playlists individuais. O projeto passa a representar uma **jornada global de 1000 horas de estudo**.

Cada linguagem continua tendo seu próprio conteúdo e seu próprio progresso interno, mas todas contribuem para uma única meta:

> **1000 horas de estudo = 100% da jornada.**

Assim, Go, Rust, Python, C/C++, JavaScript ou qualquer futura linguagem podem fazer parte da mesma evolução.

## Modelo de progresso

O painel de progresso utiliza três níveis diferentes:

### 1. Progresso global

A métrica principal é:

```text
horas estudadas em todos os conteúdos / 1000 horas × 100
```

Exemplo:

| Conteúdo | Horas estudadas | Contribuição para 1000h |
|---|---:|---:|
| Go | 21h17min | 2,13% |
| Rust | 8h | 0,80% |
| Python | 0h | 0,00% |
| **Total** | **29h17min** | **2,93%** |

A contribuição de uma linguagem para a meta global não depende da quantidade de aulas existentes nela. Ela depende do **tempo efetivamente estudado**.

### 2. Progresso interno da linguagem

Cada linguagem também pode mostrar seu próprio percentual em relação ao conteúdo cadastrado.

Por exemplo:

```text
Go
21h17min estudadas / 21h17min cadastradas = 100%
```

Esse percentual responde à pergunta **"quanto deste conteúdo eu concluí?"**, enquanto a meta global responde **"quanto da minha jornada de 1000 horas eu percorri?"**.

### 3. Progresso por curso/aula

Cada aula pode ser marcada individualmente. O tempo da aula é contabilizado quando ela é concluída.

## Conteúdos atuais

### Go

- **184 aulas**
- Aproximadamente **21h17min** de conteúdo
- Títulos, duração e links individuais
- Filtro por título
- Conclusão em lote das aulas visíveis
- Progresso independente

### Rust

- **42 aulas**
- Playlist independente
- Títulos, duração e links individuais
- Progresso separado de Go

### Próximas linguagens

A arquitetura foi pensada para permitir adicionar novas trilhas sem reconstruir o aplicativo.

Exemplo futuro:

```text
Go
Rust
Python
TypeScript
C
C++
Java
SQL
Docker
Kubernetes
...
```

A meta continua sendo a mesma: **1000 horas globais**.

## Recursos

- Aba **Go**
- Aba **Rust**
- Aba **Progresso**
- Meta global de **1000 horas**
- Contribuição individual de cada linguagem para a meta global
- Progresso interno de cada linguagem
- Checkboxes por aula
- Persistência local via `localStorage`
- Tempo estudado
- Tempo restante
- Percentual de conclusão
- Filtro por título
- Conclusão em lote das aulas filtradas
- Interface responsiva para celular e desktop
- PWA quando o navegador disponibiliza instalação nativa
- Cache offline básico via Service Worker

## Como adicionar conteúdo

A ideia arquitetural é que o crescimento do catálogo não exija reconstruir a aplicação.

A hierarquia planejada é:

```text
Linguagem
  └── Curso
       └── Aula
            ├── título
            ├── duração em segundos
            ├── ordem
            └── URL
```

Novas aulas podem ser acrescentadas ao catálogo preservando o histórico das aulas já concluídas.

## Cálculo de duração de playlists

Para levantar a duração total de playlists do YouTube e preparar novos conteúdos para o controle, uma ferramenta útil é o **UTubeToolkit — YouTube Playlist Duration Calculator**.

Ela permite informar uma URL de playlist e obter métricas como duração total, quantidade de vídeos, duração média, vídeo mais longo/curto e estimativas de tempo em diferentes velocidades de reprodução. Também oferece exportação dos dados da playlist em CSV ou JSON. citeturn0search0

urlUTubeToolkit — YouTube Playlist Duration Calculatorhttps://utubetoolkit.com/youtube-playlist-duration-calculator/?utm_source=chatgpt.com

Esse tipo de ferramenta pode ser utilizado como etapa auxiliar para **catalogação de novas trilhas**. O controle de estudos continua sendo a fonte do progresso pessoal e dos checkboxes.

## Precisão temporal

As durações devem ser tratadas internamente em **segundos**, preferencialmente como `BIGINT` no banco de dados.

Exemplo:

```text
5min 09s = 309 segundos
```

Isso evita perda de precisão ao somar centenas ou milhares de aulas.

A meta global de 1000 horas equivale a:

```text
3.600.000 segundos
```

## Arquitetura de dados planejada

A estrutura de longo prazo segue:

```text
language
  └── course
       └── lesson
            └── lesson_progress
```

Com PostgreSQL preparado para:

- linguagens;
- cursos;
- aulas;
- duração em segundos;
- URLs de origem;
- progresso por aula;
- usuários;
- dispositivos;
- sincronização futura;
- histórico de conclusão;
- conteúdos ativos/inativos.

## Railway

O projeto de infraestrutura **ESTUDOS** foi criado no Railway com PostgreSQL persistente.

O banco foi planejado como camada de dados para a evolução do projeto, enquanto o frontend continua podendo funcionar de forma independente com `localStorage`.

Arquitetura alvo:

```text
GitHub Pages / PWA
        │
        ▼
Frontend de Estudos
        │
        │ sincronização futura
        ▼
API
        │
        ▼
PostgreSQL — Railway
```

O uso de `localStorage` como fallback permite continuar estudando mesmo sem depender da API.

## Escalabilidade do catálogo

O projeto deve crescer **por dados, não por código**.

Adicionar uma nova linguagem não deve exigir uma nova página específica. O modelo deve permitir:

```text
INSERT language
INSERT course
INSERT lessons
```

e o frontend descobrir automaticamente o novo conteúdo.

Essa decisão é importante porque a meta é continuar adicionando aulas e linguagens conforme a jornada de estudo avançar.

## Persistência

No modo atual, o progresso é salvo automaticamente no navegador.

Isso significa que limpar os dados do navegador ou mudar de dispositivo não transfere automaticamente o histórico.

A arquitetura PostgreSQL/Railway prepara a próxima etapa: **sincronização multi-dispositivo**.

## Instalação no celular

Quando publicado em HTTPS e atendendo aos requisitos de PWA, o navegador pode disponibilizar a instalação nativa.

Caso o prompt de instalação não apareça, utilize as opções nativas do navegador, como **Adicionar à tela inicial** ou **Instalar aplicativo**, quando disponíveis.

## Estrutura do projeto

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
├── .nojekyll
└── .github/
    └── workflows/
        └── deploy-pages.yml
```

## Tecnologias

- HTML5
- CSS3
- JavaScript
- LocalStorage
- Web App Manifest
- Service Worker
- Progressive Web App
- PostgreSQL
- Railway
- GitHub Actions
- GitHub Pages

## Publicação

O frontend é publicado pelo **GitHub Pages** através de GitHub Actions.

O projeto também possui infraestrutura PostgreSQL no Railway para a evolução da camada de dados.

## Status

O projeto está em evolução como um **controle de jornada de estudos de 1000 horas**.

Atualmente existem trilhas de **Go** e **Rust**. Novas linguagens e cursos podem ser incorporados sem alterar a meta global.

### Princípio central

> **As linguagens são os caminhos. As 1000 horas são a jornada.**
