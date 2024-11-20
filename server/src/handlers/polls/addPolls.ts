import { db } from "../../db/drizzle";
import { polls } from "../../db/schema";
import { addOption } from "../options/addOption";

export const addPoll = async (question: string, options: any) => {
	const poll = await db
					.insert(polls)
					.values({
						question
					})
					.returning({ id: polls.id })

	for (const value in options) {
		addOption(options[value], poll[0].id)
	}

	return poll[0].id
}