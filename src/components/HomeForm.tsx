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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      setIsSubmitting(true);
      setCustomer(data);
      handleCustomerDataSubmission(data);
      postCustomer(data).then((res) => {
        if (res.status === 201) {
          alert("Customer data saved successfully!");
          setIsSubmitting(false);
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
        <form onSubmit={handleSubmit(handleSave)} className="w-full">
          <FormSewing
            defaultValues={customer}
            control={control}
            register={register}
          ></FormSewing>
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="mt-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </form>
      </header>
    </div>
  );
};

export default HomeForm;
