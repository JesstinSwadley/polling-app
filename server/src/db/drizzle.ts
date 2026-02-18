import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema.js";

const isProduction = process.env.NODE_ENV === "production";
const isTest = process.env.NODE_ENV === "test";

const host 		= process.env.DB_HOST;
const port 		= process.env.DB_PORT;
const user 		= process.env.DB_USER;
const password 	= process.env.DB_PASSWORD;
const database 	= process.env.DB_DATABASE;

const connectionString = `postgres://${user}:${password}@${host}:${port}/${database}`;

export const pool = new Pool({
    connectionString,
    ssl: isProduction ? { rejectUnauthorized: false } : false,
    max: isTest ? 5 : 20 
});

export const db = drizzle(pool, { schema });