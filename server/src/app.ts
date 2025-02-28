import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const app: Express = express();
app.use(cors<Request>());
app.use(express.json());

app.post("/poll", (req: Request, res: Response) => {
	let { pollTitle } = req.body;

	console.log(pollTitle);

	res.send("Hello from POST Poll").status(201);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on Port: ${PORT}`);
});