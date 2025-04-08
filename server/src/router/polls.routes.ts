import { Router, Request, Response } from "express";

export const pollRouter: Router = Router();

pollRouter.post("/create", (req: Request, res: Response) => {
	res.status(201).send("Poll was created");
});