import { Router } from "express";
import { createOptionController } from "../controller/options.controller";

export const optionRouter: Router = Router();

optionRouter.post("/create", createOptionController);