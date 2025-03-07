import { Router } from "express";
import { createOptionController, deleteOptionController, getAllOptionsController, updateOptionController } from "../controller/options.controller";

export const optionRouter = Router();

optionRouter.post("/create", createOptionController);
optionRouter.get("/all", getAllOptionsController);
optionRouter.patch("/update", updateOptionController);
optionRouter.delete("/delete", deleteOptionController);