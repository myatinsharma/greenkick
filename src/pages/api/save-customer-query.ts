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

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const c = request.body as Customer;
  const customerDemographicData = mapCustomerToDemoGraphicData(c);
  await db
    .insert(customers)
    .values(customerDemographicData)
    .returning({ id: customers.id })
    .then((res) => {
      console.log(res);
    });

  const customerQuery = mapCustomerToCustomerWork(c);
  // const {
  //   requiredWorkCategory,
  //   requiredWorkSubCategory,
  //   convertedIntoLead,
  //   referenceSource,
  //   visitDate,
  // } = c;
  await db
    .insert(customerrequirements)
    .values({ ...customerQuery, customerId: 6 });
  return response.status(200).json("done");
}
