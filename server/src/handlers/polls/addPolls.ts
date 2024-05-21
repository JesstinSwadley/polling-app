import { db } from "../../db/drizzle";
import { polls } from "../../db/schema";

export const addPoll = async (question: string) => {
	await db
			.insert(polls)
			.values({
				question
			})
			.returning({ id: polls.id })
}