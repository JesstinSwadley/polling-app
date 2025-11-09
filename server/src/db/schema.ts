import { pgTable, integer, text, serial } from "drizzle-orm/pg-core";


export const polls = pgTable("polls", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	query: text("query").notNull()
});

export const users = pgTable("users", {
	id: serial().notNull(),
	username: text("username").notNull(),
	hash_password: text("hash_password").notNull()
});