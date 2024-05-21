import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";

const sql: Pool = new Pool({
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE
});

const db = drizzle(sql);

const main = async () => {
	try {
		await migrate(db, {
			migrationsFolder: "src/db/migrations"
		});

		console.log("Migration successful");
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

main();