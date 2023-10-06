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

export const taskSchema = z.object({
  title: z.string().min(1, { message: "Required" }),
  description: z.string().min(1, { message: "Required" }),
  customer_query_id: z.number().min(1, { message: "Required" }),
  customer_id: z.number().min(1, { message: "Required" }),
  assigned_to_user_id: z.number().optional(),
  assigned_by_user_id: z.number().min(1, { message: "Required" }),
  status: z.number().min(1, { message: "Required" }),
  statuses_json: z.string().optional(),
  appid: z.number().min(1, { message: "Required" }),
});
