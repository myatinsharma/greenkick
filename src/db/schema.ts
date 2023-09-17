import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
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
  fullname: varchar("fullname", { length: 100 }).notNull(),
  mobile: varchar("mobile", { length: 100 }).notNull(),
  email: varchar("email", { length: 100 }),
  age: integer("age"),
  gender: varchar("gender", { length: 250 }),
  address: varchar("address", { length: 250 }),
  city: varchar("city", { length: 250 }),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullname: varchar("fullname", { length: 100 }),
  mobile: varchar("mobile", { length: 20 }),
  email: varchar("email", { length: 100 }),
  codeword: varchar("codeword", { length: 100 }),
  appid: integer("appid"),
  isadmin: integer("isadmin"),
  isactive: integer("isactive"),
  lastupdatedate: timestamp('lastupdatedate').defaultNow(),
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
