import { Router, Request, Response } from "express";

export const pollRouter = Router();

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

pollRouter.post("/create", (req: Request, res: Response) => {
	let { pollTitle } = req.body;

	polls.push({
		id: Math.floor(Math.random() * 10),
		"title": pollTitle
	});

	console.log(polls);

	res.send("Hello from POST Poll").status(201);
});

pollRouter.get("/all", (req: Request, res: Response) => {
	res.send(polls).status(200);
});

pollRouter.patch("/update", (req: Request, res: Response) => {
	let { pollId, updateTitle } = req.body;

	const findPoll: any = polls.find(poll => poll.id === pollId);

	findPoll.title = updateTitle;

	res.send(findPoll).status(200);
});

pollRouter.delete("/delete", (req: Request, res: Response) => {
	let  pollId: any = req.query.pollId;

	const deletePoll = polls.filter(poll => poll.id != pollId);

	polls = deletePoll;

	res.send(polls).status(200);
});