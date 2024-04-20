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

// export const customers = pgTable("customers", {
//   id: serial("id").primaryKey(),
//   fullname: varchar("fullname", { length: 100 }).notNull(),
//   mobile: varchar("mobile", { length: 100 }).notNull(),
//   email: varchar("email", { length: 100 }),
//   age: integer("age"),
//   gender: varchar("gender", { length: 250 }),
//   address: varchar("address", { length: 250 }),
//   city: varchar("city", { length: 250 }),
// });

// export const meals = pgTable("meals", {
//   id: serial("id").primaryKey(),
//   companyname: varchar("companyname", { length: 100 }).notNull(),
//   breakfast: varchar("breakfast", { length: 100 }),
//   lunch: varchar("lunch", { length: 100 }),
//   dinner: varchar("dinner", { length: 100 }),
//   milk: varchar("milk", { length: 100 }),
//   other: varchar("other", { length: 100 }),
//   entrydate: timestamp("entrydate").defaultNow(),
// });

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullname: varchar("fullname", { length: 100 }),
  mobile: varchar("mobile", { length: 20 }),
  email: varchar("email", { length: 100 }),
  codeword: varchar("codeword", { length: 100 }),
  appid: integer("appid"),
  isadmin: integer("isadmin"),
  isactive: integer("isactive"),
  lastupdatedate: timestamp("lastupdatedate").defaultNow(),
});

// export const tasks = pgTable("tasks", {
//   id: serial("id").primaryKey(),
//   title: varchar("title", { length: 100 }),
//   description: varchar("description", { length: 100 }),
//   customer_query_id: integer("customer_query_id").notNull(),
//   customer_id: integer("customer_id").notNull(),
//   assigned_to_user_id: integer("assigned_to_user_id"),
//   assigned_by_user_id: integer("assigned_by_user_id").notNull(),
//   status: integer("status").notNull(),
//   start_date: timestamp("start_date").notNull(),
//   end_date: timestamp("end_date").notNull(),
//   statuses_json: text("statuses_json"),
//   appid: integer("appid").notNull(),
//   created_date: timestamp("created_date").notNull().defaultNow(),
//   updated_date: timestamp("updated_date").notNull().defaultNow(),
// });

// export const customerrequirements = pgTable("customerrequirements", {
//   id: serial("id").primaryKey(),
//   requiredworkcategory: integer("requiredworkcategory"),
//   requiredworksubcategory: integer("requiredworksubcategory"),
//   referencesource: varchar("referencesource", { length: 250 }),
//   notes: varchar("notes", { length: 250 }),
//   visitdate: varchar("visitdate", { length: 250 }),
//   convertedintolead: boolean("convertedintolead"),
//   customerid: integer("customerid"),
// });

// export const customerRelations = relations(customers, ({ many }) => ({
//   customerrequirements: many(customerrequirements),
// }));

// export const customerrequirementsRelations = relations(
//   customerrequirements,
//   ({ one }) => ({
//     customer: one(customers, {
//       fields: [customerrequirements.customerid],
//       references: [customers.id],
//     }),
//   })
// );

// create table orders (
//   id serial primary key,
//   order_date timestamp not null,
//   shipping_date timestamp not null,
//   payment_date timestamp not null,
//   customer_name varchar(100) not null,
//   item varchar(100) not null,
//   item_category varchar(100) not null,
//   quantity integer not null,
//   vendor varchar(100) not null,
//   vendor_code_internal varchar(100) not null,
//   purchase_price decimal not null,
//   price decimal not null,
//   shipping_address varchar(100) null,
//   vendor_payment INTEGER NOT NULL,
//   customer_payment INTEGER NOT NULL,
//   customer_payment_type INTEGER NOT NULL,
//   comment varchar(100) null
// );

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  order_date: timestamp("order_date").notNull(),
  shipping_date: timestamp("shipping_date").notNull(),
  payment_date: timestamp("payment_date").notNull(),
  customer_name: varchar("customer_name", { length: 100 }).notNull(),
  item: varchar("item", { length: 100 }).notNull(),
  item_category: varchar("item_category", { length: 100 }).notNull(),
  quantity: integer("quantity").notNull(),
  vendor: varchar("vendor", { length: 100 }).notNull(),
  vendor_code_internal: varchar("vendor_code_internal", {
    length: 100,
  }).notNull(),
  purchase_price: integer("purchase_price").notNull(),
  price: integer("price").notNull(),
  shipping_address: varchar("shipping_address", { length: 100 }),
  vendor_payment: integer("vendor_payment").notNull(),
  customer_payment: integer("customer_payment").notNull(),
  customer_payment_type: integer("customer_payment_type").notNull(),
  comment: varchar("comment", { length: 100 }),
});

export const customers = pgTable("customers", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
});

export const itemcategories = pgTable("itemcategories", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 100 }).notNull(),
});

export const vendors = pgTable("vendors", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  code: varchar("code", { length: 100 }).notNull(),
});
