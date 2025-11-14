import { client } from '../client';

export async function waitForPostgres() {
    let connected = false;

    while (!connected) {
        try {
            await client.query('SELECT 1');
            connected = true;
            console.log('Postgres pronto');
        } catch {
            console.log('Aguardando Postgres...');
            await new Promise(r => setTimeout(r, 500));
        }
    }
}
