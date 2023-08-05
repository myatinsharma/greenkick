import { boolean, integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { relations } from 'drizzle-orm';
 
export const customerformcontrols = pgTable('customerformcontrols', {
  id: serial('id').primaryKey(),
  json: text('json'),
  isDefault: boolean('isdefault'),
  appId: integer('appid'),
});

export const customers = pgTable('customers', {
  id: serial('id').primaryKey(),
  fullname: varchar('fullname', {length: 250}).notNull(),
  mobile: varchar('mobile', {length: 250}).notNull(),
  email: varchar('email', {length: 250}),
  age: integer('age'),
  gender: varchar('gender', {length: 250}),
  address: varchar('address', {length: 250}),
  city: varchar('city', {length: 250}),
});

export const customerRelations = relations(customers, ({ many }) => ({
	customerrequirements: many(customerrequirements),
}));

export const customerrequirements = pgTable('customerrequirements', {
  id: serial('id').primaryKey(),
  requiredWorkCategory: integer('requiredWorkCategory'),
  requiredWorkSubCategory: integer('requiredWorkSubCategory'),
  referenceSource: varchar('referenceSource', {length: 250}),
  notes: varchar('notes', {length: 250}),
  visitDate: varchar('visitDate', {length: 250}),
  convertedIntoLead: boolean('convertedIntoLead'),
  customerId: integer('customerId').notNull(),
});

export const customerrequirementsRelations = relations(customerrequirements, ({ one }) => ({
	author: one(customers, {
		fields: [customerrequirements.customerId],
		references: [customers.id],
	}),
}));