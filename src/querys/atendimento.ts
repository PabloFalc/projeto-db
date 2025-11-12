import type { FastifyInstance } from 'fastify';
import { client } from '../server';

export async function getAtendimentos(server: FastifyInstance) {
    server.get<{ Querystring: { limit?: number; offset?: number } }>(
        '/atendimentos',
        async (req, reply) => {
            const { limit = 10, offset = 0 } = req.query;

            const query = `
                SELECT 
                    a.id,
                    a.descricao,
                    a.tipo,
                    a."criadoEm",
                    c.nome AS colaborador_nome,
                    u."userName" AS usuario_nome,
                    r.valor AS receita_valor
                FROM "Atendimentos" a
                LEFT JOIN "Colaboradores" c ON c.id = a."colaboradorId"
                LEFT JOIN "Usuarios" u ON u.id = a."userId"
                LEFT JOIN "Receitas" r ON r.id = a."receitaId"
                ORDER BY a."criadoEm" DESC
                LIMIT $1 OFFSET $2;
            `;

            try {
                const result = await client.query(query, [limit, offset]);
                return reply.send(result.rows);
            } catch (err) {
                console.error('Erro ao buscar atendimentos:', err);
                return reply
                    .status(500)
                    .send({ error: 'Erro interno do servidor' });
            }
        }
    );
}
