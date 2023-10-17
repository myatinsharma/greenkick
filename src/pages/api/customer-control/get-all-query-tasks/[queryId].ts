import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { NextApiResponse, NextApiRequest } from "next";
import { tasks } from "@/db/schema";
import { eq } from "drizzle-orm";

export const db = drizzle(sql);
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const {
    query: { queryId },
  } = request;
  if (!queryId) {
    return response.status(204);
  }
  const selectResult = await db
    .select()
    .from(tasks)
    .where(eq(tasks.customer_query_id, parseInt(queryId as string)));
  return response.status(200).json(selectResult);
}
