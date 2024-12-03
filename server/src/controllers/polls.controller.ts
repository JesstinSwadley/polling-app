import { Request, Response } from "express";
import { addPoll } from "../services/polls/addPolls";
import { getAllPolls, getPollsById } from "../services/polls/getPolls";
import { updatePollById } from "../services/polls/updatePolls";
import { deletePollById } from "../services/polls/deletePolls";

export const addPollController = async (req: Request, res: Response) => {
	try {
		const { question, options } = req.body;

		if (!question) {
			return res.sendStatus(400);
		}

		const poll = await addPoll(question, options)

		return res.status(201).send("Poll was created");
	} catch (error) {
		console.error(error);
		return res.sendStatus(400);
	}
}

export const getAllPollsController = async (req: Request, res: Response) => {
	try {
		const polls = await getAllPolls();

		return res.status(200).json(polls);
	} catch (error) {
		console.error(error);
		return res.sendStatus(400);	
	}
}

export const getPollByIdController = async (req: Request, res: Response) => {
	try {
		const { pollID } = req.query

		if (!pollID) {
			return res.sendStatus(400);
		}

		const poll = await getPollsById(pollID);

		return res.status(200).json(poll);
	} catch (error) {
		console.error(error);
		return res.sendStatus(400);	
	}
}

export const updatePollByIdController = async (req: Request, res: Response) => {
	try {
		const { pollID, updatedQuestion } = req.body;

		if (!pollID) {
			return res.sendStatus(400);
		}

		const poll = await updatePollById(pollID, updatedQuestion)

		return res.status(200).send("Poll was updated");
	} catch (error) {
		console.error(error);
		return res.sendStatus(400);
	}
}

export const deletePollByIdController = async (req: Request, res: Response) => {
	try {
		const { pollID } = req.query;

		if (!pollID) {
			return res.sendStatus(400);
		}

		const poll = await deletePollById(pollID);

		return res.status(200).send("Poll was deleted");
	} catch (error) {
		console.error(error);
		return res.sendStatus(400);
	}
}