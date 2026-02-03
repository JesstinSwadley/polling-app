import { beforeEach, describe, expect, it, beforeAll } from "vitest";
import request from "supertest";
import app from "../../src/app";
import { db } from "../../src/db/drizzle";
import { polls } from "../../src/db/schema";


describe('Polls Integration Tests', () => {
	beforeEach(async () => {
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

	describe("PATCH /v1/polls/update/:pollId", () => {
		it("updates an existing poll", async () => {
			const inserted = await db
				.insert(polls)
				.values({
					query: "Original Question"
				})
				.returning({
					id: polls.id
				});

			const pollId = inserted[0].id;

			const response = await request(app)
				.patch(`/v1/polls/update/${pollId}`)
				.send({
					pollQuery: "Updated question"
				})
				.expect(200);

			expect(response.body).toEqual({
				message: "Poll has been updated",
				pollId
			});

			const result = await db.select().from(polls);
			expect(result.length).toBe(1);
			expect(result[0].query).toBe("Updated question");
		});

		it("returns 400 when pollQuery is missing", async () => {
			const inserted = await db
				.insert(polls)
				.values({
					query: "Original Question"
				})
				.returning({
					id: polls.id
				});

			const pollId = inserted[0].id;

			const response = await request(app)
				.patch(`/v1/polls/update/${pollId}`)
				.send({})
				.expect(400);

			expect(response.body.error).toBe("Missing Data");
		});

		it("returns 404 when poll does not exist", async () => {
			const response = await request(app)
				.patch(`/v1/polls/update/999999`)
				.send({
					pollQuery: "Does not exist"
				})
				.expect(404);

			expect(response.body.error).toBe("Poll not found");
		});
	});

	describe("DELETE /v1/polls/delete/:pollId", () => {
		it("should delete an existing poll and return 200", async () => {
			const inserted = await db
				.insert(polls)
				.values({
					query: "Original Question"
				})
				.returning({
					id: polls.id
				});

			const pollId = inserted[0].id;

			const response = await request(app)
				.delete(`/v1/polls/delete/${pollId}`)
				.expect(200);

			expect(response.body).toEqual({
				message: "Poll has been deleted",
			});

			const remainingPolls = await db.select().from(polls);
			expect(remainingPolls.length).toBe(0);
		});

		it("should return 400 when pollId is missing", async () => {
			const response = await request(app)
				.delete(`/v1/polls/delete/0`)
				.expect(400);

			expect(response.body.error).toBe("Missing Data");
		});

		it("should return 404 when poll does not exist", async () => {
			const response = await request(app)
				.delete(`/v1/polls/delete/9999`)
				.expect(404);

			expect(response.body.error).toBe("Poll not found");
		});
	});
});