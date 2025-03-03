
import express, { Express, Request } from 'express';
import cors from 'cors';

// Routers
import { pollRouter } from './router/polls.routes';
import { optionRouter } from './router/options.routes';

const app: Express = express();
app.use(cors<Request>());
app.use(express.json());

// Routes
app.use("/polls", pollRouter);
app.use("/options", optionRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on Port: ${PORT}`);
});