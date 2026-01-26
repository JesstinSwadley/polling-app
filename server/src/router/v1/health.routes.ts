import { Router } from "express";
import { healthCheckController } from "../../controller/v1/health.controller";

// Router
export const healthRouter: Router = Router();

// Routes
healthRouter.get("/status", healthCheckController);