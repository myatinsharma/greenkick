import React, { useState } from "react";
import { Customer } from "../models/app";
import { useForm } from "react-hook-form";
import { dummyCustomer, testCustomerData } from "@/constants/app";
import FormSewing from "./common/FormSewing";
import { postCustomer, verifyTaskAccess } from "@/services/customer.service";
import { customerSchema } from "@/constants/zod";
import { zodResolver } from "@hookform/resolvers/zod";

type HomeFormProps = {
  handleCustomerDataSubmission: (data: Customer) => void;
};

const HomeForm = ({ handleCustomerDataSubmission }: HomeFormProps) => {
  const [customer, setCustomer] = useState<Customer>(testCustomerData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [codeword, setCodeword] = useState<string>("");

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Customer>({
    defaultValues: testCustomerData,
    resolver: zodResolver(customerSchema),
  });

  function handleSave(data: Customer) {
    if (isValid) {
      setIsSubmitting(true);
      setCustomer(data);
      handleCustomerDataSubmission(data);
      verifyTaskAccess(codeword).then((res) => {
        if (res.status === 200) {
          if (res.data.access === true) {
            postCustomer(data).then((res) => {
              if (res.status === 201) {
                setIsSubmitting(false);
                alert("Customer data saved successfully!");
              }
            });
          } else {
            setIsSubmitting(false);
            alert("Enter valid code");
          }
        }
      });
    }
  }

  return (
    <div className="App">
      <header className="bg-teal-700 px-32 py-6">
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
          <input
            type="text"
            placeholder="code"
            value={codeword}
            onChange={(e) => setCodeword(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          ></input>
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="btn btn-primary mt-4 ml-4"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </form>
      </header>
    </div>
  );
};

export default HomeForm;
