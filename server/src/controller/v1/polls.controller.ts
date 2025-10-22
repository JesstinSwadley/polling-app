import { Request, Response } from "express";
import { db } from "../../db/drizzle";
import { polls } from "../../db/schema";
import { eq } from "drizzle-orm";

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

export const  getListOfAllPollsController = async (req: Request, res: Response) => {
	try {
		const pollsList = await db.select().from(polls);

		res.status(200).send(pollsList);
	} catch (err) {
		console.error(err);

		res.status(400).send(err);

		return;
	}
}

export const updatePollController = async (req: Request, res: Response) => {
	try {
		const { pollId, pollQuery } = req.body;

		if (!pollId || !pollQuery || pollQuery == "") {
			throw new Error("Missing Data");
		}

		await db
				.update(polls)
				.set({
					query: pollQuery
				})
				.where(
					eq(polls.id, pollId)
				)

		res.status(200).send("Poll has been updated");
	} catch (err) {
		console.error(err);

		res.status(400).send(err);

		return;
	}
}