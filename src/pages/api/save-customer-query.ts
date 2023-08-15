import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {
  customers,
  customerformcontrols,
  customerrequirements,
} from "../../db/schema";
import { NextApiResponse, NextApiRequest } from "next";
import { Customer, CustomerWork, DemographicData } from "@/models/app";
import {
  mapCustomerToDemoGraphicData,
  mapCustomerToCustomerWork,
} from "@/utils";
import { InferModel } from "drizzle-orm";

export const db = drizzle(sql);

type CustReq = InferModel<typeof customerrequirements, "insert">;

const insertCustomerRequirements = async (cr: CustReq) => {
  return db.insert(customerrequirements).values(cr);
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const c = request.body as Customer;
  const customerDemographicData = mapCustomerToDemoGraphicData(c);
  await db
    .insert(customers)
    .values(customerDemographicData)
    .returning({ customerId: customers.id })
    .then((res) => {
      console.log(res[0].customerId);
      const customerQuery = mapCustomerToCustomerWork(c);
      db.insert(customerrequirements).values({
        ...customerQuery,
        customerid: res[0].customerId,
      });
    });
  return response.status(200).json("done");
}
