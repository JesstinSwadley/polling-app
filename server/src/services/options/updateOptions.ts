import { eq } from "drizzle-orm";
import { db } from "../../db/drizzle";
import { options } from "../../db/schema";

export const updateOptionById = async (optionID: any, updatedOption: string) => {
	const updatePoll = await db
							.update(options)
							.set({
								option: updatedOption
							})
							.where(eq(options.id, optionID))

	return updatePoll
}