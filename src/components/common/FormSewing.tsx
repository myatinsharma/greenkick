import { patientKeyLabels } from "@/constants/app";
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
      {Object.entries(defaultValues)
        .filter(([ignorePropKey, _]) => ignorePropKey !== "id")
        .map(([key, value], ind) => {
          return (
            <div className="col-span-1" key={ind}>
              <InputField
                register={register}
                name={key}
                label={key}
              ></InputField>
            </div>
          );
        })}
    </div>
  );
};

export default FormSewing;
