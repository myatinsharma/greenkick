export type Customer = DemographicData & CustomerWork;

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
  type?: "dropdown" | "textarea" | "text" | "date";
  dropdownOptions?: Record<string, string>;
};

export type InputFieldForm = Customer | Task;

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
