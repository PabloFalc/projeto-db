import { client } from '../../client';

export async function CreateTableEventos() {
    try {
        // Criação de Eventos
        await client.query(`
            CREATE TABLE IF NOT EXISTS "Eventos" 
            (
                "id" TEXT PRIMARY KEY,
                "nome" VARCHAR(75) NOT NULL,
                "descricao" VARCHAR(200) NOT NULL,
                "localizacao" VARCHAR(50) NOT NULL,
                "categoria" VARCHAR(20) NOT NULL,
                "status" "StatusEvento" DEFAULT 'AGENDADO',
                "prioridade" "Prioridade" NOT NULL,
                "dataInicio" TIMESTAMP(3) NOT NULL,
                "dataFim" TIMESTAMP(3) NOT NULL
            );
        `);
        console.log('Tabela Eventos criada!');
    } catch (err) {
        console.error('Erro durante a criacão da tabela Eventos:', err);
    }
}
