import { z } from "zod";
import { createInsertSchema } from "drizzle-zod";
import { users } from "../../db/schema.js";

export const RegisterSchema = createInsertSchema(users, {
	username: (schema) => schema.min(3)
		.max(30)
		.trim()
		.lowercase(),
}).extend({
	password: z.string()
		.min(8, "Password must be at least 8 characters"),
}).omit({
	id: true,
	hash_password: true,
});

export const LoginSchema = z.object({
	username: z.string().min(1, "Username is required"),
	password: z.string().min(1, "Password is required"),
});

export type RegisterInput = z.infer<typeof RegisterSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;