import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { customers, customerrequirements, meals } from "../../db/schema";
import { NextApiResponse, NextApiRequest } from "next";
import { Customer, Meal } from "@/models/app";
import nodemailer from "nodemailer";

export const db = drizzle(sql);

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const c = request.body as Meal;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "xyzatinx@gmail.com",
      pass: "bgbs gyqw qmhx eoha",
    },
  });

  if (c.other !== "test") {
    transporter.sendMail({
      to: "atul2626@gmail.com",
      subject: "tac-entries",
      cc: "sukritigoel175@gmail.com",
      bcc: "fineline027@gmail.com",
      text: JSON.stringify(c),
    });
  }

  return await db
    .transaction(async (tx) => {
      const result = await db
        .insert(meals)
        .values({ ...c, entrydate: new Date(c.entrydate) })
        .returning({ id: meals.id });
    })
    .then(() => response.status(201).json({}));
}
