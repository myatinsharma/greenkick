import {
  Customer,
  CustomerFormControl,
  CustomerReviewSheetDesign,
} from "@/models/app";
import { string } from "zod";

export const customerFormData: Record<keyof Customer, CustomerFormControl> = {
  id: { label: "ID", showInUI: false },
  fullname: { label: "Name", showInUI: true },
  age: { label: "Age", showInUI: true },
  gender: { label: "Gender", showInUI: true },
  notes: { label: "Notes", showInUI: true, type: "textarea" },
  visitDate: { label: "Visit Date", showInUI: true },
  mobile: { label: "Mobile", showInUI: true },
  address: { label: "Address", showInUI: true, type: "textarea" },
  city: { label: "City", showInUI: true },
  email: { label: "Email", showInUI: true },
  requiredWorkCategory: {
    label: "Required Work Category",
    showInUI: true,
    type: "dropdown",
    dropdownOptions: { 1: "Construction", 2: "Vastu" },
  },
  requiredWorkSubCategory: {
    label: "Required Work Sub Category",
    showInUI: true,
  },
  referenceSource: { label: "Reference Source", showInUI: true },
  convertedIntoLead: { label: "Converted Into Lead", showInUI: false },
};

export const numberOfMedicineInputRows = 2;

export const dummyCustomer: Customer = {
  id: 0,
  fullname: "",
  gender: "",
  requiredWorkCategory: 0,
  requiredWorkSubCategory: 0,
  city: "",
  referenceSource: "",
  visitDate: "",
  convertedIntoLead: false,
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
  visitDate: new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }),
  mobile: "1234567890",
  address: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  city: "Delhi",
  email: "xx@mail.com",
  requiredWorkCategory: 0,
  requiredWorkSubCategory: 0,
  referenceSource: "Google",
  convertedIntoLead: false,
};
