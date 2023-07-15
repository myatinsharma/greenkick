import { Customer } from "@/models/app";
import InputField from "./InputField";
import { Control, UseFormRegister, useFieldArray } from "react-hook-form";

type ArrayFieldsProps = {
  control: Control<Customer, any>;
  register: UseFormRegister<Customer>;
};

export const ArrayFields = ({ control, register }: ArrayFieldsProps) => {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "rx",
    }
  );

  return (
    <div className="col-span-1">
      {fields.map((field, index) =>
        Object.entries(field)
          .filter(([ignoreKey, _]) => ignoreKey !== "id")
          .map(([ikey, ivalue], indx) => {
            // console.log("k" + indx, ikey);
            // console.log("v" + indx, ivalue);
            if (typeof ivalue === "object") {
              console.log("object");
              return Object.entries(ivalue).map(([k, v], ind) => {
                console.log("k" + ind, k);
                console.log("v" + ind, v);
                return (
                  <InputField
                    key={k + ind}
                    register={register}
                    name={`rx.${field.id}.${ikey}.${k}`}
                    label={`${k}`}
                  ></InputField>
                );
              });
            } else {
              return (
                <InputField
                  key={ikey}
                  register={register}
                  name={`rx.${field.id}.${ikey}`}
                  label={`${ikey}`}
                ></InputField>
              );
            }
          })
      )}
    </div>
  );
};
