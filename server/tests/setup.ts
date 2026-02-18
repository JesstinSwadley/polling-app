import { runMigrations } from "../src/db/migrate";
import { pool } from "../src/db/drizzle";

export async function setup() {
	console.log("Setting up test database...");
	await runMigrations();
}

export async function teardown() {
	console.log("Closing test database pool...");
	await pool.end();
}