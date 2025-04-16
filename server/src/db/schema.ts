import { pgTable, integer, text, uuid } from "drizzle-orm/pg-core";

export const polls = pgTable("polls", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	question: text('question').notNull()
});