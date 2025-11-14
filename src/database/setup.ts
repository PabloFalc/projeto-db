import { CreateTableColaboradores } from './tables/colaboradores';
import { CreateTableDemandas } from './tables/demandas';
import { CreateTableProjetos } from './tables/projetos';
import { CreateTableReceitas } from './tables/receitas';
import { CreateTableEventos } from './tables/eventos';
import { CreateTableUsuarios } from './tables/usuarios';
import { CreateTableAtendimentos } from './tables/atendimentos';
import { CreateEnums } from './others/enums';
import { CreateForeignKeys } from './others/constraints';
import { CreateRelationsTable } from './relations/relations';
import { waitForPostgres } from './wait';
import { CreateTableLogging } from './tables/logging';

async function setup() {
    try {
        await waitForPostgres();

        await CreateEnums();
        console.log('Enums criados');

        await CreateTableColaboradores();
        await CreateTableLogging();
        await CreateTableDemandas();
        await CreateTableProjetos();
        await CreateTableReceitas();
        await CreateTableEventos();
        await CreateTableUsuarios();
        await CreateTableAtendimentos();
        await CreateRelationsTable();
        console.log('Tabelas criadas');

        await CreateForeignKeys();
        console.log('Foreign keys adicionadas');

        console.log('Setup finalizado com sucesso!');
    } catch (err) {
        console.error('Erro durante setup:', err);
    } finally {
        process.exit(0);
    }
}

setup();
