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

pollRouter.get("/get-all", async (req: Request, res: Response) => {
	const pollsList = await db.select().from(polls);

	res.status(200).send(pollsList);
});

pollRouter.patch("/update", (req: Request, res: Response) => {
	const { pollId, pollQuestion } = req.body;

	console.log(pollId, pollQuestion);

	res.status(200).send("Polling PATCH route");
});