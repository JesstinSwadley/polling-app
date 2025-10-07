import express, { Express, json, Request } from "express";
import cors from "cors";

// env variables
const PORT = process.env.PORT || 8000;

// Express Config
const app: Express = express();
app.use(json());
app.use(cors<Request>());

//Routers
import { apiV1Router } from "./router/v1.routes";

// Routes
app.use("/v1", apiV1Router)

app.listen(PORT, () => {
	console.log(`Server is running on Port: ${PORT}`);
});