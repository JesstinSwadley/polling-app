import { Request, Response } from "express";
import { db } from "../db/drizzle";
import { votes } from "../db/schema";
import { eq } from "drizzle-orm";

export const createVoteController = async (req: Request, res: Response) => {
	try {
		const { pollId, choiceId } = req.body;

		if (!pollId || !choiceId) {
			throw new Error("Missing Data");
		}

		await db
			.insert(votes)
			.values({
				poll_id: pollId,
				choice_id: choiceId
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

export const updateVoteController = async (req: Request, res: Response) => {
	try {
		const { voteId, choiceId } = req.body;

		if (!voteId || !choiceId ) {
			throw new Error("Missing Data");
		}

		await db
				.update(votes)
				.set({
					choice_id: choiceId
				})
				.where(
					eq(votes.id, voteId)
				)

		res.status(200).send("Vote has been updated");
	} catch (error) {
		console.error(error);

		res.status(400).send(error);

		return;
	}
}

export const deleteVoteController = async (req: Request, res: Response) => {
	try {
		let voteId: any = req.query.voteId;

		if (!voteId) {
			throw new Error("Missing Data");
		}

		voteId = Number(voteId);

		await db.delete(votes).where(eq(votes.id, voteId));

		res.status(200).send("Vote has been deleted");
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return;
	}
}