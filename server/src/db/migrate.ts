import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db, pool } from "./drizzle.js"; 
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const runMigrations = async () => {
    console.log("Running migrations...");
    try {
        await migrate(db, {
            migrationsFolder: path.resolve(__dirname, "migrations")
        });
        console.log("Migrations complete");
    } catch (err) {
        console.error("Migration failed:", err);
        throw err;
    }
};

const isDirectRun = import.meta.url === `file://${process.argv[1]}`;

if (isDirectRun) {
    runMigrations()
        .then(async () => {
            await pool.end();
            process.exit(0);
        })
        .catch(async () => {
            await pool.end();
            process.exit(1);
        });
}