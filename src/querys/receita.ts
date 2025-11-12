import type { FastifyInstance } from 'fastify';
import { client } from '../server';

export async function getReceitas(server: FastifyInstance) {
    server.get<{ Querystring: { limit?: number; offset?: number } }>(
        '/receitas',
        async (req, reply) => {
            const { limit = 10, offset = 0 } = req.query;

            const query = `
                SELECT 
                    r.id,
                    r.valor,
                    r.descricao,
                    COUNT(a.id) AS total_atendimentos
                FROM "Receitas" r
                LEFT JOIN "Atendimentos" a ON a."receitaId" = r.id
                GROUP BY r.id
                ORDER BY r.valor DESC
                LIMIT $1 OFFSET $2;
            `;

            try {
                const result = await client.query(query, [limit, offset]);
                return reply.send(result.rows);
            } catch (err) {
                console.error('Erro ao buscar receitas:', err);
                return reply
                    .status(500)
                    .send({ error: 'Erro interno do servidor' });
            }
        }
    );
}
