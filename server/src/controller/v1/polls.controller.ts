import { type Request, type Response } from "express";
import { db } from "../../db/drizzle";
import { polls } from "../../db/schema";
import { eq } from "drizzle-orm";

export const newPollController = async (req: Request, res: Response) => {
	try {
		const { pollQuery } = req.body;

		if (typeof pollQuery !== "string" || !pollQuery.trim()) {
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

		res.status(201).json({
			message: "Poll was created"
		});
	} catch (err: any) {
		console.error(err);

		res.status(400).send({
			error: err.message
		});

		return;
	}
}

export const getListOfAllPollsController = async (req: Request, res: Response) => {
	try {
		const pollsList = await db
			.select()
			.from(polls)
			.orderBy(polls.id);

		res.status(200).json(pollsList);
	} catch (err) {
		console.error(err);

		res.status(400).json({
			error: "Failed to fetch polls",
		});
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

export const deletePollController = async (req: Request, res: Response) => {
	try {
		const { pollId } = req.body;

		if (!pollId) {
			throw new Error("Missing Data");
		}

		await db
				.delete(polls)
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