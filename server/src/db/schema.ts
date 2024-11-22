import { sql } from 'drizzle-orm';
import { integer, pgTable, text, uuid } from 'drizzle-orm/pg-core';

export const polls = pgTable('polls', {
	id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
	question: text('question').notNull()
});

export const options = pgTable('options', {
	id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
	option: text('option').notNull(),
	pollId: uuid('poll_id').references(() => polls.id, {onDelete: 'cascade'}).notNull()
});

export const results = pgTable('results', {
	id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
	total: integer('total'),
	optionId: uuid('option').references(() => options.id, {onDelete: 'cascade'}).notNull(),
	pollId: uuid('poll_id').references(() => polls.id, {onDelete: 'cascade'}).notNull()
});