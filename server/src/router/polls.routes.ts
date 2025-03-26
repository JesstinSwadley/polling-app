import { Router } from "express";
import { createPollController, deletePollController, getAllPollsController, updatePollController } from "../controller/polls.controller";
import { auth } from "../middleware/auth";

export const pollRouter: Router = Router();

pollRouter.post("/create", auth, createPollController);
pollRouter.get("/all", getAllPollsController);
pollRouter.patch("/update", auth, updatePollController);
pollRouter.delete("/delete", auth, deletePollController);