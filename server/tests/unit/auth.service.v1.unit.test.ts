import { beforeEach, describe, expect, it, vi } from "vitest";
import { AuthService } from "../../src/services/v1/auth.service";
import { db } from "../../src/db/drizzle";
import bcrypt from "bcryptjs";

vi.mock("../../src/db/drizzle.js", () => ({
	db: {
		insert: vi.fn(),
		select: vi.fn(),
	},
}));

vi.mock("bcryptjs", () => {
	const mockHash = vi.fn().mockResolvedValue("hashed_pass");
	const mockGenSalt = vi.fn().mockResolvedValue("salt");
	const mockCompare = vi.fn();

	return {
		hash: mockHash,
		genSalt: mockGenSalt,
		compare: mockCompare,
		default: {
			hash: mockHash,
			genSalt: mockGenSalt,
			compare: mockCompare,
		}
	};
});

describe("AuthService Unit Tests", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe("reigster", () => {
		it("should return user info for valid credentials", async () => {
			const mockInput = { username: "tester", password: "password123" };

			const mockReturning = vi.fn().mockResolvedValue([{ id: 1, username: "tester" }]);
			const mockValues = vi.fn().mockReturnValue({ returning: mockReturning });

			vi.mocked(db.insert).mockReturnValue({ values: mockValues } as any);

			const result = await AuthService.register(mockInput);

			expect(result).toEqual({
				id: 1,
				username: "tester"
			});

			expect(bcrypt.hash).toHaveBeenCalledWith("password123", "salt");
		});
	});

	describe("validate user", () => {
		it("should return user info for valid credentials", async () => {
			const mockUser = { id: 1, username: "tester", hash_password: "hashed_pass" };

			const mockWhere = vi.fn().mockResolvedValue([mockUser]);

			vi.mocked(db.select).mockReturnValue({
				from: vi.fn().mockReturnValue({ where: mockWhere })
			} as any);

			vi.mocked(bcrypt.compare).mockResolvedValue(true as never);

			const result = await AuthService.validateUser({ username: "tester", password: "password123" });

			expect(result).toEqual({ id: 1, username: "tester" });
		});

		it("should throw error for invalid password", async () => {
			vi.mocked(db.select).mockReturnValue({
				from: vi.fn().mockReturnValue({
					where: vi.fn().mockReturnValue([{
						hash_password: "hashed_pass"
					}])
				})
			} as any);

			vi.mocked(bcrypt.compare).mockResolvedValue(false as never);
			
			await expect(AuthService.validateUser({ 
					username: "tester", password: "wrong" 
				}))
				.rejects
				.toThrow("Invalid username or password");
		});
	});
});