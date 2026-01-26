import express, { Express, json, Request } from "express";
import cors from "cors";

//Routers
import { apiV1Router } from "./router/v1.routes";

// Express Config
const app: Express = express();
app.use(json());
app.use(cors<Request>());

// Routes
app.use("/v1", apiV1Router);

export default app;