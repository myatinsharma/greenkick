import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {
  customer,
  customerformcontrols,
  customerrequirements,
} from "../../db/schema";
import { NextApiResponse, NextApiRequest } from "next";
import { Customer, CustomerWork, DemographicData } from "@/models/app";
import { mapProperties } from "@/utils";

export const db = drizzle(sql);
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const c = request.body as Customer;
  const customerData = request.body as DemographicData;
  //const customerQuery = request.body as CustomerWork;
  console.log("customerData", customerData);
  const xo = mapProperties<Customer, DemographicData>(c);
  console.log("xo", xo);
  // await db
  //   .insert(customer)
  //   .values({ name: customerData.name, mobile: customerData.mobile });
  //await db.insert(customerrequirements).values(customerQuery).returning({ customerrequirementsId: customerrequirements.id });
  return response.status(200).json("done");
}
