export type Patient = {
  id: number;
  name: string;
  age?: number;
  gender: string;
  complaints: string;
  examination: string;
  otherHistory?: string;
  imagingOrInvestigations?: string;
  advice?: string;
  investigationsAdvised?: string;
  notes?: string;
  followUpDate?: string;
  rx: Rx[];
  visitDate?: string;
};

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

export type UnionPatientDataKeys = Patient & Rx & MedicineTime

export type PatientDataKeys = Extract<keyof Patient, string>;

export type PatientReviewSheetDesign = {
  props: PatientDataKeys[];
  children?: PatientReviewSheetDesign[];
  bList?: boolean;
};