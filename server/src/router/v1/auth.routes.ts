import { Router } from "express";
import { loginUserController, registerUserController } from "../../controller/v1/auth.controller";

// Router
export const authRouter: Router = Router();

// Routes
authRouter.post("/register", registerUserController);
authRouter.post("/login", loginUserController);