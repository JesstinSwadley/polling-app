import express, { Express, Request } from "express";
import cors from "cors";

// Routers
import { pollRouter } from "./router/polls.routes";
import { choiceRouter } from "./router/choices.routes";
import { voteRouter } from "./router/votes.routes";

const PORT = process.env.PORT || 3000;
const app: Express = express();

// Express Config
app.use(express.json());
app.use(cors<Request>());

// Routes
app.use("/polls", pollRouter);
app.use("/choices", choiceRouter);
app.use("/votes", voteRouter);

app.listen(PORT, () => {
	console.log(`Server is running on Port: ${PORT}`);
});