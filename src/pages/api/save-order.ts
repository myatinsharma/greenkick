import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { customers, itemcategories, orders, vendors } from "../../db/schema";
import { NextApiResponse, NextApiRequest } from "next";
import { Order } from "@/models/app";
import { eq } from "drizzle-orm";

export const db = drizzle(sql);

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const order = request.body as Order;

  return await db
    .transaction(async (tx) => {
      const bCustomerSavedAlready = await db
        .select()
        .from(customers)
        .where(eq(customers.name, order.customer_name as string));

      if (bCustomerSavedAlready.length == 0) {
        await db.insert(customers).values({ name: order.customer_name });
      }

      const bCategorySavedAlready = await db
        .select()
        .from(itemcategories)
        .where(eq(itemcategories.title, order.item_category as string));

      if (bCategorySavedAlready.length == 0) {
        await db.insert(itemcategories).values({ title: order.item_category });
      }

      const bVendorSavedAlready = await db
        .select()
        .from(vendors)
        .where(eq(vendors.name, order.vendor as string))
        .where(eq(vendors.code, order.vendor_code_internal as string));

      if (bVendorSavedAlready.length == 0) {
        await db
          .insert(vendors)
          .values({ name: order.vendor, code: order.vendor_code_internal });
      }

      const bOrderSavedAlready = await db
        .select()
        .from(orders)
        .where(eq(orders.id, order.id as number));

      if (!bOrderSavedAlready) {
        console.log("inserting order..........................");
        await db
          .insert(orders)
          .values({
            ...order,
            order_date: new Date(order.order_date),
            payment_date: new Date(order.payment_date),
            shipping_date: new Date(order.shipping_date),
          })
          .returning({ orderId: orders.id });
      } else {
        console.log("updating order..........................");
        await db
          .update(orders)
          .set({
            ...order,
            order_date: new Date(order.order_date),
            payment_date: new Date(order.payment_date),
            shipping_date: new Date(order.shipping_date),
          })
          .where(eq(orders.id, order.id as number))
          .returning({ orderId: orders.id });
      }
    })
    .then(() => response.status(201).json({}));
}
