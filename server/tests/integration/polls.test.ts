import { beforeEach, afterAll, describe, expect, it } from "vitest";
import request from "supertest";
import app from "../../src/app";
import { db } from "../../src/db/drizzle";
import { polls } from "../../src/db/schema";


describe('Polls Integration Tests', () => {
	beforeEach(async () => {
		await db.delete(polls);
	});

	afterAll(async () => {
		await db.delete(polls);
	});

	describe('POST /v1/polls/new', () => {
		it('should create a new poll and return 201', async () => {
			const payload = { pollQuery: 'What is your favorite color?'};

			const response = await request(app)
				.post('/v1/polls/new')
				.send(payload)
				.expect(201);

			expect(response.body).toEqual({
				message: "Poll was created",
			});

			const result = await db.select().from(polls);
			expect(result.length).toBe(1);
			expect(result[0].query).toBe(payload.pollQuery);
		});

		it('should return 400 when pollQuery is missing', async () => {
			const response = await request(app)
				.post('/v1/polls/new')
				.send({})
				.expect(400);

			expect(response.body.error).toBe('Missing Data');
		});

		it('should return 400 when pollQuery is an empty string', async () => {
			const response = await request(app)
				.post('/v1/polls/new')
				.send({
					pollQuery: ""
				})
				.expect(400);
			
			expect(response.body.error).toBe('Missing Data');
		});
	});

	describe("GET /v1/polls/list-all", () => {
		it("returns an empty array when no polls exist", async () => {
			const response = await request(app)
				.get("/v1/polls/list-all")
				.expect(200)
				.expect("Content-Type", /json/);

			expect(response.body).toEqual([]);
		});

		it("returns a list of polls", async () => {
			await db.insert(polls).values([
				{
					query: "Favorite food?"
				},
				{
					query: "Best movie?"
				},
			]);

			const response = await request(app)
				.get("/v1/polls/list-all")
				.expect(200);

			expect(response.body.length).toBe(2);
			expect(response.body[0]).toHaveProperty("query");
		});
	});
});