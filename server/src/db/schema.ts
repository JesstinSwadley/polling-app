import { sql } from 'drizzle-orm';
import { pgTable, integer, text, uuid } from "drizzle-orm/pg-core";

export const polls = pgTable("polls", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	title: text('title').notNull(),
});

export const users = pgTable("users", {
	id:  uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
	username: text('username').notNull(),
	password: text('password').notNull(),
});