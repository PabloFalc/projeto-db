import { client } from '../../client';

export async function CreateTableProjetos() {
    try {
        // Criação de projetos
        await client.query(`
            CREATE TABLE IF NOT EXISTS "Projetos" (
                "id" TEXT PRIMARY KEY,
                "titulo" VARCHAR(75) NOT NULL,
                "descricao" VARCHAR(150) NOT NULL,
                "data" TIMESTAMP(3) NOT NULL,
                "cep" VARCHAR(9) NOT NULL,
                "zona" "Zona" NOT NULL,
                "cidade" VARCHAR(75) NOT NULL,
                "bairro" VARCHAR(100) NOT NULL,
                "logradouro" VARCHAR(100) NOT NULL,
                "colaboradorId" TEXT
            );
        `);
        console.log('Tabela projetos criada!');
    } catch (err) {
        console.error('Erro durante a criacão da tabela projetos:', err);
    }
}
