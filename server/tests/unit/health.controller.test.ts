import { describe, it, expect, vi } from "vitest";

import { type Request, type Response } from "supertest";
import { healthCheckController } from "../../src/controller/v1/health.controller";


describe("healthCheckController Unit Test", () => {
	it("should send a 200 status and the correct JSON body", () => {
		const req = {} as Request;

		const res = {
			status: vi.fn().mockReturnThis(),
			json: vi.fn(),
		} as unknown as Response;

		healthCheckController(req, res);

		expect(res.status).toHaveBeenCalledWith(200);

		expect(res.json).toHaveBeenCalledWith(
			expect.objectContaining({
				status: "ok",
				timestamp: expect.any(String),
			})
		);
	});
});