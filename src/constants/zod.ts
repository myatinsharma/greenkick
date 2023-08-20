import * as z from "zod";

export const schema = z.object({
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
