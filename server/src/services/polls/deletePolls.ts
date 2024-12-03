import { eq } from "drizzle-orm";
import { db } from "../../db/drizzle";
import { polls } from "../../db/schema";

export const deletePollById = async (pollID: any) => {
	const deletePoll = await db
							.delete(polls)
							.where(eq(polls.id, pollID))

	return deletePoll
}