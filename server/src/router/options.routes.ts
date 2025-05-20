import { Request, Response, Router } from "express";

export const optionRouter: Router = Router();

optionRouter.post("/create", (req: Request, res: Response) => {
	res.status(201).send("Option was created");
});