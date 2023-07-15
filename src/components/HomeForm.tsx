import React, { useState } from "react";
import {
  Patient,
  PatientReviewSheetDesign,
  UnionPatientDataKeys,
} from "../models/app";
import { useFieldArray, useForm } from "react-hook-form";
import InputField from "../components/common/InputField";
import RxInput from "../components/common/RxInput";
import * as XLSX from "xlsx";
import {
  dummyPatient,
  numberOfMedicineInputRows,
  patientDetailFormDesign,
  patientKeyLabels,
  testPatientData,
} from "@/constants/app";
import { MdAdd } from "react-icons/md";
import FormSewing from "./common/FormSewing";

type HomeFormProps = {
  handlePatientDataSubmission: (data: Patient) => void;
};

const HomeForm = ({ handlePatientDataSubmission }: HomeFormProps) => {
  const [patient, setPatient] = useState<Patient>(dummyPatient);
  const [rxNumberOfMedicines, setRxNumberOfMedicines] = useState<number>(
    numberOfMedicineInputRows
  );
  const [detailFormDesign, setDetailFormDesign] = useState<
    PatientReviewSheetDesign[]
  >(patientDetailFormDesign);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Patient>({ defaultValues: dummyPatient });

  function handleSave(data: Patient) {
    console.log("control", control);

    if (isValid) {
      console.log("data", data);
      setPatient(data);
      handlePatientDataSubmission(data);
    }
  }

  function addAnotherMedicineInRx(): void {
    const xx = detailFormDesign.map((item) => {
      if (item.props[0] === "rx") {
        item.children?.push(...item.children!);
      }
      return item;
    });
    setDetailFormDesign(xx);
  }

  return (
    <div className="App">
      <header className="bg-teal-800 h-full px-32 py-6">
        <h3 className="text-white text-3xl font-semibold mb-5 decoration-green-500 underline">
        GreenKick
        </h3>
        <div className="grid-cols-6 hidden">Tailwind Jugaad</div>
        <form onSubmit={handleSubmit(handleSave)} className="w-full">
          <FormSewing defaultValues={patient} control={control} register={register}></FormSewing>
          <button
            type="submit"
            className="text-white bg-orange-500 hover:bg-orange-700 focus:ring-1 focus:outline-none focus:ring-orange-100 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </header>
    </div>
  );
};

export default HomeForm;
