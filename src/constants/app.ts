import { Patient, PatientReviewSheetDesign } from "@/models/app";

export const patientKeyLabels: Record<string, string> = {
  id: "ID",
  name: "Name",
  age: "Age",
  gender: "Gender",
  complaints: "Complaints",
  examination: "Examination",
  otherHistory: "Other History",
  imagingOrInvestigations: "Imaging/Investigations",
  advice: "Advice",
  investigationsAdvised: "Investigations Advised",
  notes: "Notes",
  followUpDate: "Follow Up Date",
  rx: "Rx",
  visitDate: "Visit Date",
  medicineName: "Medicine",
  type: "Type",
  morning: "Morning",
  afternoon: "Afternoon",
  evening: "Evening",
  duration: "Duration (Days)",
};

export const numberOfMedicineInputRows = 2;

export const dummyPatient: Patient = {
  id: 0,
  name: "",
  gender: "",
  complaints: "",
  examination: "",
  imagingOrInvestigations: "",
  otherHistory: "",
  visitDate: new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }),
  rx: [
    {
      duration: 0,
      medicineName: "",
      occurancy: { morning: "", afternoon: "", evening: "" },
      type: "",
    },
  ],
  advice: "",
  investigationsAdvised: "",
  notes: "",
  followUpDate: new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }),
};

export const testPatientData: Patient = {
  id: 0,
  name: "Raj Kumar",
  age: 20,
  gender: "M",
  complaints:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dol adipisicing etc.",
  examination: "examine the patient and prescribe the medicine",
  imagingOrInvestigations: "X-ray, MRI, CT Scan, Blood Test, Urine Test, etc.",
  otherHistory: "Old patient, etc.",
  visitDate: new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }),
  rx: [
    {
      duration: 10,
      medicineName: "Paracetamol",
      occurancy: { morning: "1", afternoon: "0", evening: "1" },
      type: "Tablet",
    },
    {
      duration: 20,
      medicineName: "Crocin",
      occurancy: { morning: "0", afternoon: "1", evening: "1" },
      type: "Syrup",
    },
  ],
  advice: "Take rest",
  investigationsAdvised: "Blood Test, Urine Test, etc.",
  notes:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  followUpDate: new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }),
};

export const patientReviewSheetDesignValues: PatientReviewSheetDesign[] = [
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

export const patientDetailFormDesign: PatientReviewSheetDesign[] = [
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
