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
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import {
  PickedOrderPropsForAutocomplete,
  apiBaseUrl,
  autocompleteMap,
  orderFormData,
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
        setFc(orderFormData);
        fetchPreRequiredData().then((data) => {
          setAutocompleteLists({
            customers: data.customers,
            categories: data.categories,
            vendors: data.vendors,
          });
        });
        setIsFormControlsLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  const fetchPreRequiredData = async () => {
    const response = await axios.get<PreRequiredData>(
      apiBaseUrl + "/api/get-pre-required-data"
    );
    return response.data;
  };

  useEffect(() => {
    console.log("defaultValues", defaultValues);
  }, [defaultValues]);

  return (
    fc && (
      <div>
        {Object.entries(
          Object.groupBy(
            Object.entries(fc),
            ([key, value]) => value.section!.title
          )
        ).map(([sectionTitle, sectionEntries], sectionIndex) => (
          <Fragment key={sectionIndex}>
            <div className="grid grid-cols-3 gap-2 mt-10 first:mt-4 border border-auburn p-2 py-12 pt-8 pl-20 rounded-sm">
              {/* <h2 className="absolute font-semibold text-lg -mt-7">{sectionTitle}</h2> */}
              {sectionEntries &&
                sectionEntries.map(([key, value], ind) => {
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
          </Fragment>
        ))}
      </div>
    )
  );
};

export default FormSewing;
