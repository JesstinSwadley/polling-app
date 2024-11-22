import { eq } from "drizzle-orm";
import { db } from "../../db/drizzle";
import { options } from "../../db/schema";

export const getAllPollOptions = async (pollID: any) => {
	const pollOptions = await db
						.select({
							id: options.id,
							option: options.option
						})
						.from(options)
						.where(eq(options.pollId, pollID))

	return pollOptions
}