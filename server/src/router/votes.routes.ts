import { Router } from "express";
import { createVoteController } from "../controller/votes.controller";

export const voteRouter: Router = Router();

voteRouter.post("/create", createVoteController);