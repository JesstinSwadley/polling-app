import { Router } from "express";
import { updateOptionByIdController } from "../controllers/options.controller";

export const optionRouter = Router();

optionRouter.patch("update-by-id", updateOptionByIdController);