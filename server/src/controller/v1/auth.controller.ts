import { type Request, type Response } from "express";
import { genSalt, hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../../db/drizzle.js";
import { users } from "../../db/schema.js";
import { eq } from "drizzle-orm";
import { RegisterSchema } from "../../schemas/v1/auth.schema.js";
import { AuthService } from "../../services/v1/auth.service.js";

export const registerUserController = async (req: Request, res: Response) => {
	try {
		// const { username, password } = req.body;

		// if (!username || !password) {
		// 	throw new Error("Missing Data");
		// }

		// const salt: string = await genSalt(10);
		// const hash_password: string = await hash(password, salt);

		// const user = await db
		// 	.insert(users)
		// 	.values({
		// 		username,
		// 		hash_password
		// 	})
		// 	.returning({
		// 		id: users.id
		// 	});

		// res.status(201).send(`User has been registered`);

		const validateData = RegisterSchema.parse(req.body);

		const user = await AuthService.register(validateData);

		res.status(201).json({
			message: "User registered",
			user
		});
	} catch (err: any) {
		console.error(err);

		res.status(400).json({
			error: err.message
		});
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

		if (user.length == 0) {
			throw new Error("incorrect username or password");
		}

		const matchingPass = await compare(password, user[0].hash_password);

		if (!matchingPass) {
			throw new Error("incorrect username or password");
		}

		const jwtToken = jwt.sign(
			{"iss": user[0].id},
			process.env.JWT_SECRET,
			{expiresIn: "1h",},
			(err, token) => {
				throw new Error(err?.message);
			}
		);
	
		res.cookie(
			"jwt",
			jwtToken,
			{
				maxAge: 3600,
				httpOnly: true,
			}
		);

		res.status(200).send("User has been logged in");
	} catch (err) {
		console.error(err);

		res.status(400).send(err);

		return;
	}
}