import { Router } from "express";
import { createChoiceController, deleteChoiceController, getAllPollChoicesController, updateChoiceController } from "../controller/choices.controller";

export const choiceRouter: Router = Router();

choiceRouter.post("/create", createChoiceController);
choiceRouter.get("/get-all", getAllPollChoicesController);
choiceRouter.patch("/update", updateChoiceController);
choiceRouter.delete("/delete", deleteChoiceController);