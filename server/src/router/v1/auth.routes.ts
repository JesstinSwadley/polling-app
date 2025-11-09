import { Router } from "express";
import { registerUserController } from "../../controller/v1/auth.controller";

// Router
export const authRouter: Router = Router();

// Routes
authRouter.post("/register", registerUserController);