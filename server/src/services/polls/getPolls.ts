import { eq } from "drizzle-orm";
import { db } from "../../db/drizzle";
import { polls } from "../../db/schema";
import { getAllPollOptions } from "../options/getOptions";

export const getAllPolls = async () => {
	const results = await db
		.select()
		.from(polls)

	return results
}

export const getPollsById = async (pollID: any) => {
	let result = {}

	const poll = await db
		.select()
		.from(polls)
		.where(eq(polls.id, pollID))

	const options = await getAllPollOptions(poll[0].id)

	result = {poll, options}

	return result
}