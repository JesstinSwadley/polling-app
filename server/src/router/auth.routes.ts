import { Router } from "express";
import { authRegisterController } from "../controller/auth.controller";

export const authRouter: Router = Router();

authRouter.post("/register", authRegisterController);