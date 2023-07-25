import { boolean, integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { relations } from 'drizzle-orm';
 
export const customerformcontrols = pgTable('customerformcontrols', {
  id: serial('id').primaryKey(),
  json: text('json'),
  isDefault: boolean('isdefault'),
  appId: integer('appid'),
});

export const customer = pgTable('customer', {
  id: serial('id').primaryKey(),
  name: varchar('name', {length: 250}).notNull(),
  mobile: varchar('mobile', {length: 250}).notNull(),
  email: varchar('email', {length: 250}),
  age: integer('age'),
  gender: varchar('name', {length: 250}),
  address: varchar('address', {length: 250}),
  city: varchar('city', {length: 250}),
});

export const customerRelations = relations(customer, ({ many }) => ({
	customerrequirements: many(customerrequirements),
}));

export const customerrequirements = pgTable('customerrequirements', {
  id: serial('id').primaryKey(),
  requiredWorkCategory: varchar('requiredWorkCategory', {length: 250}).notNull(),
  requiredWorkSubCategory: varchar('requiredWorkSubCategory', {length: 250}).notNull(),
  referenceSource: varchar('referenceSource', {length: 250}).notNull(),
  notes: varchar('notes', {length: 250}).notNull(),
  visitDate: varchar('visitDate', {length: 250}).notNull(),
  convertedIntoLead: boolean('convertedIntoLead').notNull(),
  customerId: integer('customerId').notNull(),
});

export const customerrequirementsRelations = relations(customerrequirements, ({ one }) => ({
	author: one(customer, {
		fields: [customerrequirements.customerId],
		references: [customer.id],
	}),
}));