// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: "postgres://default:I1rzjgR4aulW@ep-super-dawn-860446-pooler.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require",
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT * FROM users');
      const users = result.rows;
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching users from database.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}

// import { createKysely } from '@vercel/postgres-kysely';
 
// interface Database {
//   person: PersonTable;
//   pet: PetTable;
//   movie: MovieTable;
// }
 
// const db = createKysely<Database>();
 
// await db
//   .insertInto('pet')
//   .values({ name: 'Catto', species: 'cat', owner_id: id })
//   .execute();
 
// const person = await db
//   .selectFrom('person')
//   .innerJoin('pet', 'pet.owner_id', 'person.id')
//   .select(['first_name', 'pet.name as pet_name'])
//   .where('person.id', '=', id)
//   .executeTakeFirst();
