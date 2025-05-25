import { Request, Response } from "express";
import { db } from "../db/drizzle";
import { polls } from "../db/schema";
import { eq } from "drizzle-orm";


export const createPollController = async (req: Request, res: Response) => {
	try {
		const { pollQuestion } = req.body;

		if (!pollQuestion || pollQuestion == "") {
			throw new Error("Missing Data");
		}

		await db
			.insert(polls)
			.values({
				question: pollQuestion
			})
			.returning({
				id: polls.id
			});

		res.status(201).send("Poll was created");
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return;
	}
}

export const getAllPollsController = async (req: Request, res: Response) => {
	try {
		const pollsList = await db.select().from(polls);

		res.status(200).send(pollsList);
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return;
	}
}

export const updatePollController = async (req: Request, res: Response) => {
	try {
		const { pollId, pollQuestion } = req.body;

		if (!pollId || pollQuestion == "") {
			throw new Error("Missing Data");
		}

		await db
				.update(polls)
				.set({
					question: pollQuestion
				})
				.where(
					eq(polls.id, pollId)
				)

		res.status(200).send("Poll has been updated");
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return;
	}
}

export const deletePollController = async (req: Request, res: Response) => {
	try {
		let pollId: any = req.query.pollId;

		if (!pollId) {
			throw new Error("Missing Data");
		}

		pollId = Number(pollId);

		await db.delete(polls).where(eq(polls.id, pollId));

		res.status(200).send("Poll has been deleted");
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return;
	}
}
