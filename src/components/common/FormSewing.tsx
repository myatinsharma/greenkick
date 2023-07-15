import { patientKeyLabels } from "@/constants/app";
import InputField from "./InputField";
import { type } from "os";
import { Patient } from "@/models/app";
import { Control, UseFormRegister, useFieldArray } from "react-hook-form";
import { ArrayFields } from "./ArrayFields";

type FormSewingProps = {
  defaultValues: Patient;
  control: Control<Patient, any>;
  register: UseFormRegister<Patient>;
};

const FormSewing = ({ defaultValues, control, register }: FormSewingProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(defaultValues)
        .filter(([ignorePropKey, _]) => ignorePropKey !== "id")
        .map(([key, value], ind) => {
          if (typeof value === "object") {
            return (
              <ArrayFields
                key={ind}
                control={control}
                register={register}
              ></ArrayFields>
            );
          } else {
            return (
              <div className="col-span-1" key={ind}>
                <InputField
                  register={register}
                  name={key}
                  label={key}
                ></InputField>
              </div>
            );
          }
        })}
    </div>
  );
};

export default FormSewing;
