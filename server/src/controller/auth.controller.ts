import { Request, Response } from "express";
import bcrypt from "bcrypt";

let users = []
const saltRounds = 10;

export const authRegisterController = (req: Request, res: Response) => {
	try {
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
	
		res.status(201).send("User has been registered");

		return
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return
	}
}