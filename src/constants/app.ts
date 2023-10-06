import {
  Customer,
  FormControl,
  CustomerReviewSheetDesign,
  Task,
} from "@/models/app";
import { string } from "zod";

export const customerFormData: Record<keyof Customer, FormControl> = {
  id: { label: "ID", showInUI: false },
  fullname: { label: "Name", showInUI: true },
  age: { label: "Age", showInUI: true },
  gender: { label: "Gender", showInUI: true },
  notes: { label: "Notes", showInUI: true, type: "textarea" },
  visitdate: { label: "Visit Date", showInUI: true },
  mobile: { label: "Mobile", showInUI: true },
  address: { label: "Address", showInUI: true, type: "textarea" },
  city: { label: "City", showInUI: true },
  email: { label: "Email", showInUI: true },
  requiredworkcategory: {
    label: "Required Work Category",
    showInUI: true,
    type: "dropdown",
    dropdownOptions: { 1: "Construction", 2: "Vastu" },
  },
  requiredworksubcategory: {
    label: "Required Work Sub Category",
    showInUI: true,
  },
  referencesource: { label: "Reference Source", showInUI: true },
  convertedintolead: { label: "Converted Into Lead", showInUI: false },
};

export const taskFormControls: Record<keyof Task, FormControl> = {
  id: { showInUI: false },
  title: { label: "Title", showInUI: true },
  description: { label: "Description", showInUI: true },
  customer_query_id: { showInUI: false },
  customer_id: { showInUI: false },
  assigned_to_user_id: { label: "Assigned To User", showInUI: true },
  assigned_by_user_id: { label: "Assigned By User ID", showInUI: true },
  status: { label: "Status", showInUI: true },
  statuses_json: { showInUI: false },
  appid: { showInUI: false },
};

export const numberOfMedicineInputRows = 2;

export const dummyCustomer: Customer = {
  id: 0,
  fullname: "",
  gender: "",
  requiredworkcategory: 0,
  requiredworksubcategory: 0,
  city: "",
  referencesource: "",
  visitdate: "",
  convertedintolead: false,
  mobile: "",
  email: "",
  address: "",
  notes: "",
};

export const testCustomerData: Customer = {
  id: 0,
  fullname: "Raj Kumar",
  age: 20,
  gender: "M",
  notes:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  visitdate: new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }),
  mobile: "1234567890",
  address: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  city: "Delhi",
  email: "xx@mail.com",
  requiredworkcategory: 1,
  requiredworksubcategory: 2,
  referencesource: "Google",
  convertedintolead: false,
};

export const testTaskData: Task = {
  id: 0,
  title: "Task Title",
  description: "Task Description",
  customer_query_id: 1,
  customer_id: 1,
  assigned_to_user_id: 1,
  assigned_by_user_id: 1,
  status: 1,
  statuses_json: "{}",
  appid: 1,
};

export const config = {
  development: {
    baseUrl: "http://localhost:3000", // Your local development server URL
  },
  production: {
    baseUrl: "https://greenkick.vercel.app/", // Your deployed server URL
  },
};
