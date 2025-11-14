import fastify, { type FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import { getColaboradores, getColaboradoresById } from './querys/colaborador';
import { getAtendimentos } from './querys/atendimento';
import { getDemandas } from './querys/demanda';
import { getEventos } from './querys/evento';
import { getProjetos } from './querys/projeto';
import { getReceitas } from './querys/receita';
import { getUsuarios } from './querys/user';

const app: FastifyInstance = fastify();

app.register(cors, {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
});

app.register(getColaboradores);
app.register(getColaboradoresById);
app.register(getAtendimentos);
app.register(getDemandas);
app.register(getEventos);
app.register(getProjetos);
app.register(getReceitas);
app.register(getUsuarios);

const port = Number(process.env.PORT) || 3100;

app.listen({ port, host: '0.0.0.0' }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Servidor rodando em ${address}/docs`);
});
