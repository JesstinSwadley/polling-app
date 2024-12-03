import { Request, Response } from "express";
import { updateOptionById } from "../services/options/updateOptions";

export const updateOptionByIdController = async (req: Request, res: Response) => {
	try {
		const { optionID, updatedOption } = req.body;

		if (!optionID) {
			return res.sendStatus(400);
		}

		const poll = await updateOptionById(optionID, updatedOption)

		return res.status(200).send("Poll was updated");
	} catch (error) {
		console.error(error);
		return res.sendStatus(400);
	}
}