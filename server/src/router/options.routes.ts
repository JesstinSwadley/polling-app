import { Request, Response, Router } from "express";
import { db } from "../db/drizzle";
import { options } from "../db/schema";

export const optionRouter: Router = Router();

optionRouter.post("/create", async (req: Request, res: Response) => {
	const { pollId, optionValue } = req.body;

	if (!pollId || !optionValue) {
		res.sendStatus(400);
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
});