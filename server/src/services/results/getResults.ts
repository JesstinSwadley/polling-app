import { eq } from "drizzle-orm";
import { db } from "../../db/drizzle";
import { results } from "../../db/schema";

export const getAllPollResults = async (pollID: any) => {
	const pollResults = await db
						.select({
							id: results.id,
							total: results.total
						})
						.from(results)
						.where(eq(results.pollId, pollID))

	return pollResults
}