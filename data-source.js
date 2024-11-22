import path from "path";
import { DataSource } from "typeorm"

import "dotenv/config";

const __dirname = path.resolve();

const buildSettings = () => {
    const entitiesPath = path.join(__dirname, './models/**.{ts,js}');
    const migrationPath = path.join(__dirname, './migrations/**.{ts,js}');

    const host = process.env.DB_HOST;
    if (!host) throw new Error("Missing env var: 'DB_HOST'");

    const username = process.env.DB_USERNAME;
    if (!username) throw new Error("Missing env var: 'DB_USERNAME'");

    const password = process.env.DB_PASSWORD;
    if (!password) throw new Error("Missing env var: 'DB_PASSWORD'");

    const database = process.env.DB_DATABASE;
    if (!database) throw new Error("Missing env var: 'DB_DATABASE'");

    const port = Number(process.env.DB_PORT);
    if (!port) throw new Error("Missing env var: 'DB_PORT'");

    return {
        type: "postgres",
        host: host,
        port: port,
        username: username,
        password: password,
        database: database,
        entities: [entitiesPath],
        migrations: [migrationPath],
        options: {
            trustServerCertificate: true,
            encrypt: true,
        }
    };

}

const AppDataSource = new DataSource(buildSettings());

export default AppDataSource;
