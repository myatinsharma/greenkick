import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { customerformcontrols } from '../../db/schema';
import { NextApiResponse, NextApiRequest } from 'next';
 
export const db = drizzle(sql); 
export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse,
  ) {
  const selectResult = await db.select().from(customerformcontrols);
  console.log('Results', selectResult);
  return response.status(200).json({ selectResult });
};