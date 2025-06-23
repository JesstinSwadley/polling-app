import { pgTable, integer, text, uuid } from "drizzle-orm/pg-core";

export const polls = pgTable("polls", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	question: text('question').notNull()
});

export const options = pgTable("options", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	value: text('value').notNull(),
	poll_id: integer('poll_id').references(() => polls.id, {onDelete: 'cascade'}).notNull()
});

export const  votes = pgTable("votes", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	poll_id: integer('poll_id').references(() => polls.id, {onDelete: 'cascade'}).notNull(),
	option_id: integer('poll_id').references(() => polls.id, {onDelete: 'cascade'}).notNull(),
});