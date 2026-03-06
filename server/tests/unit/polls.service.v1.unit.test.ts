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

	describe("update poll service", () => {
		it("should return the poll id when update is successful", async () => {
			const mockId = 1;
			const mockQuery = "Updated Poll Title";

			const mockReturning = vi.fn().mockResolvedValue([{ id: mockId }]);
			const mockWhere = vi.fn().mockReturnValue({ returning: mockReturning });
			const mockSet = vi.fn().mockReturnValue({ where: mockWhere });
			
			vi.mocked(db.update).mockReturnValue({ set: mockSet } as any);

			const result = await PollService.update(mockId, mockQuery);

			expect(result).toBe(mockId);
			expect(db.update).toHaveBeenCalledWith(polls);
			expect(mockSet).toHaveBeenCalledWith({ query: mockQuery });
			expect(mockWhere).toHaveBeenCalled();
		});

		it("should return null if the poll to update does not exist", async () => {
			const mockId = 999;

			const mockReturning = vi.fn().mockResolvedValue([]); 
			const mockWhere = vi.fn().mockReturnValue({ returning: mockReturning });
			const mockSet = vi.fn().mockReturnValue({ where: mockWhere });

			vi.mocked(db.update).mockReturnValue({ set: mockSet } as any);

			const result = await PollService.update(mockId, "Some Query");

			expect(result).toBeNull();
		});

		it("should throw an error if the database update fails", async () => {
			const mockError = new Error("Unique constraint violation");
			
			vi.mocked(db.update).mockImplementation(() => {
				throw mockError;
			});

			await expect(
				PollService.update(1, "Faulty update")
			).rejects.toThrow("Unique constraint violation");
		});
	});
});