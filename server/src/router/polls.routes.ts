import { Router, Request, Response } from "express";

export const pollRouter: Router = Router();

pollRouter.post("/create", (req: Request, res: Response) => {
	const { pollQuestion } = req.body;

	console.log(pollQuestion);

	res.status(201).send("Poll was created");
});