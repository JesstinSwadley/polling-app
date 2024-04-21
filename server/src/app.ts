import express, { Express, Request, Response } from 'express';

const app: Express = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/poll", (req: Request, res: Response) => {
	const test = req.body.test;

	res.status(200).send(`Reponse ${test}`);
});

app.listen(PORT, () => {
	console.log(`Running on Port: ${PORT}`);
});