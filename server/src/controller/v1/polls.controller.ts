import { Request, Response } from "express";
import { db } from "../../db/drizzle";
import { polls } from "../../db/schema";

export const newPollController = async (req: Request, res: Response) => {
	try {
		const { pollQuery } = req.body;

		if (!pollQuery || pollQuery == "") {
			throw new Error("Missing Data");
		}

		const pollId = await db
			.insert(polls)
			.values({
				query: pollQuery
			})
			.returning({
				id: polls.id
			});

		console.log(pollId);

		res.status(201).send("Poll was created");
	} catch (err) {
		console.error(err);

		res.status(400).send(err);

		return;
	}
}