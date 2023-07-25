import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { customer, customerformcontrols, customerrequirements } from '../../db/schema';
import { NextApiResponse, NextApiRequest } from 'next';
import { Customer, CustomerWork, DemographicData } from '@/models/app';

export const db = drizzle(sql);
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  console.log('body', request.body);
  const customerData = request.body as DemographicData;
  const customerQuery = request.body as CustomerWork;
  await db.insert(customer).values(customerData);
  await db.insert(customerrequirements).values(customerQuery).returning({ customerrequirementsId: customerrequirements.id });
  return response.status(200).json('done');
};