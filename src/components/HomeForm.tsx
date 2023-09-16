import React, { useState } from "react";
import { Customer } from "../models/app";
import { useForm } from "react-hook-form";
import { dummyCustomer, testCustomerData } from "@/constants/app";
import FormSewing from "./common/FormSewing";
import { postCustomer } from "@/services/customer.service";
import { schema } from "@/constants/zod";
import { zodResolver } from "@hookform/resolvers/zod";

type HomeFormProps = {
  handleCustomerDataSubmission: (data: Customer) => void;
};

const HomeForm = ({ handleCustomerDataSubmission }: HomeFormProps) => {
  const [customer, setCustomer] = useState<Customer>(testCustomerData);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Customer>({
    defaultValues: testCustomerData,
    resolver: zodResolver(schema),
  });

  function handleSave(data: Customer) {
    if (isValid) {
      setCustomer(data);
      handleCustomerDataSubmission(data);
      postCustomer(data).then((res) => {
        if (res.status === 201) {
          alert("Customer data saved successfully!");
        }
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
        <div className="w-screen h-screen bg-slate-200 absolute opacity-30 top-0 left-0 flex items-center justify-center">
          <div className="absolute text-center opacity-100 text-black">
            Wait..
          </div>
        </div>
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
