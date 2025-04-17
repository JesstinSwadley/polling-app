import express, { Express, Request } from "express";
import cors from "cors";

// Routers
import { pollRouter } from "./router/polls.routes";

const PORT = process.env.PORT || 3000;
const app: Express = express();

// Express Config
app.use(express.json());
app.use(cors<Request>());

// Routes
app.use("/polls", pollRouter);

app.listen(PORT, () => {
	console.log(`Server is running on Port: ${PORT}`);
});