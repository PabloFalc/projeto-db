import { client } from '../../client';

export async function CreateTableLogging() {
    try {
        await client.query(`
      CREATE TABLE IF NOT EXISTS "Logging" (
        "id" TEXT PRIMARY KEY,
        "userName" VARCHAR(30) NOT NULL,
        "action" VARCHAR(150) NOT NULL,
        "lastChange" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
        "updates" TEXT[]
      );
    `);
        console.log('Tabela Logging criada!');
    } catch (err) {
        console.error('Erro durante a criacão da tabela Logging:', err);
    }
}
