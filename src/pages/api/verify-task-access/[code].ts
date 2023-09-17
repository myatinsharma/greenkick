import { drizzle } from "drizzle-orm/vercel-postgres";
import { eq } from "drizzle-orm";
import { sql } from "@vercel/postgres";
import { users } from "../../../db/schema";
import { NextApiResponse, NextApiRequest } from "next";

export const db = drizzle(sql);
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const {
    query: { code },
  } = request;
  if (!code) {
    return response.status(200).json({ access: false });
  }
  const selectResult = await db.select().from(users).where(eq(users.codeword, code as string));
  if (selectResult.length > 0) {
    return response.status(200).json({ access: true });
  }
  return response.status(200).json({ access: false });
}
