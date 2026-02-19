import { type Request, type Response } from "express";
import { PollService } from "../../services/v1/polls.services.js";

export const newPollController = async (req: Request, res: Response) => {
	try {
		const { pollQuery } = req.body;

		if (typeof pollQuery !== "string" || !pollQuery.trim()) {
			return res.status(400).json({
				error: "Missing Data"
			});
		}

		await PollService.create({ 
			pollQuery 
		});

		res.status(201).json({
			message: "Poll was created"
		});
	} catch (err) {
		res.status(500).json({
			error: "Internal Server Error"
		});
	}
}

export const getListOfAllPollsController = async (req: Request, res: Response) => {
	try {
		const pollsList = await PollService.listAll();

		res.status(200).json(pollsList);
	} catch (err) {
		res.status(500).json({
			error: "Internal Server Error",
		});
	}
}

export const updatePollController = async (req: Request, res: Response) => {
	try {
		const pollId = Number(req.params.pollId);

		const { pollQuery } = req.body;

		if (!pollId || !pollQuery || pollQuery.trim() === "") {
			return res.status(400).json({
				error: "Missing Data"
			});
		}

		const updatedId = await PollService.update(pollId, pollQuery);

		if (!updatedId) {
            return res.status(404).json({ 
				error: "Poll not found"
			});
        }
		
		res.status(200).json({
			message: "Poll has been updated",
			pollId
		});
	} catch (err) {
		console.error(err);

		res.status(500).json({
			error: "Internal Server Error"
		});
	}
}

export const deletePollController = async (req: Request, res: Response) => {
	try {
		const pollId = Number(req.params.pollId);

		if (!pollId) {
			return res.status(400).json({ 
				error: "Missing Data" 
			});
		}

		const wasDeleted = await PollService.delete(pollId);

		if (!wasDeleted) {
			return res.status(404).json({
				message: "Poll not found"
			});
		}

		res.status(200).json({
			message: "Poll has been deleted",
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({ 
			error: "Internal Server Error"
		});
	}
}