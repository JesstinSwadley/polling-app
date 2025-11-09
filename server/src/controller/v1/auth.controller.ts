import { type Request, type Response } from "express";
import { genSalt, hash } from "bcryptjs";
import { db } from "../../db/drizzle";
import { users } from "../../db/schema";

export const registerUserController = async (req: Request, res: Response) => {
	try {
		const { username, password } = req.body;

		if (!username || !password) {
			throw new Error("Missing Data");
		}

		const salt: string = await genSalt(10);
		const hash_password: string = await hash(password, salt);

		const user = await db
			.insert(users)
			.values({
				username,
				hash_password
			})
			.returning({
				id: users.id
			});

		res.status(201).send(`User has been registered`);
	} catch (err) {
		console.error(err);

		res.status(400).send(err);

		return;
	}
}