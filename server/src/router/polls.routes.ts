import { Router } from "express";
import { addPollController, deletePollByIdController, getAllPollsController, getPollByIdController, updatePollByIdController } from "../controllers/polls.controller";

export const pollRouter = Router();

pollRouter.post("/create", addPollController);
pollRouter.get("/get-all",getAllPollsController);
pollRouter.get("/get-by-id", getPollByIdController);
pollRouter.patch("/update-by-id", updatePollByIdController);
pollRouter.delete("/delete-by-id", deletePollByIdController);