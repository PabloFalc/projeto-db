import { v4 as uuidv4 } from 'uuid';
import { client } from './client';

async function main() {
    await client.connect();
    const now = new Date();

    const userId = uuidv4();
    const colaborador1 = uuidv4();
    const colaborador2 = uuidv4();
    const colaborador3 = uuidv4();
    const projetoId = uuidv4();
    const demandaId = uuidv4();
    const eventoId = uuidv4();
    const receitaId = uuidv4();
    const atendimentoId = uuidv4();

    try {
        await client.query(`
      DELETE FROM "Logging";
      DELETE FROM "Atendimentos";
      DELETE FROM "Receitas";
      DELETE FROM "Eventos";
      DELETE FROM "Demandas";
      DELETE FROM "Projetos";
      DELETE FROM "Colaboradores";
      DELETE FROM "Usuarios";
    `);

        await client.query(
            `
      INSERT INTO "Usuarios" (id, "userName", name, email, password, role)
      VALUES ($1, $2, $3, $4, $5, $6);
      `,
            [
                userId,
                'admin',
                'Administrador',
                'admin@email.com',
                '123456',
                'ADMIN',
            ]
        );

        const colaboradores = [
            {
                id: colaborador1,
                nome: 'Matheus Jucá',
                cpf: '123.456.789-00',
                email: 'matheus.juca@somosicev.com',
                telefone: '(86) 99999-9999',
                dataNascimento: new Date('2005-05-10'),
                cep: '01000-000',
                zona: 'LESTE',
                cidade: 'Teresina',
                bairro: 'aculá',
                logradouro: 'rua logo ali',
                categoria: 'Front-End developer',
                isLideranca: true,
                liderancaId: null,
                criadosEm: now,
                atualizadosEm: now,
            },
            {
                id: colaborador2,
                nome: 'Pablo Martins',
                cpf: '987.654.321-00',
                email: 'pablo.martins@somosicev.com',
                telefone: '(86) 98888-8888',
                dataNascimento: new Date('2004-03-22'),
                cep: '02000-000',
                zona: 'LESTE',
                cidade: 'Teresina',
                bairro: 'Hell Neigborhood',
                logradouro: 'Hell road',
                categoria: 'Back-end devloper',
                isLideranca: false,
                liderancaId: colaborador1,
                criadosEm: now,
                atualizadosEm: now,
            },
            {
                id: colaborador3,
                nome: 'Felipe Duan',
                cpf: '111.222.333-44',
                email: 'felipe.duan@somosicev.com',
                telefone: '(86) 97777-7777',
                dataNascimento: new Date('2005-11-12'),
                cep: '03000-000',
                zona: 'NORTE',
                cidade: 'Teresina',
                bairro: 'Santana',
                logradouro: 'QuintoDosInf',
                categoria: 'Full-Stack devloper',
                isLideranca: false,
                liderancaId: null,
                criadosEm: now,
                atualizadosEm: now,
            },
        ];

        for (const c of colaboradores) {
            await client.query(
                `
    INSERT INTO "Colaboradores"
      (id, nome, cpf, email, telefone, "dataNascimento", cep, zona, cidade,
       bairro, logradouro, categoria, "isLideranca", "liderancaId",
       "criadosEm", "atualizadosEm")
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16);
    `,
                [
                    c.id,
                    c.nome,
                    c.cpf,
                    c.email,
                    c.telefone,
                    c.dataNascimento,
                    c.cep,
                    c.zona,
                    c.cidade,
                    c.bairro,
                    c.logradouro,
                    c.categoria,
                    c.isLideranca,
                    c.liderancaId,
                    c.criadosEm,
                    c.atualizadosEm,
                ]
            );
        }

        await client.query(
            `
      INSERT INTO "Projetos"
      (id, titulo, descricao, data, cep, zona, cidade, bairro, logradouro, "colaboradorId")
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);
      `,
            [
                projetoId,
                'Projeto Verde',
                'Reciclagem comunitária',
                now,
                '01000-000',
                'SUL',
                'São Paulo',
                'Centro',
                'Rua das Flores',
                colaborador1,
            ]
        );

        await client.query(
            `
      INSERT INTO "Demandas"
      (id, titulo, descricao, intervalo, "dataInicio", "dataFim", status)
      VALUES ($1, $2, $3, $4, $5, $6, $7);
      `,
            [
                demandaId,
                'Recolher lixo eletrônico',
                'Ação de coleta semanal',
                false,
                now,
                null,
                'PENDENTE',
            ]
        );

        await client.query(
            `
      INSERT INTO "Eventos"
      (id, nome, descricao, localizacao, categoria, status, prioridade, "dataInicio", "dataFim")
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9);
      `,
            [
                eventoId,
                'Mutirão Ambiental',
                'Evento de conscientização ecológica',
                'Praça da Sé',
                'Ambiental',
                'AGENDADO',
                'ALTA',
                now,
                new Date(now.getTime() + 3600000),
            ]
        );

        await client.query(
            `
      INSERT INTO "Receitas"
      (id, descricao, valor, data, origem)
      VALUES ($1,$2,$3,$4,$5);
      `,
            [receitaId, 'Doação ONG Verde+', 5000, now, 'Doação']
        );

        await client.query(
            `
      INSERT INTO "Atendimentos"
      (id, descricao, tipo, "receitaId", "colaboradorId", "userId", "criadoEm")
      VALUES ($1,$2,$3,$4,$5,$6,$7);
      `,
            [
                atendimentoId,
                'Atendimento via WhatsApp para dúvidas gerais',
                'WHATSAPP',
                receitaId,
                colaborador2,
                userId,
                now,
            ]
        );

        await client.query(
            `
      INSERT INTO "Logging"
      (id, "userName", action, "lastChange", updates)
      VALUES ($1,$2,$3,$4,$5);
      `,
            [
                uuidv4(),
                'admin',
                'Seed inicial executado',
                now,
                [
                    'Usuarios',
                    'Colaboradores',
                    'Projetos',
                    'Demandas',
                    'Eventos',
                    'Receitas',
                    'Atendimentos',
                ],
            ]
        );

        console.log('Seed completo executado com sucesso.');
    } catch (err) {
        console.error('Erro no seed:', err);
    } finally {
        await client.end();
        process.exit(0);
    }
}

main();
