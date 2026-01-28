import { afterAll, describe, expect, it } from "vitest";
import request from "supertest";
import app from "../../src/app";
import { db } from "../../src/db/drizzle";
import { polls } from "../../src/db/schema";


describe('Polls Integration Tests', () => {
	afterAll(async () => {
		await db.delete(polls);
	});

	describe('POST /v1/polls', () => {
		it('should create a new poll and return 201', async () => {
			const payload = { pollQuery: 'What is your favorite color?'};

			const response = await request(app)
				.post('/v1/polls/new')
				.send(payload);

			expect(response.status).toBe(201);
			expect(response.text).toBe('Poll was created');
		});

		it('should return 400 when pollQuery is missing', async () => {
			const response = await request(app)
				.post('/v1/polls/new')
				.send({});

			expect(response.status).toBe(400);
			expect(response.text).toContain('Missing Data');
		});

		it('should return 400 when pollQuery is an empty string', async () => {
			const response = await request(app)
				.post('/v1/polls/new')
				.send({
					pollQuery: ""
				});

			expect(response.status).toBe(400);
			expect(response.text).toContain('Missing Data');
		});
	});
});