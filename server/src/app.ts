import express, { Express } from 'express';
import { pollRouter } from './router/polls.routes';

const app: Express = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Routes
app.use("/polls", pollRouter);

app.listen(PORT, () => {
	console.log(`Running on Port: ${PORT}`);
});