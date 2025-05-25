import { Router } from "express";
import { createPollController, deletePollController, getAllPollsController, updatePollController } from "../controller/polls.controller";

export const pollRouter: Router = Router();

pollRouter.post("/create", createPollController);
pollRouter.get("/get-all", getAllPollsController);
pollRouter.patch("/update", updatePollController);
pollRouter.delete("/delete", deletePollController);