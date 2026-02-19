import { describe, it, expect, vi, beforeEach } from "vitest";
import { PollService } from "../../src/services/v1/polls.services.js";
import { db } from "../../src/db/drizzle.js";
import { polls } from "../../src/db/schema.js";

vi.mock("../../src/db/drizzle.js", () => ({
	db: {
		insert: vi.fn().mockReturnThis(),
		values: vi.fn().mockReturnThis(),
		returning: vi.fn(),
	},
}));

describe("PollService Unit Tests", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe("create poll service", () => {
		it("should successfully call the database to create a poll", async () => {
			const mockQuery = "What is your favorite programming language?";
			const mockResult = [{ 
				id: 1, query: mockQuery
			}];

			(db.insert(polls).values as any).mockReturnValue({
				returning: vi.fn().mockResolvedValue(mockResult),
			});

			await PollService.create({ pollQuery: mockQuery });


			expect(db.insert).toHaveBeenCalledWith(polls);
			expect(db.insert(polls).values).toHaveBeenCalledWith({
				query: mockQuery,
			});
		});

		it("should throw an error if the database operation fails", async () => {
			const mockError = new Error("Database connection lost");

			vi.mocked(db.insert).mockReturnValue({
				values: vi.fn().mockRejectedValue(mockError)
			} as any);

			await expect(
				PollService.create({ 
					pollQuery: "Failure test"
				})
			).rejects.toThrow("Database connection lost");
		});
	});
});