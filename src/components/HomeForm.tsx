import React, { useEffect, useState } from "react";
import {
  Customer,
  CustomerReviewSheetDesign,
  UnionCustomerDataKeys,
} from "../models/app";
import { useFieldArray, useForm } from "react-hook-form";
import {
  dummyCustomer,
  numberOfMedicineInputRows,
  testCustomerData,
} from "@/constants/app";
import { MdAdd } from "react-icons/md";
import FormSewing from "./common/FormSewing";
import axios from "axios";

type HomeFormProps = {
  handleCustomerDataSubmission: (data: Customer) => void;
};

const HomeForm = ({ handleCustomerDataSubmission }: HomeFormProps) => {
  const [patient, setCustomer] = useState<Customer>(dummyCustomer);
  const [rxNumberOfMedicines, setRxNumberOfMedicines] = useState<number>(
    numberOfMedicineInputRows
  );

  useEffect(() => {
    axios.get('http://localhost:3000/api/get-app-settings')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
    });
  }, []);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Customer>({ defaultValues: dummyCustomer });

  function handleSave(data: Customer) {
    console.log("control", control);

    if (isValid) {
      console.log("data", data);
      setCustomer(data);
      handleCustomerDataSubmission(data);
    }
  }

  return (
    <div className="App">
      <header className="bg-teal-700 h-screen px-32 py-6">
        <h3 className="text-white text-3xl font-semibold mb-5 decoration-green-500 underline">
          GreenKick
        </h3>
        <div className="grid-cols-6 hidden">Tailwind Jugaad</div>
        <form onSubmit={handleSubmit(handleSave)} className="w-full">
          <FormSewing
            defaultValues={patient}
            control={control}
            register={register}
          ></FormSewing>
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
