import { Router, Request, Response } from "express";
import bcrypt from "bcrypt";

export const authRouter: Router = Router();

let users = []
const saltRounds = 10;

authRouter.post("/register", (req: Request, res: Response) => {
	let { username, password } = req.body;

	if (!username || !password) {
		res.sendStatus(400);
	}

	let hashPassword  = bcrypt.hashSync(password, saltRounds);

	users.push({
		id: Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10),
		username,
		password: hashPassword
	})

	res.send(users[0]).status(200);
});