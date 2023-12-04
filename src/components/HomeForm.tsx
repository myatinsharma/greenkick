import React, { useEffect, useState } from "react";
import { Customer, Meal, UserAccess } from "../models/app";
import { useForm } from "react-hook-form";
import { testCustomerData, testMeal } from "@/constants/app";
import FormSewing from "./common/FormSewing";
import { postCustomer, saveData } from "@/services/customer.service";
import { customerSchema, mealsSchema } from "@/constants/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ValidateCode from "./common/ValidateCode";
import { boolean } from "zod";

type HomeFormProps = {
  handleCustomerDataSubmission: (data: Meal) => void;
};

const HomeForm = ({ handleCustomerDataSubmission }: HomeFormProps) => {
  const [meal, setMeal] = useState<Meal>(testMeal);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const customerQueryForm = React.createRef<HTMLFormElement>();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Meal>({
    defaultValues: testMeal,
    resolver: zodResolver(mealsSchema),
  });

  function handleSave(data: Meal) {
    console.log(data);
    if (isValid) {
      setIsSubmitting(true);
      setMeal(data);
      handleCustomerDataSubmission(data);
      saveData(data).then((res) => {
        console.log(data);
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
          TAC Tool
        </h3>
        <div className="grid-cols-6 hidden">Tailwind Jugaad (not visible)</div>
        <form onSubmit={handleSubmit(handleSave)} className="w-full">
          <FormSewing
            setIsFormControlsLoaded={setIsFormLoaded}
            defaultValues={meal}
            control={control}
            register={register}
          ></FormSewing>
          {errors.entrydate && <p>{errors.entrydate?.message}</p>}
          <button type="submit" className="btn btn-neutral">
            Submit
          </button>
        </form>
      </header>
    </div>
  );
};

export default HomeForm;
