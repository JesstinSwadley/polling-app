import { Router } from "express";

// Router
export const pollRouter: Router = Router();

// Routes
pollRouter.post("/new", (req, res) => {
	res.send("new poll");
});