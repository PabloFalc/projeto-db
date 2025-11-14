import type { FastifyInstance } from 'fastify';
import { client } from '../client';

export async function getDemandas(server: FastifyInstance) {
    server.get<{ Querystring: { limit?: number; offset?: number } }>(
        '/demandas',
        async (req, reply) => {
            const { limit = 10, offset = 0 } = req.query;

            const query = `
  SELECT 
    d.id,
    d.titulo,
    d.descricao,
    d.status,
    COUNT(a.id) AS total_atendimentos,
    c.nome AS colaborador_nome
  FROM "Demandas" d
  LEFT JOIN "_DemandaAtendimento" da ON da."B" = d.id
  LEFT JOIN "Atendimentos" a ON a.id = da."A"
  LEFT JOIN "Colaboradores" c ON c.id = a."colaboradorId"
  GROUP BY d.id, c.nome
  ORDER BY d."dataInicio" DESC
  LIMIT $1 OFFSET $2;
`;

            try {
                const result = await client.query(query, [limit, offset]);
                return reply.send(result.rows);
            } catch (err) {
                console.error('Erro ao buscar demandas:', err);
                return reply
                    .status(500)
                    .send({ error: 'Erro interno do servidor' });
            }
        }
    );
}
