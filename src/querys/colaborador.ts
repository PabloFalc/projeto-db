import type { FastifyInstance } from 'fastify';
import { client } from '../server';

export async function getColaboradores(server: FastifyInstance) {
    server.get<{ Querystring: { limit?: number; offset?: number } }>(
        '/colaborador',
        async (req, reply) => {
            const { limit = 10, offset = 0 } = req.query;

            const query = `
      SELECT 
        c.id,
        c.nome,
        c.email,
        c.categoria,
        COUNT(a.id) AS total_atendimentos
      FROM "Colaboradores" c
      LEFT JOIN "Atendimentos" a ON a."colaboradorId" = c.id
      GROUP BY c.id
      ORDER BY c.nome
      LIMIT $1 OFFSET $2;
    `;

            try {
                const result = await client.query(query, [limit, offset]);
                return reply.send(result.rows);
            } catch (err) {
                console.error('Erro ao buscar colaboradores:', err);
                return reply
                    .status(500)
                    .send({ error: 'Erro interno do servidor' });
            }
        }
    );
}

export async function getColaboradoresById(server: FastifyInstance) {
    server.get<{ Params: { id: string } }>(
        '/colaborador/:id',
        async (req, reply) => {
            const { id } = req.params;

            const query = `
      SELECT 
        c.id,
        c.nome,
        c.email,
        c.categoria,
        c.telefone,
        c.zona,
        c.cidade,
        c.bairro,
        c.logradouro,
        c."isLideranca",
        COUNT(a.id) AS total_atendimentos,
        COUNT(p.id) AS total_projetos,
        COUNT(e.id) AS total_eventos
      FROM "Colaboradores" c
      LEFT JOIN "Atendimentos" a ON a."colaboradorId" = c.id
      LEFT JOIN "Projetos" p ON p."colaboradorId" = c.id
      LEFT JOIN "_ColaboradorToEvento" ce ON ce."A" = c.id
      LEFT JOIN "Eventos" e ON e.id = ce."B"
      WHERE c.id = $1
      GROUP BY c.id;
    `;

            try {
                const result = await client.query(query, [id]);

                if (result.rows.length === 0) {
                    return reply
                        .status(404)
                        .send({ message: 'Colaborador não encontrado' });
                }

                return reply.send(result.rows[0]);
            } catch (err) {
                console.error('Erro ao buscar colaborador:', err);
                return reply
                    .status(500)
                    .send({ error: 'Erro interno do servidor' });
            }
        }
    );
}
