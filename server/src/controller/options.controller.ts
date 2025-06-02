import { Request, Response } from "express";
import { db } from "../db/drizzle";
import { options, polls } from "../db/schema";
import { eq } from "drizzle-orm";

export const createOptionController = async (req: Request, res: Response) => {
	try {
		const { pollId, optionValue } = req.body;
	
		if (!pollId || !optionValue) {
			throw new Error("Missing Data");
		}
	
		await db
			.insert(options)
			.values({
				poll_id: pollId,
				value: optionValue
			})
			.returning({
				id: options.id
			});
	
		res.status(201).send("Option was created");
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return;
	}
}

export const getAllPollOptionsController = async (req: Request, res: Response) => {
	try {
		const pollId = req.query.poll_id;

		const pollOptions = await db.select().from(options).where(eq(options.poll_id, pollId));

		res.status(200).send(pollOptions);

		return;
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return;
	}
}