import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { meals } from "@/db/schema";
import { NextApiResponse, NextApiRequest } from "next";
import { ne } from "drizzle-orm";

export const db = drizzle(sql);
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const selectResult = await db
    .select()
    .from(meals)
    .where(ne(meals.other, "test"));
  return response.status(200).json(selectResult);
}
