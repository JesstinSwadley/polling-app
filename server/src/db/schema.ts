import { pgTable, integer, text } from "drizzle-orm/pg-core";


export const polls = pgTable("polls", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	query: text("query").notNull()
});