import { TaskStatus } from "@/enums";
import {
  Customer,
  FormControl,
  CustomerReviewSheetDesign,
  Task,
  Meal,
} from "@/models/app";

const config = {
  development: {
    baseUrl: "http://localhost:3000", // Your local development server URL
  },
  production: {
    baseUrl: "https://greenkick-git-tac-test-myatinsharma.vercel.app/", // Your deployed server URL
  },
};

export const apiBaseUrl =
  process.env.NODE_ENV === "production"
    ? config.production.baseUrl
    : config.development.baseUrl;

export const taskProximity = 7; // days

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
  queryid: { label: "Query Id", showInUI: false },
};

export const taskFormControls: Record<keyof Task, FormControl> = {
  id: { showInUI: false },
  title: { label: "Title", showInUI: true },
  description: { label: "Description", showInUI: true },
  customer_query_id: { showInUI: false },
  customer_id: { showInUI: false },
  assigned_to_user_id: {
    label: "Assigned To User",
    showInUI: true,
    type: "dropdown",
    dropdownOptions: { 1: "Raj Kumar", 2: "Rajesh Kumar" },
  },
  assigned_by_user_id: { label: "Assigned By User ID", showInUI: false },
  status: {
    label: "Status",
    showInUI: true,
    type: "dropdown",
    dropdownOptions: Object.fromEntries(
      Object.entries(TaskStatus)
        .filter((x) => typeof x[1] === "number")
        .map(([key, value]) => [value, key])
    ),
  },
  start_date: { label: "Start Date", showInUI: true, type: "date" },
  end_date: { label: "End Date", showInUI: true, type: "date" },
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

export const dummyMeal: Meal = {
  breakfast: "",
  companyname: "",
  dinner: "",
  lunch: "",
  milk: "",
  other: "",
  entrydate: new Date(),
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

export const testMeal: Meal = {
  companyname: "Hyundai",
  breakfast: "1",
  lunch: "2",
  dinner: "4",
  milk: "1",
  other: "",
  entrydate: new Date(),
};

export const dummyTask: Task = {
  id: 0,
  title: "",
  description: "",
  customer_query_id: -1,
  customer_id: -1,
  assigned_to_user_id: -1,
  assigned_by_user_id: 1,
  status: 0,
  start_date: new Date(),
  end_date: new Date(),
  statuses_json: "{}",
  appid: 2,
};

export const testTaskData: Task = {
  id: 0,
  title: "Task Title",
  description: "Task Description",
  customer_query_id: 1,
  customer_id: 1,
  assigned_to_user_id: 1,
  assigned_by_user_id: 1,
  status: 2,
  start_date: new Date(),
  end_date: new Date(),
  statuses_json: "{}",
  appid: 1,
};

export const entriesGridColumnDefs: ColumnConfig[] = [
  { headerName: "Company", field: "companyname", },
  { headerName: "Breakfast", field: "breakfast" },
  { headerName: "Lunch", field: "lunch" },
  { headerName: "Dinner", field: "dinner" },
  { headerName: "Milk", field: "milk" },
  { headerName: "Other", field: "other" },
  { headerName: "Entry Date", field: "entrydate" },
];
