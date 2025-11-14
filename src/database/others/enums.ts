import { client } from '../../client';

export async function CreateEnums() {
    try {
        const enums = [
            `
            DO $$ BEGIN
                IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'StatusDefault') THEN
                    CREATE TYPE "StatusDefault" AS ENUM ('PENDENTE', 'CONCLUIDO');
                END IF;
            END $$;
            `,
            `
            DO $$ BEGIN
                IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'UserRole') THEN
                    CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'DEFAULT');
                END IF;
            END $$;
            `,
            `
            DO $$ BEGIN
                IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'Prioridade') THEN
                    CREATE TYPE "Prioridade" AS ENUM ('ALTA', 'MEDIA', 'BAIXA');
                END IF;
            END $$;
            `,
            `
            DO $$ BEGIN
                IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'StatusEvento') THEN
                    CREATE TYPE "StatusEvento" AS ENUM ('CANCELADO', 'AGENDADO', 'ACONTECENDO', 'CONCLUIDO');
                END IF;
            END $$;
            `,
            `
            DO $$ BEGIN
                IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'Zona') THEN
                    CREATE TYPE "Zona" AS ENUM ('NORTE', 'SUL', 'LESTE', 'OESTE', 'CENTRO', 'RURAL', 'SUDESTE');
                END IF;
            END $$;
            `,
            `
            DO $$ BEGIN
                IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'AtendimentoTipo') THEN
                    CREATE TYPE "AtendimentoTipo" AS ENUM ('PRESENCIAL', 'WHATSAPP', 'EMAIL', 'TELEFONE');
                END IF;
            END $$;
            `,
            `
            DO $$ BEGIN
                IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'Despesa') THEN
                    CREATE TYPE "Despesa" AS ENUM ('FIXA', 'AVULSA');
                END IF;
            END $$;
            `,
        ];

        for (const query of enums) {
            await client.query(query);
        }

        console.log('Enums criados!');
    } catch (err) {
        console.error('Erro durante a criação dos enums:', err);
    }
}
