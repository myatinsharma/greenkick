import {
  Customer,
  CustomerFormControl,
  CustomerReviewSheetDesign,
} from "@/models/app";
import { string } from "zod";

export const CustomerFormData: Record<keyof Customer, CustomerFormControl> = {
  id: { label: "ID", showInUI: false },
  name: { label: "Name", showInUI: true },
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
  name: "",
  gender: "",
  requiredWorkCategory: "",
  requiredWorkSubCategory: "",
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
  name: "Raj Kumar",
  age: 20,
  gender: "M",
  notes:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  visitDate: new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }),
};

export const patientReviewSheetDesignValues: CustomerReviewSheetDesign[] = [
  {
    props: ["name", "age", "gender", "visitDate"],
    bList: false,
  },
  {
    props: ["complaints", "examination"],
    bList: false,
  },
  {
    props: ["otherHistory", "imagingOrInvestigations"],
    bList: false,
  },
  {
    props: ["rx"],
    bList: true,
  },
  {
    props: ["advice"],
    bList: false,
  },
  {
    props: ["investigationsAdvised"],
    bList: false,
  },
  {
    props: ["notes"],
    bList: false,
  },
  {
    props: ["followUpDate"],
    bList: false,
  },
];

export const patientDetailFormDesign: CustomerReviewSheetDesign[] = [
  {
    props: ["name", "age", "gender", "visitDate"],
  },
  {
    props: ["rx"],
    children: [
      {
        props: [
          "medicineName",
          "type",
          "morning",
          "afternoon",
          "evening",
          "duration",
        ],
      },
    ],
  },
];
