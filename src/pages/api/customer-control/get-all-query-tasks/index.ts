import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { NextApiResponse, NextApiRequest } from "next";
import { tasks } from "@/db/schema";

export const db = drizzle(sql);
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const selectResult = await db.select().from(tasks);
  return response.status(200).json(selectResult);
}
