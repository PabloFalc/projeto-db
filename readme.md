````md
# Team Management — Guia de Execução

Este projeto utiliza **Node.js**, **TypeScript**, **PostgreSQL via Docker** e scripts automatizados para criação do banco, enums, tabelas e seed inicial.

---

## 1. Requisitos

Antes de rodar o projeto, instale:

- **Node.js** (v18+)
- **PNPM** (versão usada: `pnpm@10.14.0`)
- **Docker** e **Docker Compose**

---

## 2. Instalação das dependências

```sh
pnpm install
````

---

## 3. Scripts principais

Os scripts estão definidos no `package.json`.

### **Subir ambiente + rodar servidor**

```sh
pnpm start
```

O que acontece:

1. `docker compose up -d` inicia o PostgreSQL no container
2. O servidor inicia com:

   ```sh
   tsx watch src/server.ts
   ```
3. O backend fica disponível (ex.: [http://127.0.0.1:3100/docs](http://127.0.0.1:3100/docs))

---

### **Configurar completamente o banco (criar enums, tabelas e seed)**

```sh
pnpm db:setup
```

Passos executados internamente:

1. Sobe o banco:

   ```sh
   docker compose up -d
   ```
2. Executa:

   * `src/database/setup.ts` → cria enums e tabelas
   * `src/seed.ts` → popula dados iniciais
3. Derruba e remove volumes do container:

   ```sh
   docker compose down -v
   ```

Use esse comando **apenas quando quiser reset total** do banco.

---

### **Destruir o banco e tudo relacionado**

```sh
pnpm kill
```

Executa:

1. `tsx src/database/kill.ts` → limpa tabelas
2. `docker compose down -v` → remove container + volumes

---

## 4. Estrutura mínima esperada

```
src/
  server.ts
  client.ts
  seed.ts
  database/
    setup.ts
    kill.ts
    enums/
    tables/
    ...
docker-compose.yml
```

O `client.ts` deve exportar o cliente do PostgreSQL.

---

## 5. Variáveis de ambiente

Crie um `.env` na raiz contendo:

```env
DATABASE_URL=postgres://postgres:postgres@localhost:5432/team_management
PORT=3100
```

Ou conforme seu docker-compose.

---

## 6. Executando o servidor manualmente (sem scripts)

### Subir banco:

```sh
docker compose up -d
```

### Rodar servidor:

```sh
tsx watch src/server.ts
```

---

## 7. Fluxo recomendado para desenvolvimento

1. **Primeira vez:**

```sh
pnpm db:setup
```

2. **Depois:**

```sh
pnpm start
```

3. **Quando quiser apagar e recomeçar:**

```sh
pnpm kill
pnpm db:setup
```

---