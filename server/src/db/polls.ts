import { pgTable, serial, text } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';

export const polls = pgTable('polls', {
	id: serial('id').primaryKey(),
	question: text('question')
});

export type NewPoll = typeof polls.$inferInsert;

const client = new Client({
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE
});

const db = drizzle(client);

export const createPoll = async (NewPoll: NewPoll) => {
	await db
			.insert(polls)
			.values(NewPoll)
			.returning({
				id: polls.id
			});
}