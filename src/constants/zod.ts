import * as z from "zod";

export const customerSchema = z.object({
  fullname: z.string().min(1, { message: "Required" }),
  mobile: z.string().min(10, { message: "Required" }),
  email: z.string().email({ message: "Invalid email" }).optional(),
  age: z.number().optional(),
  gender: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  requiredworkcategory: z.number().min(1, { message: "Required" }),
  requiredworksubcategory: z.number().min(1, { message: "Required" }),
  referencesource: z.string().optional(),
  notes: z.string().optional(),
  visitdate: z.string().optional(),
  convertedintolead: z.boolean().optional(),
});

export const mealsSchema = z.object({
  companyname: z.string().min(1, { message: "Required" }),
  breakfast: z.string().optional(),
  lunch: z.string().optional(),
  dinner: z.string().optional(),
  milk: z.string().optional(),
  other: z.string().optional(),
  entrydate: z.preprocess((arg) => {
    if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
  }, z.date()),
});

export const taskSchema = z.object({
  title: z.string().min(1, { message: "Required" }),
  description: z.string().optional(),
  customer_query_id: z.number().min(1, { message: "Required" }),
  customer_id: z.number().min(1, { message: "Required" }),
  assigned_to_user_id: z.number().optional(),
  assigned_by_user_id: z.number().min(1, { message: "Required" }),
  status: z.number().min(1, { message: "Required" }),
  start_date: z.preprocess((arg) => {
    if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
  }, z.date()),
  end_date: z.preprocess((arg) => {
    if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
  }, z.date()),
  statuses_json: z.string().optional(),
  appid: z.number().min(1, { message: "Required" }),
});

export const orderSchema = z.object({
  id: z.number().int(),
  order_date: z.date(),
  shipping_date: z.date(),
  payment_date: z.date(),
  customer_name: z.string().min(1, { message: "Required" }),
  item: z.string().min(1, { message: "Required" }),
  item_category: z.string().min(1, { message: "Required" }),
  quantity: z.string().min(1, { message: "Required" }),
  vendor: z.string().min(1, { message: "Required" }),
  vendor_code_internal: z.string().min(1, { message: "Required" }),
  purchase_price: z.number().min(1, { message: "Required" }),
  price: z.number().min(1, { message: "Required" }),
  shipping_address: z.string().optional(),
  vendor_payment: z.number().min(1, { message: "Required" }),
  customer_payment: z.number().min(1, { message: "Required" }),
  customer_payment_type: z.number().min(1, { message: "Required" }),
  comment: z.string().optional(),
});
