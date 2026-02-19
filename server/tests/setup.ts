import { runMigrations } from "../src/db/migrate";
import { pool } from "../src/db/drizzle";

export async function setup() {
	if (!process.env.DB_HOST) {
		console.log("Skipping DB Setup: No DB credentials found=");
        return;
	}

	console.log("Setting up test database...");
	await runMigrations();
}

export async function teardown() {
	if (!process.env.DB_HOST) return;

	console.log("Closing test database pool...");
	await pool.end();
}