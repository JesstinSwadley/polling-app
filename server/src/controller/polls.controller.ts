import { Request, Response } from "express";
import { db } from "../db/drizzle";
import { polls } from "../db/schema";
import { eq } from "drizzle-orm";

interface Polls {
	id: number,
	title: string
}

export const createPollController = async (req: Request, res: Response) => {
	try {
		let { pollTitle } = req.body;

		if (!pollTitle || pollTitle == "") {
			res.sendStatus(400);
		}

		const poll = await db
						.insert(polls)
						.values({
							title: pollTitle
						})
						.returning({
							id: polls.id
						});
	
		res.status(201).send(poll);

		return
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return
	}
}

export const getAllPollsController = async (req: Request, res: Response) => {
	try {
		const pollsList = await db.select().from(polls);

		res.status(200).send(pollsList);

		return
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return
	}
}

export const updatePollController = async (req: Request, res: Response) => {
	try {
		let { pollId, updateTitle } = req.body;

		const updatePoll = await db
								.update(polls)
								.set({
									title: updateTitle
								})
								.where(
									eq(polls.id, pollId)
								);
	
		res.status(200).send(updatePoll);

		return;
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return;
	}
}

export const deletePollController = async (req: Request, res: Response) => {
	try {
		let pollId: any = req.query.pollId;

		const deletePoll = await db
								.delete(polls)
								.where(eq(polls.id, pollId));
	
		res.status(200).send("poll deleted")

		return
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return
	}
}