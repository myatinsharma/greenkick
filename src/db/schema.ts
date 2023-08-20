import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  varchar,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const customerformcontrols = pgTable("customerformcontrols", {
  id: serial("id").primaryKey(),
  json: text("json"),
  is_default: boolean("isdefault"),
  app_id: integer("appid"),
});

export const customers = pgTable("customers", {
  id: serial("id").primaryKey(),
  fullname: varchar("fullname", { length: 250 }).notNull(),
  mobile: varchar("mobile", { length: 250 }).notNull(),
  email: varchar("email", { length: 250 }),
  age: integer("age"),
  gender: varchar("gender", { length: 250 }),
  address: varchar("address", { length: 250 }),
  city: varchar("city", { length: 250 }),
});

export const customerrequirements = pgTable("customerrequirements", {
  id: serial("id").primaryKey(),
  requiredworkcategory: integer("requiredworkcategory"),
  requiredworksubcategory: integer("requiredworksubcategory"),
  referencesource: varchar("referencesource", { length: 250 }),
  notes: varchar("notes", { length: 250 }),
  visitdate: varchar("visitdate", { length: 250 }),
  convertedintolead: boolean("convertedintolead"),
  customerid: integer("customerid"),
});

export const customerRelations = relations(customers, ({ many }) => ({
  customerrequirements: many(customerrequirements),
}));

export const customerrequirementsRelations = relations(
  customerrequirements,
  ({ one }) => ({
    customer: one(customers, {
      fields: [customerrequirements.customerid],
      references: [customers.id],
    }),
  })
);
