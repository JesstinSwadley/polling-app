import { Router } from "express";
import { pollRouter } from "./v1/polls.routes.js";
import { authRouter } from "./v1/auth.routes.js";
import { healthRouter } from "./v1/health.routes.js";

// Router
export const apiV1Router: Router = Router();

// Routes
apiV1Router.use("/polls", pollRouter);
apiV1Router.use("/auth", authRouter);
apiV1Router.use("/health", healthRouter);

