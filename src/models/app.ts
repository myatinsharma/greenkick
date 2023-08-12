export type Customer = DemographicData & CustomerWork;

export type DemographicData = {
  id: number;
  fullname: string;
  mobile: string;
  email?: string;
  age?: number;
  gender?: string;
  address?: string;
  city?: string;
};

export type CustomerWork = {
  requiredWorkCategory: number;
  requiredWorkSubCategory: number;
  referenceSource?: string;
  notes?: string;
  visitDate?: string;
  convertedIntoLead?: boolean;
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
