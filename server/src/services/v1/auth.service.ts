import { compare, genSalt, hash } from "bcryptjs";
import { LoginInput, RegisterInput } from "../../schemas/v1/auth.schema.js";
import { db } from "../../db/drizzle.js";
import { users } from "../../db/schema.js";
import { eq } from "drizzle-orm";

export class AuthService {
	static async register(data: RegisterInput) {
		const salt = await genSalt(10);
		const hashed_password = await hash(data.password, salt);

		const [newUser] = await db
			.insert(users)
			.values({
				username: data.username,
				hash_password: hashed_password,
			})
			.returning({
				id: users.id,
				username: users.username
			});

		return newUser;
	}

	static async validateUser(data: LoginInput) {
		const [user] = await db
		.select()
		.from(users)
		.where(eq(users.username, data.username));

		if (!user) {
			throw new Error("Invalid username or password");
		}

		const isMatch = await compare(data.password, user.hash_password);

		if (!isMatch) {
			throw new Error("Invalid username or password");
		}

		return { id: user.id, username: user.username};
	}
}