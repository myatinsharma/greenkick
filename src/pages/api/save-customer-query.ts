import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { customers, customerrequirements } from "../../db/schema";
import { NextApiResponse, NextApiRequest } from "next";
import { Customer, DemographicData } from "@/models/app";

export const db = drizzle(sql);

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const c = request.body as Customer;
  const customerDemographicData: DemographicData = {} as DemographicData;

  return await db
    .transaction(async (tx) => {
      const result = await db
        .insert(customers)
        .values({ name: "x", id: 1 })
        .returning({ customerId: customers.id });

      // await db
      //   .insert(customerrequirements)
      //   .values({ ...customerQuery, customerid: result[0].customerId })
      //   .returning({ customerrequirementsId: customerrequirements.id });
    })
    .then(() => response.status(201).json({}));
}
