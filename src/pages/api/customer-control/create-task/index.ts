import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { tasks } from "@/db/schema";
import { NextApiResponse, NextApiRequest } from "next";
import { Task } from "@/models/app";

export const db = drizzle(sql);

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const task = request.body as Task;
  return await db
    .transaction(async (tx) => {
      await db
        .insert(tasks)
        .values({ ...task, created_date: new Date(), updated_date: new Date() })
        .returning({ task_id: tasks.id }).then((res) => {
          console.log(res);
        });
    })
    .then(() => response.status(201).json({}));
}
