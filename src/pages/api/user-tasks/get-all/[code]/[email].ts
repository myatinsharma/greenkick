import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { NextApiResponse, NextApiRequest } from "next";
import { tasks, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const db = drizzle(sql);
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const {
    query: { code, email },
  } = request;
  if (!code) {
    return response.status(204);
  }
  const selectResult = await db
    .select()
    .from(tasks)
    .innerJoin(users, eq(tasks.assigned_to_user_id, users.id))
    .where(eq(users.codeword, code as string))
    .where(eq(users.email, email as string));
  return response.status(200).json(selectResult);
}
