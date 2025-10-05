import { defineConfig } from 'drizzle-kit';

const host		= process.env.DB_HOST;
const port 		= process.env.DB_PORT;
const user 		= process.env.DB_USER;
const password 	= process.env.DB_PASSWORD;
const database 	= process.env.DB_DATABASE;

export default defineConfig({
	dialect: "postgresql",
	schema: "./src/db/schema.ts",
	out: "./src/db/migrations.ts",
	dbCredentials: {
		host,
		port,
		user,
		password,
		database,
		ssl: false
	}
});