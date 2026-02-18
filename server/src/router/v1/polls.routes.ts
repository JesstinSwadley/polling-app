import { Router } from "express";
import { deletePollController, getListOfAllPollsController, newPollController, updatePollController } from "../../controller/v1/polls.controller.js";

// Router
export const pollRouter: Router = Router();

// Routes
pollRouter.post("/new", newPollController);
pollRouter.get("/list-all", getListOfAllPollsController);
pollRouter.patch("/update/:pollId", updatePollController);
pollRouter.delete("/delete/:pollId", deletePollController);