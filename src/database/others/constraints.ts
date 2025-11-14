import { client } from '../../client';

export async function CreateForeignKeys() {
    try {
        await client.query(`
DO $$ BEGIN
    -- Colaboradores → Colaboradores (liderança)
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'Colaboradores_liderancaId_fkey') THEN
        ALTER TABLE "Colaboradores"
        ADD CONSTRAINT "Colaboradores_liderancaId_fkey"
        FOREIGN KEY ("liderancaId") REFERENCES "Colaboradores"("id")
        ON DELETE SET NULL ON UPDATE CASCADE;
    END IF;

    -- Projetos → Colaboradores
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'Projetos_colaboradorId_fkey') THEN
        ALTER TABLE "Projetos"
        ADD CONSTRAINT "Projetos_colaboradorId_fkey"
        FOREIGN KEY ("colaboradorId") REFERENCES "Colaboradores"("id")
        ON DELETE SET NULL ON UPDATE CASCADE;
    END IF;

    -- Atendimentos → Receitas
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'Atendimentos_receitaId_fkey') THEN
        ALTER TABLE "Atendimentos"
        ADD CONSTRAINT "Atendimentos_receitaId_fkey"
        FOREIGN KEY ("receitaId") REFERENCES "Receitas"("id")
        ON DELETE SET NULL ON UPDATE CASCADE;
    END IF;

    -- Atendimentos → Colaboradores
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'Atendimentos_colaboradorId_fkey') THEN
        ALTER TABLE "Atendimentos"
        ADD CONSTRAINT "Atendimentos_colaboradorId_fkey"
        FOREIGN KEY ("colaboradorId") REFERENCES "Colaboradores"("id")
        ON DELETE SET NULL ON UPDATE CASCADE;
    END IF;

    -- Atendimentos → Usuarios
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'Atendimentos_userId_fkey') THEN
        ALTER TABLE "Atendimentos"
        ADD CONSTRAINT "Atendimentos_userId_fkey"
        FOREIGN KEY ("userId") REFERENCES "Usuarios"("id")
        ON DELETE RESTRICT ON UPDATE CASCADE;
    END IF;

    -- _ColaboradorToEvento
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = '_ColaboradorToEvento_A_fkey') THEN
        ALTER TABLE "_ColaboradorToEvento"
        ADD CONSTRAINT "_ColaboradorToEvento_A_fkey"
        FOREIGN KEY ("A") REFERENCES "Colaboradores"("id")
        ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = '_ColaboradorToEvento_B_fkey') THEN
        ALTER TABLE "_ColaboradorToEvento"
        ADD CONSTRAINT "_ColaboradorToEvento_B_fkey"
        FOREIGN KEY ("B") REFERENCES "Eventos"("id")
        ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;

    -- _ProjetoAtendimento
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = '_ProjetoAtendimento_A_fkey') THEN
        ALTER TABLE "_ProjetoAtendimento"
        ADD CONSTRAINT "_ProjetoAtendimento_A_fkey"
        FOREIGN KEY ("A") REFERENCES "Atendimentos"("id")
        ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = '_ProjetoAtendimento_B_fkey') THEN
        ALTER TABLE "_ProjetoAtendimento"
        ADD CONSTRAINT "_ProjetoAtendimento_B_fkey"
        FOREIGN KEY ("B") REFERENCES "Projetos"("id")
        ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;

    -- _DemandaAtendimento
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = '_DemandaAtendimento_A_fkey') THEN
        ALTER TABLE "_DemandaAtendimento"
        ADD CONSTRAINT "_DemandaAtendimento_A_fkey"
        FOREIGN KEY ("A") REFERENCES "Atendimentos"("id")
        ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = '_DemandaAtendimento_B_fkey') THEN
        ALTER TABLE "_DemandaAtendimento"
        ADD CONSTRAINT "_DemandaAtendimento_B_fkey"
        FOREIGN KEY ("B") REFERENCES "Demandas"("id")
        ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;
END $$;
        `);

        console.log('Constraints atualizadas!');
    } catch (err) {
        console.error('Erro durante a atualizacao das constraints:', err);
    }
}
