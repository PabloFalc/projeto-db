# Team Management — Guia Rápido

Fluxo recomendado:

1. Inicio
   ```sh
   pnpm db:setup
   ```
2. Desenvolvimento diário:  
   ```sh
   pnpm start
   ```
3 Reset do banco:
   ```sh
   pnpm kill
   ```

Observação importante:  
Os scripts estão com um comportamento bugado. **Após cada comando** como `pnpm kill`, `pnpm db:setup` ou `pnpm start`, é necessário **pressionar CTRL+C** para encerrar o processo antes de rodar o próximo comando.

---

## Requisitos

- Node.js 18+
- PNPM
- Docker + Docker Compose

---

## Instalar dependências

```sh
pnpm install
```

---

## Scripts úteis

### Iniciar servidor + banco

```sh
pnpm start
```

### Reset total (cria tabelas, enums e seed)

```sh
pnpm db:setup
```

### Destruir banco e volumes

```sh
pnpm kill
```

Lembre: após qualquer comando acima, **CTRL+C**.

---

## Estrutura mínima

```
src/
  server.ts
  client.ts
  seed.ts
  database/
    setup.ts
    kill.ts
docker-compose.yml
```

---

## Variáveis de ambiente

Arquivo `.env`:

```env
DATABASE_URL=postgres://postgres:postgres@localhost:5432/team_management
PORT=3100
```

---

# Rotas disponíveis

Base: `http://localhost:3100`

| Rota               | Método | Descrição                    |
|-------------------|--------|------------------------------|
| `/atendimentos`   | GET    | Lista atendimentos           |
| `/colaborador`    | GET    | Lista colaboradores          |
| `/colaborador/:id`| GET    | Colaborador por ID           |
| `/demandas`       | GET    | Lista demandas               |
| `/eventos`        | GET    | Lista eventos                |
| `/projetos`       | GET    | Lista projetos               |
| `/receitas`       | GET    | Lista receitas               |
| `/usuarios`       | GET    | Lista usuários               |

Query opcional para todas as rotas de listagem:  
`?limit=10&offset=0`
