import { Router, Request, Response } from "express";
import { db } from "../db/drizzle";
import { polls } from "../db/schema";
import { eq } from "drizzle-orm";

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

pollRouter.patch("/update", async (req: Request, res: Response) => {
	const { pollId, pollQuestion } = req.body;

	if (!pollId || pollQuestion == "") {
		res.sendStatus(400);
	}

	const updatePoll = await db
							.update(polls)
							.set({
								question: pollQuestion
							})
							.where(
								eq(polls.id, pollId)
							)

	res.status(200).send("Poll has been updated");
});

pollRouter.delete("/delete", async (req: Request, res: Response) => {
	let pollId: any = req.query.pollId;

	pollId = Number(pollId);

	const deletePoll = await db.delete(polls).where(eq(polls.id, pollId));

	res.status(200).send("Poll has been deleted");
});