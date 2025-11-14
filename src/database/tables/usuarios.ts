import { client } from '../../client';

export async function CreateTableUsuarios() {
    try {
        // Criação de Usuarios
        await client.query(`
        CREATE TABLE IF NOT EXISTS "Usuarios" 
            (
                "id" TEXT PRIMARY KEY,
                "userName" VARCHAR(30) NOT NULL,
                "name" VARCHAR(100) NOT NULL,
                "email" VARCHAR(254) NOT NULL UNIQUE,
                "password" VARCHAR(254) NOT NULL,
                "role" "UserRole" DEFAULT 'DEFAULT'
            );
        `);
        console.log('Tabela Usuarios criada!');
    } catch (err) {
        console.error('Erro durante a criacão da tabela Usuarios:', err);
    }
}
