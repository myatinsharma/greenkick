import React, { useState } from "react";
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
import FormSewing from "./common/FormSewing";
import { postCustomer } from "@/services/customer.service";

type HomeFormProps = {
  handleCustomerDataSubmission: (data: Customer) => void;
};

const HomeForm = ({ handleCustomerDataSubmission }: HomeFormProps) => {
  const [customer, setCustomer] = useState<Customer>(dummyCustomer);
  const [rxNumberOfMedicines, setRxNumberOfMedicines] = useState<number>(
    numberOfMedicineInputRows
  );

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
      postCustomer(data).then((res) => {
        console.log(res);
      });
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
            defaultValues={customer}
            control={control}
            register={register}
          ></FormSewing>
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Submit
          </button>
        </form>
      </header>
    </div>
  );
};

export default HomeForm;
