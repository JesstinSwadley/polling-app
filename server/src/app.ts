import express, { Express, Request, Response } from 'express';
import { addPoll } from './handlers/polls/addPolls';

const app: Express = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/poll", async (req: Request, res: Response) => {
	try {
		const { question } = req.body;

		if (!question) {
			return res.sendStatus(400);
		}

		const poll = await addPoll(question)

		return res.status(201).json(poll);
	} catch (error) {
		console.error(error);
		return res.sendStatus(400);
	}
});

app.listen(PORT, () => {
	console.log(`Running on Port: ${PORT}`);
});