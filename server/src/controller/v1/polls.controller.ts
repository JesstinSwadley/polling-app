import { type Request, type Response } from "express";
import { db } from "../../db/drizzle.js";
import { polls } from "../../db/schema.js";
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
		const pollId = Number(req.params.pollId);

		const { pollQuery } = req.body;

		if (!pollId || !pollQuery || pollQuery.trim() === "") {
			return res.status(400).json({
				error: "Missing Data"
			});
		}

		const updated = await db
				.update(polls)
				.set({
					query: pollQuery
				})
				.where(
					eq(polls.id, pollId)
				)
				.returning({
					id: polls.id
				});

		if (updated.length === 0) {
			return res.status(404).json({
				error: "Poll not found"
			});
		}
		
		res.status(200).json({
			message: "Poll has been updated",
			pollId
		});
	} catch (err) {
		console.error(err);

		res.status(500).json({
			error: "Internal Server Error"
		});
	}
}

export const deletePollController = async (req: Request, res: Response) => {
	try {
		const pollId = Number(req.params.pollId);

		if (!pollId) {
			return res.status(400).json({ 
				error: "Missing Data" 
			});
		}

		const result = await db
			.delete(polls)
			.where(
				eq(polls.id, pollId)
			)
			.returning({ 
				id: polls.id 
			});

		if (result.length === 0) {
			return res.status(404).json({ 
				error: "Poll not found" 
			});
		}

		res.status(200).json({
			message: "Poll has been deleted",
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Internal Server Error" });
	}
}