import InputField from "./InputField";
import {
  Customer,
  FormKeyControls,
  ItemCategory,
  Meal,
  Order,
  PreRequiredData,
  Vendor,
} from "@/models/app";
import { Control, UseFormRegister, set } from "react-hook-form";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import {
  PickedOrderPropsForAutocomplete,
  autocompleteMap,
} from "@/constants/app";
import { getAutocompleteOptions } from "@/utils";

type FormSewingProps = {
  defaultValues: Order;
  control: Control<Order, any>;
  register: UseFormRegister<Order>;
  setIsFormControlsLoaded: Dispatch<SetStateAction<boolean>>;
};

const FormSewing = ({
  defaultValues,
  control,
  register,
  setIsFormControlsLoaded,
}: FormSewingProps) => {
  const [fc, setFc] = useState<FormKeyControls>();
  const [autocompleteLists, setAutocompleteLists] = useState<
    Record<"customers" | "categories" | "vendors", any>
  >({} as Record<"customers" | "categories" | "vendors", any>);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/get-app-settings")
      .then(function (response) {
        const customerFormData = JSON.parse(
          response.data[0].json
        ) as FormKeyControls;
        setFc(customerFormData);
        getAllCustomersFullname().then((data) => {
          setAutocompleteLists({
            customers: data.customers,
            categories: data.categories,
            vendors: data.vendors,
          });
          console.log(data);
        });
        setIsFormControlsLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  const getAllCustomersFullname = async () => {
    const response = await axios.get<PreRequiredData>(
      "http://localhost:3000/api/get-pre-required-data"
    );
    return response.data;
  };

  return (
    fc && (
      <div className="grid grid-cols-3 gap-2">
        {Object.entries(fc).map(([key, value], ind) => {
          if (fc[key as keyof Order].showInUI === false) return null;
          return (
            <div className="col-span-1" key={ind}>
              <InputField
                register={register}
                name={key}
                control={fc[key as keyof Order]}
                valueType={typeof defaultValues[key as keyof Order]}
                autocompleteData={getAutocompleteOptions(
                  key,
                  autocompleteLists
                )}
              ></InputField>
            </div>
          );
        })}
      </div>
    )
  );
};

export default FormSewing;
