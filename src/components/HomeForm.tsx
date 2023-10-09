import React, { useEffect, useState } from "react";
import { Customer } from "../models/app";
import { useForm } from "react-hook-form";
import { testCustomerData } from "@/constants/app";
import FormSewing from "./common/FormSewing";
import { postCustomer } from "@/services/customer.service";
import { customerSchema } from "@/constants/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ValidateCode from "./common/ValidateCode";

type HomeFormProps = {
  handleCustomerDataSubmission: (data: Customer) => void;
};

const HomeForm = ({ handleCustomerDataSubmission }: HomeFormProps) => {
  const [customer, setCustomer] = useState<Customer>(testCustomerData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isActionAllowed, setIsActionAllowed] = useState<boolean>(false);
  const customerQueryForm = React.createRef<HTMLFormElement>();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Customer>({
    defaultValues: testCustomerData,
    resolver: zodResolver(customerSchema),
  });

  useEffect(() => {
    if (isActionAllowed) {
      customerQueryForm.current?.dispatchEvent(new Event("submit"));
    }
  });

  function handleSave(data: Customer) {
    if (isValid) {
      setIsSubmitting(true);
      setCustomer(data);
      handleCustomerDataSubmission(data);
      postCustomer(data).then((res) => {
        if (res.status === 201) {
          setIsSubmitting(false);
          alert("Customer data saved successfully!");
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
        <form
          ref={customerQueryForm}
          onSubmit={handleSubmit(handleSave)}
          className="w-full"
        >
          <FormSewing
            defaultValues={customer}
            control={control}
            register={register}
          ></FormSewing>
          <ValidateCode onSubmit={setIsActionAllowed}></ValidateCode>
          <button type="submit" className="hidden"></button>
        </form>
      </header>
    </div>
  );
};

export default HomeForm;
