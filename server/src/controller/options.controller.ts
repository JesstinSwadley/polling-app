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
		let pollId: any = req.query.poll_id

		if (!pollId) {
			throw new Error("Missing Data");
		}

		pollId = Number(pollId);

		const pollOptions = await db.select().from(options).where(eq(options.poll_id, pollId));

		res.status(200).send(pollOptions);

		return;
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return;
	}
}

export const updateOptionController = async (req: Request, res: Response) => {
	try {
		const { optionId, optionValue } = req.body;

		if (!optionId || optionValue == "") {
			throw new Error("Missing Data");
		}

		await db
				.update(options)
				.set({
					value: optionValue
				})
				.where(
					eq(options.id, optionId)
				)

		res.status(200).send("Option has been updated");

		return;
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return;
	}
}

export const deleteOptionController = async (req: Request, res: Response) => {
	try {
		let optionId: any = req.query.optionId;

		if (!optionId) {
			throw new Error("Missing Data");
		}

		optionId = Number(optionId);

		await db.delete(options).where(eq(options.id, optionId));

		res.status(200).send("Option has been deleted");
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return;
	}
}