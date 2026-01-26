import { type Request, type Response } from "express";

export const healthCheckController = (req: Request, res: Response) => {
	res.status(200).json({
		status: "ok",
		timestamp: new Date().toISOString()
	});
}