import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
import { customerformcontrols } from '../../db/schema/schema';
import { NextApiResponse, NextApiRequest } from 'next';
 
// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);
// Create a pgTable that maps to a table in your DB
 
export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse,
  ) {
  const selectResult = await db.select().from(customerformcontrols);
  console.log('Results', selectResult);
  return response.status(200).json({ selectResult });
};