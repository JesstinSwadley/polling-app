import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../db/drizzle";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";

// type Users = {
// 	id: number,
// 	username: string,
// 	password: string
// }

const saltRounds = 10;
const secret = process.env.JWT_SECRET;

export const authRegisterController = async (req: Request, res: Response) => {
	try {
		let { username, password } = req.body;

		if (!username || !password) {
			res.sendStatus(400);

			return;
		}

		let hashPassword: string = bcrypt.hashSync(password, saltRounds);

		const user = await db
					.insert(users)
					.values({
						username,
						password: hashPassword
					});

		console.log(user);

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

			return;
		}

		let user = await db
						.select()
						.from(users)
						.where(
							eq(users.username, username)
						);

		if (!user) {
			res.status(404).json({ error: 'User not found'});

			return;
		}

		const match: boolean = await bcrypt.compare(password, user[0].password);

		if (!match) {
			res.status(200).send("Username or password is incorrect");

			return;
		}

		let accessToken = jwt.sign(
			{ 
				username: user[0].username
			}, 
			secret, 
			{ 
				expiresIn: '1h' 
			}
		);

		res.status(200).send({ accessToken, id: user[0].id });

		return;
	} catch (error) {
		console.error(error);

		res.status(400).send("An error has occured");

		return;
	}
}