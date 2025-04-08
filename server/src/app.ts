import express, { Express } from "express";

import { pollRouter } from "./router/polls.routes";

const app: Express = express();

app.use("/polls", pollRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on Port: ${PORT}`);
});