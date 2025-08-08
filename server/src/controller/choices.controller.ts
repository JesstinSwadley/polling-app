import { Request, Response } from "express";
import { db } from "../db/drizzle";
import { choices, polls } from "../db/schema";
import { eq } from "drizzle-orm";

export const createChoiceController = async (req: Request, res: Response) => {
	try {
		const { pollId, choiceValue } = req.body;
	
		if (!pollId || !choiceValue) {
			throw new Error("Missing Data");
		}
	
		await db
			.insert(choices)
			.values({
				poll_id: pollId,
				value: choiceValue
			})
			.returning({
				id: choices.id
			});
	
		res.status(201).send("Choice was created");
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return;
	}
}

export const getAllPollChoicesController = async (req: Request, res: Response) => {
	try {
		let pollId: any = req.query.poll_id

		if (!pollId) {
			throw new Error("Missing Data");
		}

		pollId = Number(pollId);

		const pollChoices = await db.select().from(choices).where(eq(choices.poll_id, pollId));

		res.status(200).send(pollChoices);

		return;
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return;
	}
}

export const updateChoiceController = async (req: Request, res: Response) => {
	try {
		const { choiceId, choiceValue } = req.body;

		if (!choiceId || choiceValue == "") {
			throw new Error("Missing Data");
		}

		await db
				.update(choices)
				.set({
					value: choiceValue
				})
				.where(
					eq(choices.id, choiceId)
				)

		res.status(200).send("Choice has been updated");

		return;
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return;
	}
}

export const deleteChoiceController = async (req: Request, res: Response) => {
	try {
		let choiceId: any = req.query.choiceId;

		if (!choiceId) {
			throw new Error("Missing Data");
		}

		choiceId = Number(choiceId);

		await db.delete(choices).where(eq(choices.id, choiceId));

		res.status(200).send("Choice has been deleted");
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return;
	}
}