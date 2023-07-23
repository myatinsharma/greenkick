export type Customer = DemographicData & CustomerWork;

export type DemographicData = {
  id: number;
  name: string;
  mobile: string;
  email?: string;
  age?: number;
  gender?: string;
  address?: string;
  city?: string;
};

export type CustomerWork = {
  requiredWorkCategory: string;
  requiredWorkSubCategory: string;
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

export type Rx = {
  medicineName: string;
  type?: string;
  occurancy: MedicineTime;
  duration: number;
};

export type MedicineTime = {
  morning?: string;
  afternoon?: string;
  evening?: string;
};

export type UnionCustomerDataKeys = Customer & Rx & MedicineTime;

export type CustomerDataKeys = Extract<keyof Customer, string>;

export type CustomerReviewSheetDesign = {
  props: CustomerDataKeys[];
  children?: CustomerReviewSheetDesign[];
  bList?: boolean;
};
