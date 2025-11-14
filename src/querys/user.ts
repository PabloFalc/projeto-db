import type { FastifyInstance } from 'fastify';
import { client } from '../client';

export async function getUsuarios(server: FastifyInstance) {
    server.get<{ Querystring: { limit?: number; offset?: number } }>(
        '/usuarios',
        async (req, reply) => {
            const { limit = 10, offset = 0 } = req.query;

            const query = `
    SELECT 
        u.*,
        COUNT(a.id) AS total_atendimentos
    FROM "Usuarios" u
    LEFT JOIN "Atendimentos" a ON a."userId" = u.id
    GROUP BY u.id
    ORDER BY u."userName"
    LIMIT $1 OFFSET $2;
`;

            try {
                const result = await client.query(query, [limit, offset]);
                return reply.send(result.rows);
            } catch (err) {
                console.error('Erro ao buscar usuários:', err);
                return reply
                    .status(500)
                    .send({ error: 'Erro interno do servidor' });
            }
        }
    );
}
