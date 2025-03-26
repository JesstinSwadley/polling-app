import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export const auth = (req: Request, res: Response, next: NextFunction) => {
	const token = req.header('Authorization');
	if (!token) {
		res.status(401).json({
			error: 'Access denied. No token provided.'
		});

		return;
	}

	try {
		const decode = jwt.verify(token, secret);
		// req.user = decode;

		console.log(decode);

		next();
	} catch (error) {
		res.status(400).json({
			error: 'Invalid Token'
		});

		return
	}
}