import { Request, Response } from "express";
import { db } from "../db/drizzle";
import { votes } from "../db/schema";
import { eq } from "drizzle-orm";

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

export const listVoteController = async (req: Request, res: Response) => {
	try {
		let pollId: any = req.query.poll_id;

		if (!pollId) {
			throw new Error("Missing Data");
		}

		pollId = Number(pollId);

		const pollVotes = await db.select().from(votes).where(eq(votes.poll_id, pollId));

		res.status(200).send("List votes for a poll");
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return;
	}
}