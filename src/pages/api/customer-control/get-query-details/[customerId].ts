import { drizzle } from "drizzle-orm/vercel-postgres";
import { eq } from "drizzle-orm";
import { sql } from "@vercel/postgres";
import { customerrequirements, customers, users } from "../../../../db/schema";
import { NextApiResponse, NextApiRequest } from "next";

export const db = drizzle(sql);
export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse
) {
    const {
        query: { customerId },
    } = request;
    if (!customerId) {
        return response.status(204);
    }
    const selectResult = await db.select().from(customers).innerJoin(customerrequirements, eq(customers.id, customerrequirements.customerid)).where(eq(customers.id, parseInt(customerId as string)));
    if (selectResult.length > 0) {
        return response.status(200).json(selectResult);
    }
    return response.status(200).json({});
}
