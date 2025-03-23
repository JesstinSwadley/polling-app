import { drizzle } from "drizzle-orm/node-postgres";
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
	database
});

export const db = drizzle(sql);