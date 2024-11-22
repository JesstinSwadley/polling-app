import express, { Express, Request, Response } from 'express';
import { addPoll } from './handlers/polls/addPolls';
import { getAllPolls, getPollsById } from './handlers/polls/getPolls';

const app: Express = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/poll", async (req: Request, res: Response) => {
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
});

app.get("/all-polls", async(req: Request, res: Response) => {
	try {
		const polls = await getAllPolls();

		return res.status(200).json(polls);
	} catch (error) {
		console.error(error);
		return res.sendStatus(400);	
	}
});

app.get("/single-poll", async(req: Request, res: Response) => {
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
});

app.listen(PORT, () => {
	console.log(`Running on Port: ${PORT}`);
});