# HANDOFF — Aprenda Go + Rust + PostgreSQL

**Release de referência:** v1.0.0  
**Ano:** 2026  
**Repositório:** `luandev93/Go`  
**Publicação:** GitHub Pages  
**Estado:** baseline funcional para continuidade

---

## 1. Objetivo do projeto

Aplicação PWA de controle de estudos para registrar uma jornada de longo prazo em programação.

O projeto acompanha várias tecnologias simultaneamente, mantendo o progresso de cada trilha independente e somando o tempo concluído a uma **meta global de 1000 horas**.

A intenção é continuar adicionando linguagens, bancos, frameworks e outras tecnologias conforme a jornada evoluir.

---

## 2. Estado atual

| Item | Estado |
|---|---|
| Go | 184 aulas catalogadas |
| Rust | 42 aulas catalogadas |
| PostgreSQL | 35 aulas catalogadas |
| Meta global | 1000 horas |
| Progresso por trilha | independente |
| Persistência | `localStorage` |
| Linha do tempo | local, baseada no progresso atual |
| PWA | configurado |
| GitHub Pages | configurado |
| Interface | developer-first / dark |
| Release | **v1.0.0** |

---

## 3. Conteúdo

### Go

Playlist principal com 184 aulas. O catálogo deve permanecer fiel à playlist, preservando ordem, título, duração e URL.

Arquivo: `playlist.csv`.

### Rust

Playlist independente com 42 aulas.

Arquivo: `rust-playlist.csv`.

### PostgreSQL

Playlist independente com 35 aulas, preservadas na ordem catalogada.

Arquivo: `postgresql-playlist.csv`.

O conteúdo de cada playlist não deve ser alterado apenas para melhorar métricas. A métrica deve refletir o conteúdo real.

---

## 4. Regra fundamental de progresso

Cada trilha possui estado próprio.

```text
GO            → progresso Go
RUST          → progresso Rust
POSTGRESQL    → progresso PostgreSQL

                 ↓

             META 1000h
```

Marcar uma aula em uma tecnologia **não pode alterar o percentual ou a lista de concluídas das demais**.

O tempo da aula entra na meta global somente quando ela está concluída.

---

## 5. Meta de 1000 horas

A meta global representa **tempo efetivamente concluído dentro dos catálogos**.

```text
1000h = 3.600.000 segundos
```

Não confundir:

- tempo de playlist;
- tempo marcado como estudado;
- domínio real da tecnologia.

A conclusão de uma playlist não significa domínio completo.

---

## 6. Painel de progresso

O painel geral deve mostrar:

- horas estudadas;
- horas restantes para 1000h;
- percentual da meta;
- progresso Go;
- progresso Rust;
- progresso PostgreSQL;
- amplitude aproximada do conteúdo;
- próximos marcos;
- linha do tempo.

A seção de amplitude deve permanecer claramente identificada como **estimativa**, não como certificação de domínio.

---

## 7. Linha do tempo

Existe uma linha do tempo local para transformar o estudo em histórico ao longo dos anos.

Estado atual:

```text
localStorage
     ↓
progresso atual
     ↓
marco temporal local
```

Limitação conhecida: o histórico ainda não é um diário imutável nem sincronizado entre dispositivos.

Evolução futura recomendada:

```text
Evento de estudo
      ↓
API
      ↓
PostgreSQL
      ↓
histórico por data
      ↓
linha do tempo anual
```

Não declarar que o histórico é permanente enquanto continuar somente no `localStorage`.

---

## 8. Relógio e data

O cabeçalho possui:

- horário atualizado em tempo real;
- data ao lado do horário;
- identificação `REGISTRO DE ESTUDO`.

A função é fornecer contexto temporal para a jornada. O relógio, isoladamente, não constitui registro histórico persistente.

---

## 9. Identidade visual

Padrão atual:

- fundo escuro;
- linguagem visual inspirada em IDE/terminal;
- Go em azul;
- Rust com símbolo branco para alto contraste no tema escuro;
- PostgreSQL em roxo;
- Progresso em verde;
- tipografia monoespaçada nos elementos técnicos;
- cards e bordas discretas;
- navegação lateral no desktop;
- navegação inferior no mobile.

O símbolo Rust deve permanecer **branco** quando utilizado sobre o fundo escuro, conforme decisão visual aprovada.

---

## 10. Ícone do aplicativo

O PWA utiliza a arte composta por:

**Golang + Rust + PostgreSQL**.

A arte foi definida como identidade principal do aplicativo/atalho.

Não substituir o ícone por um símbolo genérico sem decisão explícita.

---

## 11. PWA

Arquivos principais:

- `manifest.json`
- `sw.js`
- `icon.svg`

O Service Worker usa cache versionado.

A release de produto é **1.0.0**. Os parâmetros `?v=N` usados em URLs e cache são apenas mecanismos técnicos de cache-busting e **não representam a versão do produto**.

---

## 12. Instalação

A instalação deve utilizar o mecanismo nativo de PWA do navegador quando disponível.

O botão visual de instalação serve como acionador da instalação nativa quando `beforeinstallprompt` estiver disponível.

Não criar uma instalação simulada nem um download falso de HTML.

---

## 13. Persistência

Atualmente o estado é armazenado no navegador.

Isso significa:

- funciona sem backend;
- é rápido;
- funciona offline após cache adequado;
- não sincroniza automaticamente entre aparelhos;
- pode ser perdido se os dados do navegador forem apagados.

A evolução natural é persistência server-side.

---

## 14. Arquitetura futura

A direção arquitetural definida é:

```text
PWA / GitHub Pages
        │
        ▼
Frontend
        │
        ▼
API
        │
        ▼
PostgreSQL
        │
        ├── usuários
        ├── trilhas
        ├── playlists
        ├── aulas
        ├── conclusões
        ├── sessões de estudo
        └── histórico temporal
```

Railway, Neon ou outra infraestrutura PostgreSQL podem ser avaliados posteriormente.

A implementação de backend não deve destruir a simplicidade do frontend atual.

---

## 15. Próxima evolução recomendada

Prioridade sugerida:

1. modelo de dados genérico para qualquer linguagem/tecnologia;
2. catálogo dinâmico;
3. registro de eventos de estudo por data/hora;
4. histórico anual real;
5. sincronização entre dispositivos;
6. login;
7. metas diárias/semanais;
8. relatórios de evolução;
9. API;
10. PostgreSQL server-side.

---

## 16. Regra para novas linguagens

Ao adicionar uma nova trilha:

1. criar catálogo independente;
2. preservar ordem e dados originais;
3. criar chave de progresso própria;
4. criar identidade visual consistente;
5. adicionar navegação;
6. adicionar card no painel geral;
7. incluir tempo na meta global somente após conclusão;
8. atualizar README e HANDOFF;
9. testar desktop e mobile;
10. invalidar cache do PWA.

Exemplo:

```text
Python
TypeScript
C/C++
Java
Kotlin
Docker
Kubernetes
etc.
```

O núcleo não deve precisar ser reescrito para cada nova tecnologia.

---

## 17. Regras de continuidade

- Não apagar progresso existente sem solicitação explícita.
- Não misturar estados entre linguagens.
- Não inventar conteúdo para completar uma playlist.
- Não tratar percentual de playlist como percentual de domínio.
- Não declarar sincronização enquanto existir somente `localStorage`.
- Não alterar a identidade visual aprovada sem necessidade.
- Versionar mudanças de cache separadamente da versão funcional do produto.
- Atualizar este HANDOFF quando houver mudança arquitetural relevante.

---

## 18. Release baseline

**v1.0.0** consolida:

- Go;
- Rust;
- PostgreSQL;
- progresso independente;
- meta global de 1000 horas;
- painel geral;
- linha do tempo local;
- relógio + data;
- PWA;
- identidade visual developer-first;
- GitHub Pages.

Este documento é o ponto de continuidade para as próximas sessões de desenvolvimento.
