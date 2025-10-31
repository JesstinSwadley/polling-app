import { Router } from "express";
import { deletePollController, getListOfAllPollsController, newPollController, updatePollController } from "../../controller/v1/polls.controller";

// Router
export const pollRouter: Router = Router();

// Routes
pollRouter.post("/new", newPollController);
pollRouter.get("/list-all", getListOfAllPollsController);
pollRouter.patch("/update", updatePollController);
pollRouter.delete("/delete", deletePollController);