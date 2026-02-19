import { db } from "../../db/drizzle.js";
import { polls } from "../../db/schema.js";
import { eq } from "drizzle-orm";
import { InferSelectModel } from "drizzle-orm";

export type Poll = InferSelectModel<typeof polls>;

export interface CreatePollDTO {
    pollQuery: string;
}

export class PollService {
    static async create(data: CreatePollDTO): Promise<void> {
        await db.insert(polls).values({
            query: data.pollQuery
        });
    }

    static async listAll(): Promise<Poll[]> {
        return await db.select().from(polls).orderBy(polls.id);
    }

    static async update(id: number, query: string): Promise<number | null> {
        const result = await db
            .update(polls)
            .set({ query })
            .where(eq(polls.id, id))
            .returning({ id: polls.id });

        return result.length > 0 ? result[0].id : null;
    }

    static async delete(id: number): Promise<boolean> {
        const result = await db
            .delete(polls)
            .where(eq(polls.id, id))
            .returning({ id: polls.id });

        return result.length > 0;
    }
}