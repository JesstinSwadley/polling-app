import { Router } from "express";
import { pollRouter } from "./v1/polls.routes";
import { authRouter } from "./v1/auth.routes";
import { healthRouter } from "./v1/health.routes";

// Router
export const apiV1Router: Router = Router();

// Routes
apiV1Router.use("/polls", pollRouter);
apiV1Router.use("/auth", authRouter);
apiV1Router.use("/health", healthRouter);

