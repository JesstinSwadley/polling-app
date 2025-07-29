import { Router } from "express";
import { createVoteController, listVoteController } from "../controller/votes.controller";

export const voteRouter: Router = Router();

voteRouter.post("/create", createVoteController);
voteRouter.get("/list", listVoteController);