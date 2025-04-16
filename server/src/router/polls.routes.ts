import { Router, Request, Response } from "express";
import { db } from "../db/drizzle";
import { polls } from "../db/schema";

export const pollRouter: Router = Router();

pollRouter.post("/create", async (req: Request, res: Response) => {
	const { pollQuestion } = req.body;

	if (!pollQuestion || pollQuestion == "") {
		res.sendStatus(400);
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
});