import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";

const host 		= process.env.DB_HOST;
const port 		= process.env.DB_PORT;
const user 		= process.env.DB_USER;
const password 	= process.env.DB_PASSWORD;
const database 	= process.env.DB_DATABASE;

const sql: Pool = new Pool({
	host,
	port,
	user,
	password,
	database,
	ssl: {
		rejectUnauthorized: false
	}
});

const db = drizzle(sql);

const main = async () => {
	try {
		await migrate(db, {
			migrationsFolder: "src/db/migrations"
		});

		console.log("Migration successful");
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

main();