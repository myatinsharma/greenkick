//export type Customer = DemographicData & CustomerWork;

export type Meal = {
  id?: number;
  companyname: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  milk: string;
  other: string;
  entrydate: Date;
};

export type DemographicData = {
  fullname: string;
  mobile: string;
  email?: string;
  age?: number;
  gender?: string;
  address?: string;
  city?: string;
} & { id: number };

export type CustomerWork = {
  requiredworkcategory: number;
  requiredworksubcategory: number;
  referencesource?: string;
  notes?: string;
  visitdate?: string;
  convertedintolead?: boolean;
  queryid?: number;
};

export type FormControl = {
  label?: string;
  placeholder?: string;
  showInUI: boolean;
  type?: "dropdown" | "textarea" | "text" | "date" | "number" | "autocomplete";
  dropdownOptions?: Record<string, string>;
};

export type InputFieldForm = Customer | Task | Order;

export type FormKeyControls = Record<keyof Customer, FormControl>;

export type InputFieldFormKeys = Extract<
  keyof Omit<InputFieldForm, "id">,
  string
>;

export type CustomerReviewSheetDesign = {
  props: InputFieldFormKeys[];
  children?: CustomerReviewSheetDesign[];
  bList?: boolean;
};

export type Task = {
  title: string;
  description?: string;
  customer_query_id: number;
  customer_id: number;
  assigned_to_user_id: number;
  assigned_by_user_id: number;
  status: number;
  start_date: Date;
  end_date: Date;
  statuses_json: string;
  appid: number;
} & { id: number };

export type User = {
  fullname: string;
  mobile: string;
  email: string;
  codeword: string;
  appid: number;
  isadmin: number;
  isactive: number;
  lastupdatedate: string;
} & { id: number };

export type UserAccess = {
  userId: number;
  access: boolean;
};


// create table orders (
//   id serial primary key,
//   order_date timestamp not null,
//   shipping_date timestamp not null,
//   payment_date timestamp not null,
//   customer_name varchar(100) not null,
//   item varchar(100) not null,
//   item_category varchar(100) not null,
//   quantity integer not null,
//   vendor varchar(100) not null,
//   vendor_code_internal varchar(100) not null,
//   purchase_price decimal not null,
//   price decimal not null,
//   shipping_address varchar(100) null,
//   vendor_payment INTEGER NOT NULL,
//   customer_payment INTEGER NOT NULL,
//   customer_payment_type INTEGER NOT NULL,
//   comment varchar(100) null
// );

// create table customers (
//   id serial primary key,
//   name varchar(100) not null
// );

// create table itemcategories (
//   id serial primary key,
//   title varchar(100) not null
// );

// create table vendors (
//   id serial primary key,
//   name varchar(100) not null,
//   code varchar(100) not null
// );

export type Order = {
  id?: number;
  order_date: Date;
  shipping_date: Date;
  payment_date: Date;
  customer_name: string;
  item: string;
  item_category: string;
  quantity: number;
  vendor: string;
  vendor_code_internal: string;
  purchase_price: number;
  price: number;
  shipping_address?: string;
  vendor_payment: number;
  customer_payment: number;
  customer_payment_type: number;
  comment?: string;
};

export type Customer = {
  id: number;
  name: string;
};

export type ItemCategory = {
  id: number;
  title: string;
};

export type Vendor = {
  id: number;
  name: string;
  code: string;
};