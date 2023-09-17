import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {
  customers,
  customerrequirements,
} from "../../db/schema";
import { NextApiResponse, NextApiRequest } from "next";
import { Customer, CustomerWork, DemographicData } from "@/models/app";
import {
  mapCustomerToDemoGraphicData,
  mapCustomerToCustomerWork,
} from "@/utils";

export const db = drizzle(sql);

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const c = request.body as Customer;
  const customerDemographicData = mapCustomerToDemoGraphicData(c);

  return await db
    .transaction(async (tx) => {
      const result = await db
        .insert(customers)
        .values(customerDemographicData)
        .returning({ customerId: customers.id });

      const customerQuery = mapCustomerToCustomerWork(c);

      await db
        .insert(customerrequirements)
        .values({ ...customerQuery, customerid: result[0].customerId })
        .returning({ customerrequirementsId: customerrequirements.id });
    })
    .then(() => response.status(201).json({}));
}
