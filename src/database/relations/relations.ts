import { client } from '../../client';

export async function CreateRelationsTable() {
    try {
        // Criação das relations
        await client.query(`
            CREATE TABLE IF NOT EXISTS "_ColaboradorToEvento" (
                "A" TEXT NOT NULL,
                "B" TEXT NOT NULL,
                PRIMARY KEY ("A", "B")
            );

            CREATE TABLE IF NOT EXISTS "_ProjetoAtendimento" (
                "A" TEXT NOT NULL,
                "B" TEXT NOT NULL,
                PRIMARY KEY ("A", "B")
            );

            CREATE TABLE IF NOT EXISTS "_DemandaAtendimento" (
                "A" TEXT NOT NULL,
                "B" TEXT NOT NULL,
                PRIMARY KEY ("A", "B")
            );
        `);
        console.log('Tabelas de relaçoes criadas!');
    } catch (err) {
        console.error('Erro durante a criacão das tabelas de relations:', err);
    }
}
