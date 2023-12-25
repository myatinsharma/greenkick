import { customerFormData } from "@/constants/app";
import InputField from "./InputField";
import { Customer, FormKeyControls, Meal } from "@/models/app";
import { Control, UseFormRegister, set } from "react-hook-form";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";

type FormSewingProps = {
  defaultValues: Meal;
  control: Control<Meal, any>;
  register: UseFormRegister<Meal>;
  setIsFormControlsLoaded: Dispatch<SetStateAction<boolean>>;
};

const FormSewing = ({
  defaultValues,
  control,
  register,
  setIsFormControlsLoaded,
}: FormSewingProps) => {
  const [fc, setFc] = useState<FormKeyControls>();
  useEffect(() => {
    axios
      .get("https://greenkick-git-tac-test-myatinsharma.vercel.app/api/get-app-settings")
      .then(function (response) {
        const customerFormData = JSON.parse(
          response.data[0].json
        ) as FormKeyControls;
        setFc(customerFormData);
        setIsFormControlsLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  });

  return (
    fc && (
      <div className="grid grid-cols-1 gap-2">
        {Object.entries(fc).map(([key, value], ind) => {
          if (fc[key as keyof Customer].showInUI === false) return null;
          return (
            <div className="col-span-1" key={ind}>
              <InputField
                register={register}
                name={key}
                control={fc[key as keyof Customer]}
                valueType={typeof defaultValues[key as keyof Meal]}
              ></InputField>
            </div>
          );
        })}
      </div>
    )
  );
};

export default FormSewing;
