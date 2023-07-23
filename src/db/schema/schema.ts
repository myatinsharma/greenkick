import { boolean, integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
 
export const customerformcontrols = pgTable('customerformcontrols', {
  id: serial('id').primaryKey(),
  json: text('json'),
  isDefault: boolean('isDefault'),
  appId: integer('appId'),
});