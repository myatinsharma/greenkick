export type Customer = DemographicData & CustomerWork;

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
};

export type FormControl = {
  label?: string;
  placeholder?: string;
  showInUI: boolean;
  type?: "dropdown" | "textarea" | "text" | "date";
  dropdownOptions?: Record<string, string>;
};

export type FormKeyControls = Record<keyof Customer, FormControl>;

export type CustomerDataKeys = Extract<keyof Customer, string>;

export type CustomerReviewSheetDesign = {
  props: CustomerDataKeys[];
  children?: CustomerReviewSheetDesign[];
  bList?: boolean;
};

export type Task = {
  title: string;
  description: string;
  customer_query_id: number;
  customer_id: number;
  assigned_to_user_id: number;
  assigned_by_user_id: number;
  status: number;
  statuses_json: string;
  appid: number;
} & { id: number };
