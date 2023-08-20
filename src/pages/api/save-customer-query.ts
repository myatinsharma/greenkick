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
  console.log("req", request.body);
  const c = request.body as Customer;
  const customerDemographicData = mapCustomerToDemoGraphicData(c);

  await db.transaction(async (tx) => {
    // const result = await db
    //   .insert(customers)
    //   .values(customerDemographicData)
    //   .returning({ customerId: customers.id });

    const customerQuery = mapCustomerToCustomerWork(c);
    console.log("cust", customerQuery);
    await db.insert(customerrequirements).values({
      convertedintolead: false,
      customerid: 21,
      notes: "notess",
      referencesource: "rs",
      requiredworkcategory: 2,
      requiredworksubcategory: 3,
      visitdate: "01/12/2023",
    });
  });
  return response.status(200).json("done");
}
