// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { drizzle } from 'drizzle-orm/postgres-js';
import type { NextApiRequest, NextApiResponse } from 'next'
import postgres from 'postgres';
import { customerformcontrols } from '../../db/schema/schema';
import { InferModel } from 'drizzle-orm';

type Data = {
  name: string
}

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: "postgres://default:I1rzjgR4aulW@ep-super-dawn-860446-pooler.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require",
})

const queryConnection = postgres(process.env.DATABASE_URL!);
const db = drizzle(queryConnection);
type CFC = InferModel<typeof customerformcontrols, "select">;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      console.log(await db.select().from(customerformcontrols));
      const result = "";
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching users from database.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}