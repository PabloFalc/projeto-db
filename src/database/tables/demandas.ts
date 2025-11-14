import { client } from '../../client';

export async function CreateTableDemandas() {
    try {
        // Criação de demandas
        await client.query(`
            CREATE TABLE IF NOT EXISTS "Demandas" (
                "id" TEXT PRIMARY KEY,
                "titulo" VARCHAR(75) NOT NULL,
                "descricao" VARCHAR(150) NOT NULL,
                "intervalo" BOOLEAN DEFAULT false,
                "dataInicio" TIMESTAMP(3) NOT NULL,
                "dataFim" TIMESTAMP(3),
                "status" "StatusDefault" DEFAULT 'PENDENTE'
            );
      `);
        console.log('Tabela demandas criada!');
    } catch (err) {
        console.error('Erro durante a criacão da tabela demandas:', err);
    }
}
