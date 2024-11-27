import { db } from "../../db/drizzle";
import { options } from "../../db/schema";

export const addOption = async (option: string, pollID: string) => {
	const id = await db
					.insert(options)
					.values({
						option,
						pollId: pollID
					})
					.returning({ id: options.id })
					
	return id
}