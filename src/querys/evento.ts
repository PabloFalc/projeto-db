import type { FastifyInstance } from 'fastify';
import { client } from '../server';

export async function getEventos(server: FastifyInstance) {
    server.get<{ Querystring: { limit?: number; offset?: number } }>(
        '/eventos',
        async (req, reply) => {
            const { limit = 10, offset = 0 } = req.query;

            const query = `
                SELECT 
    e.*,
    COUNT(c.id) AS total_participantes
FROM "Eventos" e
LEFT JOIN "_ColaboradorToEvento" ce ON ce."B" = e.id
LEFT JOIN "Colaboradores" c ON c.id = ce."A"
GROUP BY e.id
ORDER BY e."dataInicio" DESC
LIMIT $1 OFFSET $2;
            `;

            try {
                const result = await client.query(query, [limit, offset]);
                return reply.send(result.rows);
            } catch (err) {
                console.error('Erro ao buscar eventos:', err);
                return reply
                    .status(500)
                    .send({ error: 'Erro interno do servidor' });
            }
        }
    );
}
