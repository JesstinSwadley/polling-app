import { Router } from "express";
import { pollRouter } from "./v1/polls.routes";

// Router
export const apiV1Router: Router = Router();

// Routes
apiV1Router.use("/polls", pollRouter);

