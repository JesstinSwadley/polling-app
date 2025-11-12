import { type Request, type Response } from "express";
import { genSalt, hash, compare } from "bcryptjs";
import { db } from "../../db/drizzle";
import { users } from "../../db/schema";
import { eq } from "drizzle-orm";

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

export const loginUserController = async (req: Request, res: Response) => {
	try {
		const { username, password } = req.body;

		if (!username || !password) {
			throw new Error("Missing Data");
		}

		const user = await db
			.select()
			.from(users)
			.where(
				eq(users.username, username)
			);

		const matchingPass = await compare(password, user[0].hash_password);

		if (!matchingPass) {
			throw new Error("Password is incorrect");
		}

		res.status(200).send("User has been logged in");
	} catch (err) {
		console.error(err);

		res.status(400).send(err);

		return;
	}
}