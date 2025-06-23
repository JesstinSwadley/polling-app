import { Request, Response } from "express";
import { db } from "../db/drizzle";
import { votes } from "../db/schema";

export const createVoteController = async (req: Request, res: Response) => {
	try {
		const { pollId, optionId } = req.body;

		if (!pollId || !optionId) {
			throw new Error("Missing Data");
		}

		await db
			.insert(votes)
			.values({
				poll_id: pollId,
				option_id: optionId
			})
			.returning({
				id: votes.id
			})

		res.status(201).send("Vote was created");

		return;
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return;
	}
}