# Go + Rust — Controle de Estudos

Aplicação web estática para acompanhar conteúdos de estudo de **Go** e **Rust**, marcar aulas concluídas e visualizar o progresso de cada linguagem de forma independente.

## Objetivo

O projeto funciona como um painel pessoal de estudo para playlists e trilhas técnicas. Cada linguagem possui seu próprio conteúdo, seus próprios checkboxes, seu próprio tempo estudado e seu próprio progresso salvo no navegador.

## Conteúdos atuais

### Go

- Playlist com **184 aulas**
- Aproximadamente **21h17min** de conteúdo
- Títulos, duração e links individuais
- Filtro por título
- Conclusão em lote das aulas visíveis
- Progresso salvo localmente

### Rust

- Playlist independente com **42 aulas**
- Títulos, duração e links individuais
- Progresso separado do conteúdo de Go
- Checkboxes e tempo estudado independentes

## Recursos

- Aba **Go**
- Aba **Rust**
- Aba **Progresso**
- Checkboxes com persistência em `localStorage`
- Progresso independente por linguagem
- Contagem de aulas concluídas
- Tempo estudado
- Tempo restante
- Percentual de conclusão
- Filtro por título
- Conclusão em lote das aulas filtradas
- Comparação visual entre os dois conteúdos
- Interface responsiva para celular e desktop
- Mapa estimado dos principais domínios técnicos
- Instalação como PWA quando o navegador disponibiliza o prompt nativo
- Cache offline básico via Service Worker

## Como funciona o progresso

Os dados de progresso não são compartilhados entre as linguagens.

Marcar uma aula em **Go** não altera o progresso de **Rust**, e marcar uma aula em Rust não altera Go.

Cada conteúdo possui uma chave própria no `localStorage`, permitindo acompanhar as duas trilhas separadamente no mesmo navegador.

O painel **Progresso** consolida visualmente os dois conteúdos sem misturar os percentuais ou os tempos.

## Mapa de domínio

Além da conclusão literal das playlists, o projeto apresenta um mapa estimado de evolução por domínio técnico.

No caso de Go, os temas incluem:

- Fundamentos da linguagem
- Fluxo e decisões
- Dados e estruturas
- Funções e organização
- Interfaces e abstração
- Concorrência
- Qualidade e confiabilidade
- Ecossistema e produção

Esse mapa é uma estimativa pedagógica baseada nos conteúdos estudados. Ele não representa certificação ou domínio completo das linguagens. Documentação, prática deliberada, exercícios, testes e projetos continuam necessários.

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
- JavaScript puro
- LocalStorage
- Web App Manifest
- Service Worker
- Progressive Web App
- GitHub Actions
- GitHub Pages

## Uso

Abra a aplicação publicada ou o `index.html` em um navegador compatível.

1. Escolha **Go** ou **Rust**.
2. Marque cada aula concluída.
3. Use o filtro para localizar conteúdos específicos.
4. Acompanhe o avanço individual de cada linguagem.
5. Abra a aba **Progresso** para visualizar o estado geral dos estudos.

## Persistência

O progresso é salvo automaticamente no navegador utilizado.

Isso significa que limpar os dados do navegador ou abrir o projeto em outro dispositivo não transfere automaticamente o histórico de estudo.

## Instalação no celular

Quando a aplicação estiver publicada em um ambiente compatível e o navegador liberar o evento nativo de instalação, o botão de instalação poderá abrir o prompt do próprio navegador.

Caso o navegador não disponibilize esse prompt, utilize as opções nativas do menu, como **Adicionar à tela inicial** ou **Instalar aplicativo**, quando disponíveis.

## Publicação

O repositório possui workflow preparado para publicação no GitHub Pages após alterações na branch `main`.

## Status

O projeto está estruturado como uma aplicação de estudo multilíngue, atualmente com trilhas independentes de **Go** e **Rust**. Novas linguagens podem ser adicionadas seguindo o mesmo modelo de conteúdo e persistência separada.
