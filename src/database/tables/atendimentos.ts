import { client } from '../../client';

export async function CreateTableAtendimentos() {
    try {
        // Criação de Atendimentos
        await client.query(`
            CREATE TABLE IF NOT EXISTS "Atendimentos" 
            (
                "id" TEXT PRIMARY KEY,
                "descricao" TEXT NOT NULL,
                "tipo" "AtendimentoTipo" NOT NULL,
                "receitaId" TEXT,
                "colaboradorId" TEXT,
                "userId" TEXT NOT NULL,
                "criadoEm" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP
            );   
      `);
        console.log('Tabela de atendimentos criado!');
    } catch (err) {
        console.error('Erro durante a criacão da tabela atendimentos:', err);
    }
}
