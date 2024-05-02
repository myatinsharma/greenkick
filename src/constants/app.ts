import AgGridcCustomHeader from "@/components/common/AgGridcCustomHeader";
import { TaskStatus } from "@/enums";
import {
  Customer,
  FormControl,
  Task,
  Meal,
  Order,
  ItemCategory,
  Vendor,
} from "@/models/app";
import { add } from "@/utils";
// import { add } from "@/utils";
import { ColDef } from "ag-grid-community";

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

export const orderFormData: Record<keyof Order, FormControl> = {
  id: {
    label: "ID",
    showInUI: false,
    type: "number",
    section: { title: "Basic", id: 1 },
  },
  customer_name: {
    label: "Customer Name",
    showInUI: true,
    type: "autocomplete",
    section: { title: "Basic", id: 1 },
  },
  item: { label: "Item", showInUI: true, section: { title: "Basic", id: 1 } },
  item_category: {
    label: "Item Category",
    showInUI: true,
    type: "autocomplete",
    section: { title: "Basic", id: 1 },
  },
  quantity: {
    label: "Quantity",
    showInUI: true,
    type: "number",
    section: { title: "Basic", id: 1 },
  },
  vendor: {
    label: "Vendor",
    showInUI: true,
    type: "autocomplete",
    section: { title: "Basic", id: 1 },
  },
  vendor_code_internal: {
    label: "Vendor Code",
    showInUI: true,
    section: { title: "Basic", id: 1 },
  },
  purchase_price: {
    label: "Cost",
    showInUI: true,
    type: "number",
    section: { title: "Basic", id: 1 },
  },
  price: {
    label: "Price",
    showInUI: true,
    type: "number",
    section: { title: "Basic", id: 1 },
  },
  shipping_address: {
    label: "Shipping Address",
    showInUI: true,
    section: { title: "Basic", id: 1 },
  },
  vendor_payment: {
    label: "Vendor Payment",
    showInUI: true,
    type: "dropdown",
    dropdownOptions: { "1": "Pending", "2": "Paid" },
    section: { title: "Basic", id: 1 },
  },
  customer_payment: {
    label: "Payment",
    showInUI: true,
    type: "dropdown",
    dropdownOptions: { "1": "Pending", "2": "Paid" },
    section: { title: "Basic", id: 1 },
  },
  customer_payment_type: {
    label: "Payment Type",
    showInUI: true,
    type: "dropdown",
    dropdownOptions: { "1": "Cash", "2": "UPI", "3": "Card" },
    section: { title: "Basic", id: 1 },
  },
  comment: {
    label: "Comment",
    showInUI: true,
    section: { title: "Basic", id: 1 },
  },
  order_date: {
    label: "Order Date",
    showInUI: true,
    type: "date",
    section: { title: "Dates", id: 2 },
  },
  shipping_date: {
    label: "Shipping Date",
    showInUI: true,
    type: "date",
    section: { title: "Dates", id: 2 },
  },
  payment_date: {
    label: "Payment Date",
    showInUI: true,
    type: "date",
    section: { title: "Dates", id: 2 },
  },
};

export const dummyOrder: Order = {
  order_date: new Date(),
  shipping_date: new Date(),
  payment_date: new Date(),
  customer_name: "",
  item: "",
  item_category: "",
  quantity: 10,
  vendor: "",
  vendor_code_internal: "",
  purchase_price: 0,
  price: 0,
  shipping_address: "",
  vendor_payment: 0,
  customer_payment: 0,
  customer_payment_type: 0,
  comment: "",
};

export const testOrder: Order = {
  order_date: new Date(),
  shipping_date: new Date(),
  payment_date: new Date(),
  customer_name: "",
  item: "",
  item_category: "",
  quantity: "" as any,
  vendor: "",
  vendor_code_internal: "",
  purchase_price: 0,
  price: 0,
  shipping_address: "",
  vendor_payment: 1,
  customer_payment: 1,
  customer_payment_type: 1,
  comment: "",
};

export type PickedOrderPropsForAutocomplete = keyof Pick<
  Order,
  "customer_name" | "item_category" | "vendor"
>;

export const autocompleteMap: Record<
  PickedOrderPropsForAutocomplete,
  { list: string; key: keyof Customer | keyof ItemCategory | keyof Vendor }
> = {
  customer_name: { list: "customers", key: "name" },
  item_category: { list: "categories", key: "title" },
  vendor: { list: "vendors", key: "name" },
};

// export const customerFormData: Record<keyof Customer, FormControl> = {
//   id: { label: "ID", showInUI: false },
//   fullname: { label: "Name", showInUI: true },
//   age: { label: "Age", showInUI: true },
//   gender: { label: "Gender", showInUI: true },
//   notes: { label: "Notes", showInUI: true, type: "textarea" },
//   visitdate: { label: "Visit Date", showInUI: true },
//   mobile: { label: "Mobile", showInUI: true },
//   address: { label: "Address", showInUI: true, type: "textarea" },
//   city: { label: "City", showInUI: true },
//   email: { label: "Email", showInUI: true },
//   requiredworkcategory: {
//     label: "Required Work Category",
//     showInUI: true,
//     type: "dropdown",
//     dropdownOptions: { 1: "Construction", 2: "Vastu" },
//   },
//   requiredworksubcategory: {
//     label: "Required Work Sub Category",
//     showInUI: true,
//   },
//   referencesource: { label: "Reference Source", showInUI: true },
//   convertedintolead: { label: "Converted Into Lead", showInUI: false },
//   queryid: { label: "Query Id", showInUI: false },
// };

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

// export const dummyCustomer: Customer = {
//   id: 0,
//   fullname: "",
//   gender: "",
//   requiredworkcategory: 0,
//   requiredworksubcategory: 0,
//   city: "",
//   referencesource: "",
//   visitdate: "",
//   convertedintolead: false,
//   mobile: "",
//   email: "",
//   address: "",
//   notes: "",
// };

// export const dummyMeal: Meal = {
//   breakfast: "",
//   companyname: "",
//   dinner: "",
//   lunch: "",
//   milk: "",
//   other: "",
//   entrydate: new Date(),
// };

// export const testCustomerData: Customer = {
//   id: 0,
//   fullname: "Raj Kumar",
//   age: 20,
//   gender: "M",
//   notes:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//   visitdate: new Date().toLocaleDateString("en-GB", {
//     day: "2-digit",
//     month: "2-digit",
//     year: "2-digit",
//   }),
//   mobile: "1234567890",
//   address: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   city: "Delhi",
//   email: "xx@mail.com",
//   requiredworkcategory: 1,
//   requiredworksubcategory: 2,
//   referencesource: "Google",
//   convertedintolead: false,
// };

export const testMeal: Meal = {
  companyname: "",
  breakfast: "",
  lunch: "",
  dinner: "",
  milk: "",
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

export const headerNamesMap: Omit<Record<keyof Meal, string>, "id"> = {
  breakfast: "Breakfast",
  companyname: "Company",
  dinner: "Dinner",
  lunch: "Lunch",
  milk: "Milk",
  entrydate: "Entry Date",
  other: "Other",
};

export const headerNamesMapOrders: Omit<Record<keyof Order, string>, "id"> = {
  customer_name: "Customer Name",
  item: "Item",
  item_category: "Item Category",
  quantity: "Quantity",
  vendor: "Vendor",
  vendor_code_internal: "Vendor Code",
  purchase_price: "Cost",
  price: "Price",
  shipping_address: "Shipping Address",
  vendor_payment: "Vendor Payment",
  customer_payment: "Payment",
  customer_payment_type: "Payment Type",
  comment: "Comment",
  order_date: "Order Date",
  shipping_date: "Shipping Date",
  payment_date: "Payment Date",
};

export const entriesGridColumnDefs: ColDef[] = [
  { field: "companyname", rowGroup: true, hide: true },
  {
    headerName: headerNamesMap["entrydate"],
    field: "entrydate",
    cellRenderer: (data: any) => {
      return data.value ? new Date(data.value).toLocaleDateString("en-GB") : "";
    },
  },
  {
    field: "breakfast",
    aggFunc: add,
    headerComponent: AgGridcCustomHeader,
    headerComponentParams: { customHeaderName: headerNamesMap["breakfast"] },
  },
  {
    field: "lunch",
    aggFunc: add,
    headerComponent: AgGridcCustomHeader,
    headerComponentParams: { customHeaderName: headerNamesMap["lunch"] },
  },
  {
    field: "dinner",
    aggFunc: add,
    headerComponent: AgGridcCustomHeader,
    headerComponentParams: { customHeaderName: headerNamesMap["dinner"] },
  },
  {
    field: "milk",
    aggFunc: add,
    headerComponent: AgGridcCustomHeader,
    headerComponentParams: { customHeaderName: headerNamesMap["milk"] },
  },
  { headerName: headerNamesMap["other"], field: "other" },
];

export const ordersGridColumnDefs: ColDef[] = [
  { field: "id", hide: true },
  {
    field: "order_date",
    headerName: "Order Date",
    cellRenderer: (data: any) => {
      return data.value ? new Date(data.value).toLocaleDateString("en-GB") : "";
    },
  },
  {
    field: "shipping_date",
    headerName: "Shipping Date",
    cellRenderer: (data: any) => {
      return data.value ? new Date(data.value).toLocaleDateString("en-GB") : "";
    },
  },
  {
    field: "payment_date",
    headerName: "Payment Date",
    cellRenderer: (data: any) => {
      return data.value ? new Date(data.value).toLocaleDateString("en-GB") : "";
    },
  },
  { field: "customer_name", headerName: "Customer Name" },
  { field: "item", headerName: "Item" },
  { field: "item_category", headerName: "Item Category" },
  { field: "quantity", headerName: "Quantity" },
  { field: "vendor", headerName: "Vendor" },
  { field: "vendor_code_internal", headerName: "Vendor Code" },
  { field: "purchase_price", headerName: "Cost" },
  { field: "price", headerName: "Price" },
  { field: "shipping_address", headerName: "Shipping Address" },
  {
    field: "vendor_payment",
    headerName: "Vendor Payment",
    cellRenderer: (data: any) => {
      return data.value === 1 ? "Pending" : "Paid";
    },
  },
  {
    field: "customer_payment",
    headerName: "Payment",
    cellRenderer: (data: any) => {
      return data.value === 1 ? "Pending" : "Paid";
    },
  },
  {
    field: "customer_payment_type",
    headerName: "Payment Type",
    cellRenderer: (data: any) => {
      return ["Cash", "UPI", "Card"][data.value - 1];
    },
  },
  { field: "comment", headerName: "Comment" },
];
