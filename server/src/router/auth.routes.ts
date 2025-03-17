import { Router } from "express";
import { authLoginController, authRegisterController } from "../controller/auth.controller";

export const authRouter: Router = Router();

authRouter.post("/register", authRegisterController);
authRouter.post("/login", authLoginController);