import { Router } from "express";
import { createOptionController, getAllPollOptionsController } from "../controller/options.controller";

export const optionRouter: Router = Router();

optionRouter.post("/create", createOptionController);
optionRouter.get("/get-all", getAllPollOptionsController);