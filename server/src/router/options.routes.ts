import { Request, Response, Router } from "express";

export const optionRouter: Router = Router();

optionRouter.post("/create", (req: Request, res: Response) => {
	const { pollId, pollOption } = req.body;

	if (!pollId || !pollOption) {
		res.sendStatus(400);
	}

	res.status(201).send("Option was created");
});