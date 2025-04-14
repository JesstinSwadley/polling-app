import express, { Express } from "express";

// Routers
import { pollRouter } from "./router/polls.routes";

const PORT = process.env.PORT || 3000;
const app: Express = express();

// Express Config
app.use(express.json());

// Routes
app.use("/polls", pollRouter);

app.listen(PORT, () => {
	console.log(`Server is running on Port: ${PORT}`);
});