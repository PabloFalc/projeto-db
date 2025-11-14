import { client } from '../../client';

export async function CreateTableColaboradores() {
    try {
        // Criação de colaboradores
        await client.query(`
            CREATE TABLE IF NOT EXISTS "Colaboradores" 
            (
                "id" TEXT PRIMARY KEY,
                "nome" VARCHAR(100) NOT NULL,
                "cpf" CHAR(14),
                "email" VARCHAR(254),
                "telefone" VARCHAR(15),
                "dataNascimento" TIMESTAMP(3),
                "cep" VARCHAR(9),
                "zona" "Zona",
                "cidade" VARCHAR(75),
                "bairro" VARCHAR(100),
                "logradouro" VARCHAR(100),
                "categoria" VARCHAR(50),
                "observacao" VARCHAR(150),
                "curriculo" VARCHAR(75),
                "isLideranca" BOOLEAN DEFAULT false,
                "liderancaId" TEXT,
                "criadosEm" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
                "atualizadosEm" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP
            );     
      `);
        console.log('Tabela de colaboradores criado!');
    } catch (err) {
        console.error('Erro durante a criacão da tabela colaboradores:', err);
    }
}
