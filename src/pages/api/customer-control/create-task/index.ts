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
  const { id,  } = request.body as Task;

  return await db
    .transaction(async (tx) => {
      await db
        .insert(tasks)
        .values(newTask)
        .returning({ task_id: tasks.id });
    })
    .then(() => response.status(201).json({}));
}
