import { CustomerFormData } from "@/constants/app";
import InputField from "./InputField";
import { Customer } from "@/models/app";
import { Control, UseFormRegister, useFieldArray } from "react-hook-form";

type FormSewingProps = {
  defaultValues: Customer;
  control: Control<Customer, any>;
  register: UseFormRegister<Customer>;
};

const FormSewing = ({ defaultValues, control, register }: FormSewingProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(defaultValues).map(([key, value], ind) => {
        if (CustomerFormData[key as keyof Customer].showInUI === false)
          return null;
        return (
          <div className="col-span-1" key={ind}>
            <InputField
              register={register}
              name={key}
              control={CustomerFormData[key as keyof Customer]}
            ></InputField>
          </div>
        );
      })}
    </div>
  );
};

export default FormSewing;
