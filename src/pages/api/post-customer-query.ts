import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { customer, customerformcontrols } from '../../db/schema';
import { NextApiResponse, NextApiRequest } from 'next';
import { Customer, DemographicData } from '@/models/app';
import { InferModel } from 'drizzle-orm';

// type newCustomer = InferModel<typeof customer, "insert">;

export const db = drizzle(sql); 
export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse,
  ) {
    const customerQueryData = request.body.query as DemographicData;
  await db.insert(customer).values(customerQueryData).returning();
  return response.status(200).json('done');
};