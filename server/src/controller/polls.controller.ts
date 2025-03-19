import { appendFile } from "node:fs";
import { Request, Response } from "express";

let polls = [
	{
		"id": 1,
		"title": "First Poll"
	},
	{
		"id": 2,
		"title": "Second Poll"
	},
	{
		"id": 3,
		"title": "Third Poll"
	}
]

interface Polls {
	id: number,
	title: string
}

export const createPollController = (req: Request, res: Response) => {
	try {
		let { pollTitle } = req.body;

		if (!pollTitle || pollTitle == "") {
			res.sendStatus(400);
		}

		let newPoll: Polls = {
			id: Math.floor(Math.random() * 10),
			"title": pollTitle
		}

		appendFile('polls.json', JSON.stringify(newPoll), (err) => {
			if (err) throw err;
			
			console.log('Poll was created!');
		});
	
		res.send("Hello from POST Poll").status(201);

		return
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return
	}
}

export const getAllPollsController = (req: Request, res: Response) => {
	try {
		res.send(polls).status(200);

		return
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return
	}
}

export const updatePollController = (req: Request, res: Response) => {
	try {
		let { pollId, updateTitle } = req.body;
	
		const findPoll: any = polls.find(poll => poll.id == pollId);
	
		findPoll.title = updateTitle;
	
		res.send(findPoll).status(200);
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return
	}
}

export const deletePollController = (req: Request, res: Response) => {
	try {
		let pollId: any = req.query.pollId;

		const deletePoll = polls.filter(poll => poll.id != pollId);
	
		polls = deletePoll;
	
		res.send(polls).status(200);

		return
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return
	}
}