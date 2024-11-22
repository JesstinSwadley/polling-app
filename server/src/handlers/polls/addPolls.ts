import { db } from "../../db/drizzle";
import { polls } from "../../db/schema";
import { addOption } from "../options/addOption";
import { addResult } from "../results/addResults";

export const addPoll = async (question: string, options: any) => {
	const poll = await db
					.insert(polls)
					.values({
						question
					})
					.returning({ id: polls.id })

	for (const value in options) {
		let option = await addOption(options[value], poll[0].id)
		addResult(option[0].id, poll[0].id)
	}

	return poll[0].id
}