import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {  customers } from "@/db/schema";
import { NextApiResponse, NextApiRequest } from "next";

export const db = drizzle(sql);
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const selectResult = await db.select().from(customers);
  return response.status(200).json(selectResult);
}
