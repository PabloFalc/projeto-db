import { client } from '../../client';

export async function CreateTableReceitas() {
    try {
        // Criação de receitas
        await client.query(`
        CREATE TABLE IF NOT EXISTS "Receitas" 
            (
                "id" TEXT PRIMARY KEY,
                "descricao" VARCHAR(150) NOT NULL,
                "valor" INTEGER DEFAULT 0,
                "data" TIMESTAMP(3) NOT NULL,
                "origem" VARCHAR(25)
            );
        `);
        console.log('Tabela receitas criada!');
    } catch (err) {
        console.error('Erro durante a criacão da tabela receitas:', err);
    }
}
