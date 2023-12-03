import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { customers, customerrequirements, meals } from "../../db/schema";
import { NextApiResponse, NextApiRequest } from "next";
import { Customer, Meal } from "@/models/app";
import {
  mapCustomerToDemoGraphicData,
  mapCustomerToCustomerWork,
} from "@/utils";

export const db = drizzle(sql);

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const c = request.body as Meal;
  //const customerDemographicData = mapCustomerToDemoGraphicData(c);

  return await db
    .transaction(async (tx) => {
      const result = await db
        .insert(meals)
        .values(c)
        .returning({ id: meals.id });
    })
    .then(() => response.status(201).json({}));
}
