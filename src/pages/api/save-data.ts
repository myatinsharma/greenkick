import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql as sqlps } from "@vercel/postgres";
import { customers, customerrequirements, meals, users } from "../../db/schema";
import { NextApiResponse, NextApiRequest } from "next";
import { Customer, Meal } from "@/models/app";
import nodemailer from "nodemailer";
import { ne, sql, eq } from "drizzle-orm";

export const db = drizzle(sqlps);

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
      bcc: "xyzatinx@gmail.com",
      text: JSON.stringify(c),
    });
  }

  await db
    .transaction(async (tx) => {
      const result = await db
        .select()
        .from(meals)
        .where(
          sql`${meals.companyname} = ${c.companyname} and ${meals.entrydate} = ${c.entrydate}`
        )
        .then(async (data) => {
          if (data.length == 0) {
            await db
              .insert(meals)
              .values({ ...c, entrydate: new Date(c.entrydate) })
              .returning({ id: meals.id });
          } else {
            await db
              .update(meals)
              .set({
                breakfast: c.breakfast ? c.breakfast : data[0].breakfast,
                lunch: c.lunch ? c.lunch : data[0].lunch,
                dinner: c.dinner ? c.dinner : data[0].dinner,
                milk: c.milk ? c.milk : data[0].milk,
              })
              .where(eq(meals.id, data[0].id));
          }
        });
    })
    .then(() => response.status(201).json({}));
}
