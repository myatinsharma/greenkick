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

export type CustomerFormControl = {
  label: string;
  placeholder?: string;
  showInUI: boolean;
  type?: "dropdown" | "textarea" | "text" | "date";
  dropdownOptions?: Record<string, string>;
};

export type FormKeyControls = Record<keyof Customer, CustomerFormControl>;

export type CustomerDataKeys = Extract<keyof Customer, string>;

export type CustomerReviewSheetDesign = {
  props: CustomerDataKeys[];
  children?: CustomerReviewSheetDesign[];
  bList?: boolean;
};
