import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { meals, orders } from "@/db/schema";
import { NextApiResponse, NextApiRequest } from "next";
import { ne, eq } from "drizzle-orm";

export const db = drizzle(sql);
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const orderDate = request.query["orderDate"];
  const selectResult = await db
    .select()
    .from(orders)
    .where(eq(orders.order_date, new Date(orderDate as string)));
  return response.status(200).json(selectResult);
}
