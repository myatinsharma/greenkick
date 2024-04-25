import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { customers, itemcategories, vendors } from "@/db/schema";
import { NextApiResponse, NextApiRequest } from "next";

export const db = drizzle(sql);
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const customersData = await db.select().from(customers);
  const categoriesData = await db.select().from(itemcategories);
  const vendorsData = await db.select().from(vendors);
  return response
    .status(200)
    .json({
      customers: customersData,
      categories: categoriesData,
      vendors: vendorsData,
    });
}
