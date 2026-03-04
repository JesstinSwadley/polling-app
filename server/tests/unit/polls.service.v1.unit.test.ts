import { describe, it, expect, vi, beforeEach } from "vitest";
import { PollService } from "../../src/services/v1/polls.service.js";
import { db } from "../../src/db/drizzle.js";
import { polls } from "../../src/db/schema.js";

vi.mock("../../src/db/drizzle.js", () => ({
	db: {
		insert: vi.fn(),
		select: vi.fn(),
		update: vi.fn(),
		delete: vi.fn(),
	},
}));

describe("PollService Unit Tests", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe("create poll service", () => {
		it("should successfully call the database to create a poll", async () => {
			const mockQuery = "What is your favorite programming language?";

			const mockValues = vi.fn().mockResolvedValue(undefined);
			vi.mocked(db.insert).mockReturnValue({ values: mockValues } as any);

			await PollService.create({ pollQuery: mockQuery });

			expect(db.insert).toHaveBeenCalledWith(polls);
			expect(mockValues).toHaveBeenCalledWith({ query: mockQuery });
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

	describe("list all polls service", () => {
		it("should return a list of all polls sorted by id", async () => {
			const mockPolls = [
				{ id: 1, query: "Poll 1", createdAt: new Date() },
				{ id: 2, query: "Poll 2", createdAt: new Date() },
			];

			const mockOrderBy = vi.fn().mockResolvedValue(mockPolls);
			const mockFrom = vi.fn().mockReturnValue({ orderBy: mockOrderBy });
			vi.mocked(db.select).mockReturnValue({ from: mockFrom } as any);

			const result = await PollService.listAll();

			expect(result).toEqual(mockPolls);
			expect(db.select).toHaveBeenCalled();
		});

		it("should return an empty array if no polls exist", async () => {
			const mockOrderBy = vi.fn().mockResolvedValue([]);
			vi.mocked(db.select).mockReturnValue({
				from: vi.fn().mockReturnValue({ orderBy: mockOrderBy })
			} as any);

			const result = await PollService.listAll();

			expect(result).toEqual([]);
		});

		it("should throw an error if select fails", async () => {
			const mockError = new Error("Connection Timeout");
			const mockOrderBy = vi.fn().mockRejectedValue(mockError);
			
			vi.mocked(db.select).mockReturnValue({
				from: vi.fn().mockReturnValue({ orderBy: mockOrderBy })
			} as any);

			await expect(PollService.listAll()).rejects.toThrow("Connection Timeout");
		});
	});
});