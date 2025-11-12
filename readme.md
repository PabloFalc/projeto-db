# Team Management - Backend

Este projeto é um sistema de gestão de colaboradores, demandas, atendimentos, projetos, receitas e eventos, utilizando **Node.js**, **Fastify** e **PostgreSQL**.  

Ele conta com integração via **Docker** para o banco de dados e utiliza **TypeScript**

---

## Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado:

- [Docker](https://www.docker.com/get-started)  
- [Node.js](https://nodejs.org/) (versão 18+)  
- [pnpm](https://pnpm.io/installation)  

---

## Configuração do projeto

1. Clone o repositório:

```bash
git clone <https://github.com/PabloFalc/projeto-db.git>
cd back-controle
````

2. Instale as dependências:

```bash
pnpm install
```

3. Crie um arquivo `.env` baseado no `.env.example` (ou configure seu PostgreSQL):

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/projeto-db"
DIRECT_URL="postgresql://postgres:postgres@localhost:5432/projeto-db"
PORT=3100
```

---

## Rodando a aplicação

Para rodar em modo **desenvolvimento**:

```bash
pnpm dev
```

Para rodar com **seed e migrations**:

```bash
pnpm start
```

Para resetar banco e parar containers:

```bash
pnpm run kill
```

---

## Docker Compose

O projeto utiliza Docker Compose para o PostgreSQL. O container é configurado assim:

```yaml
services:
  db:
    image: postgres:17
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: projeto-db
    ports:
      - "5432:5432"
```

---

## Rotas disponíveis

> Todos os endpoints utilizam o método **GET**, com suporte a `limit` e `offset` via query string quando aplicável.

### Colaboradores

* `GET /colaboradores` – Lista todos os colaboradores com total de demandas.
* `GET /colaboradores/:id` – Busca colaborador específico pelo ID.

### Atendimentos

* `GET /atendimentos` – Lista todos os atendimentos com informações de colaborador, usuário e receita.

### Usuários

* `GET /usuarios` – Lista todos os usuários com total de atendimentos.

### Projetos

* `GET /projetos` – Lista todos os projetos com total de atendimentos e receitas.

### Eventos

* `GET /eventos` – Lista todos os eventos com total de participantes (via `_ColaboradorToEvento`).

### Demandas

* `GET /demandas` – Lista todas as demandas com total de atendimentos e nome do colaborador.

---

## Observações

---

