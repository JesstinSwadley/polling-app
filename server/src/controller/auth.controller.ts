import { appendFile, readFileSync } from "node:fs";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt, { Jwt } from "jsonwebtoken";

type Users = {
	id: number,
	username: string,
	password: string
}

const saltRounds = 10;
const secret = "pollingApp";

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

export const authLoginController = async (req: Request, res: Response) => {
	try {
		let { username, password } = req.body;

		if (!username || !password) {
			res.sendStatus(400);
		}

		let usersJSON: Users[] = JSON.parse(readFileSync('users.json', 'utf8'));
		let foundUser: Users | undefined = usersJSON.find(user => user.username === username);

		if (foundUser == undefined) {
			res.status(200).send("Username or password is incorrect");
			return;
		}

		const match = await bcrypt.compare(password, foundUser.password);

		if (!match) {
			res.status(200).send("Username or password is incorrect");
			return;
		}

		let token = jwt.sign(
			{ username }, 
			secret, 
			{ expiresIn: '1h' }
		);

		res.status(200).send(token);

		return;
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return;
	}
}