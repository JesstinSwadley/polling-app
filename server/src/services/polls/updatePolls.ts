import { eq } from "drizzle-orm";
import { db } from "../../db/drizzle";
import { polls } from "../../db/schema";

export const updatePollById = async (pollID: any, updatedQuestion: string) => {
	const updatePoll = await db
							.update(polls)
							.set({
								question: updatedQuestion
							})
							.where(eq(polls.id, pollID))

	return updatePoll
}