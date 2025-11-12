import type { FastifyInstance } from 'fastify';
import { client } from '../server';

export async function getProjetos(server: FastifyInstance) {
    server.get<{ Querystring: { limit?: number; offset?: number } }>(
        '/projetos',
        async (req, reply) => {
            const { limit = 10, offset = 0 } = req.query;

            const query = `
                SELECT 
                    p.*,
                    COUNT(DISTINCT pa."A") AS total_atendimentos,
                    COUNT(DISTINCT r.id) AS total_receitas
                FROM "Projetos" p
                LEFT JOIN "_ProjetoAtendimento" pa ON pa."B" = p.id
                LEFT JOIN "Receitas" r ON r."id" = ANY(
                    SELECT a."receitaId"
                    FROM "Atendimentos" a
                    JOIN "_ProjetoAtendimento" ap ON ap."A" = a.id
                    WHERE ap."B" = p.id
                )
                GROUP BY p.id
                ORDER BY p."data" DESC
                LIMIT $1 OFFSET $2;
            `;

            try {
                const result = await client.query(query, [limit, offset]);
                return reply.send(result.rows);
            } catch (err) {
                console.error('Erro ao buscar projetos:', err);
                return reply
                    .status(500)
                    .send({ error: 'Erro interno do servidor' });
            }
        }
    );
}
