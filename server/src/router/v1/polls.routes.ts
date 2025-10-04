import { Router } from "express";
import { newPollController } from "../../controller/v1/polls.controller";

// Router
export const pollRouter: Router = Router();

// Routes
pollRouter.post("/new", newPollController);