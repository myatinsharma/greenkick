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
  quantity: 0,
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
    headerName: headerNamesMapOrders["order_date"],
    cellRenderer: (data: any) => {
      return data.value ? new Date(data.value).toLocaleDateString("en-GB") : "";
    },
  },
  {
    field: "shipping_date",
    headerName: headerNamesMapOrders["shipping_date"],
    cellRenderer: (data: any) => {
      return data.value ? new Date(data.value).toLocaleDateString("en-GB") : "";
    },
  },
  {
    field: "payment_date",
    headerName: headerNamesMapOrders["payment_date"],
    cellRenderer: (data: any) => {
      return data.value ? new Date(data.value).toLocaleDateString("en-GB") : "";
    },
  },
  { field: "customer_name", headerName: headerNamesMapOrders["customer_name"] },
  { field: "item", headerName: headerNamesMapOrders["item"] },
  { field: "item_category", headerName: headerNamesMapOrders["item_category"] },
  { field: "quantity", headerName: headerNamesMapOrders["quantity"] },
  { field: "vendor", headerName: headerNamesMapOrders["vendor"] },
  {
    field: "vendor_code_internal",
    headerName: headerNamesMapOrders["vendor_code_internal"],
  },
  {
    field: "purchase_price",
    headerName: headerNamesMapOrders["purchase_price"],
  },
  { field: "price", headerName: headerNamesMapOrders["price"] },
  {
    field: "shipping_address",
    headerName: headerNamesMapOrders["shipping_address"],
  },
  {
    field: "vendor_payment",
    headerName: headerNamesMapOrders["vendor_payment"],
    cellRenderer: (data: any) => {
      return data.value === 1 ? "Pending" : "Paid";
    },
  },
  {
    field: "customer_payment",
    headerName: headerNamesMapOrders["customer_payment"],
    cellRenderer: (data: any) => {
      return data.value === 1 ? "Pending" : "Paid";
    },
  },
  {
    field: "customer_payment_type",
    headerName: headerNamesMapOrders["customer_payment_type"],
    cellRenderer: (data: any) => {
      return ["Cash", "UPI", "Card"][data.value - 1];
    },
  },
  { field: "comment", headerName: "Comment" },
];
