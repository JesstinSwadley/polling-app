import { appendFile } from "node:fs";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

type Users = {
	id: number,
	username: string,
	password: string
}

const saltRounds = 10;

export const authRegisterController = (req: Request, res: Response) => {
	try {
		let { username, password } = req.body;

		if (!username || !password) {
			res.sendStatus(400);
		}
	
		let hashPassword: string  = bcrypt.hashSync(password, saltRounds);

		let userObj: Users = {
			id: Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10),
			username,
			password: hashPassword
		}

		appendFile('users.json', JSON.stringify(userObj), (err) => {
			if (err) throw err;
			
			console.log('User was created!');
		});
	
		res.status(201).send("User has been registered");

		return;
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return;
	}
}