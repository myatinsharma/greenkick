import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { orders } from "../../db/schema";
import { NextApiResponse, NextApiRequest } from "next";
import { Order } from "@/models/app";

export const db = drizzle(sql);

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const order = request.body as Order;

  return await db
    .transaction(async (tx) => {
      await db
        .insert(orders)
        .values({
          ...order,
          order_date: new Date(order.order_date),
          payment_date: new Date(order.payment_date),
          shipping_date: new Date(order.shipping_date),
        })
        .returning({ orderId: orders.id });
    })
    .then(() => response.status(201).json({}));
}
