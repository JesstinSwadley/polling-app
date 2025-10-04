import { Request, Response } from "express";

export const newPollController = (req: Request, res: Response) => {
	try {
		res.status(201).send("Poll was created");
	} catch (err) {
		console.error(err);

		res.status(400).send();

		return;
	}
}