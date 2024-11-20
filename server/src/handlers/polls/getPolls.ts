import { eq } from "drizzle-orm";
import { db } from "../../db/drizzle";
import { polls } from "../../db/schema";

export const getAllPolls = async () => {
	const results = await db
		.select()
		.from(polls)

	return results
}

export const getPollsById = async (pollID: string) => {
	const result = await db
		.select()
		.from(polls)
		.where(eq(polls.id, pollID))

	return result
}