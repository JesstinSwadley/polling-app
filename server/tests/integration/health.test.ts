import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../../src/app";

describe('GET /v1/health/status', () => {
	it('should return 200 OK and the correct JSON structur', async () => {
		const response = await request(app).get('/v1/health/status');

		// Check Status Code
		expect(response.status).toBe(200);

		// Check Content Type
		expect(response.headers['content-type']).toMatch(/json/);

		// Check Body Content
		expect(response.body).toEqual({
			status: 'ok',
			timestamp: expect.any(String)
		})
	});
});