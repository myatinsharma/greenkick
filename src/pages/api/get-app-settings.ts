import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { customerformcontrols } from '../../db/schema';
import { NextApiResponse, NextApiRequest } from 'next';
import { eq } from 'drizzle-orm';
 
export const db = drizzle(sql); 
export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse,
  ) {
  const selectResult = await db.select().from(customerformcontrols).where(eq(customerformcontrols.app_id, 3));
  return response.status(200).json(selectResult);
};