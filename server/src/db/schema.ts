import { sql } from 'drizzle-orm';
import { pgTable, serial, text, uuid } from 'drizzle-orm/pg-core';

export const polls = pgTable('polls', {
	id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
	question: text('question').notNull()
});