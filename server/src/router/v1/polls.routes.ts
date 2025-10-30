import { Router } from "express";
import { getListOfAllPollsController, newPollController, updatePollController } from "../../controller/v1/polls.controller";

// Router
export const pollRouter: Router = Router();

// Routes
pollRouter.post("/new", newPollController);
pollRouter.get("/list-all", getListOfAllPollsController);
pollRouter.patch("/update", updatePollController);