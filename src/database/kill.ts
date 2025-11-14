import { client } from '../client';

async function destroy() {
    try {
        console.log('Conectando ao banco...');
        await client.connect();

        console.log('Destruindo todas as tabelas...');

        await client.query(`
            DROP SCHEMA public CASCADE;
            CREATE SCHEMA public;
            GRANT ALL ON SCHEMA public TO postgres;
            GRANT ALL ON SCHEMA public TO public;
        `);

        console.log('Todas as tabelas destruídas com sucesso!');
    } catch (err) {
        console.error('Erro ao destruir tabelas:', err);
    } finally {
        await client.end();
        process.exit(0);
    }
}

destroy();
