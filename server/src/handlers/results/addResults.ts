import { db } from "../../db/drizzle";
import { results } from "../../db/schema";

export const addResult = async (optionID: any, pollID: any) => {
	await db
		.insert(results)
		.values({
			total: 0,
			optionId: optionID,
			pollId: pollID
		})
}