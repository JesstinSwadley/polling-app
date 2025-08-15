import { Router } from "express";
import { createVoteController, deleteVoteController, listVoteController, updateVoteController } from "../controller/votes.controller";

export const voteRouter: Router = Router();

voteRouter.post("/create", createVoteController);
voteRouter.get("/list", listVoteController);
voteRouter.patch("/update", updateVoteController);
voteRouter.delete("/delete", deleteVoteController);