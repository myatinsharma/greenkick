import { IAggFuncParams } from "ag-grid-community";
import { Customer, CustomerWork, DemographicData } from "./models/app";
import {
  PickedOrderPropsForAutocomplete,
  autocompleteMap,
} from "./constants/app";

// export function mapCustomerToDemoGraphicData(
//   customer: Customer
// ): DemographicData {
//   const {
//     requiredworkcategory,
//     requiredworksubcategory,
//     notes,
//     convertedintolead,
//     referencesource,
//     visitdate,
//     ...rest
//   } = customer;
//   return rest;
// }

// export function mapCustomerToCustomerWork(customer: Customer): CustomerWork {
//   const { fullname, mobile, address, age, city, email, gender, ...rest } =
//     customer;
//   return rest;
// }

// export function mapCustomerFromCustomerQueryAPI(
//   apiCustomerData: any
// ): Customer {
//   const { fullname, mobile, email, age, gender, address, city } =
//     apiCustomerData.customers;

//   const {
//     id: queryid,
//     requiredworkcategory,
//     requiredworksubcategory,
//     notes,
//     convertedintolead,
//     referencesource,
//     visitdate,
//   } = apiCustomerData.customerrequirements;

//   let customer: Customer = {
//     id: apiCustomerData.customers.id,
//     queryid,
//     fullname,
//     mobile,
//     email,
//     age,
//     gender,
//     address,
//     city,
//     requiredworkcategory,
//     requiredworksubcategory,
//     notes,
//     convertedintolead,
//     referencesource,
//     visitdate,
//   };

//   return customer;
// }

export const add = (params: IAggFuncParams) => {
  let total = 0;
  params.values.forEach((value) => (total += +value));
  return total;
};

export function getAutocompleteOptions(
  key: string,
  autocompleteLists: Record<"customers" | "categories" | "vendors", any>
): string[] | undefined {
  return autocompleteMap[key as PickedOrderPropsForAutocomplete] !== undefined
    ? autocompleteLists[
        autocompleteMap[key as PickedOrderPropsForAutocomplete].list as
          | "customers"
          | "categories"
          | "vendors"
      ]
      ? (autocompleteLists[
          autocompleteMap[key as PickedOrderPropsForAutocomplete].list as
            | "customers"
            | "categories"
            | "vendors"
        ].map(
          (item: { [x: string]: any }) =>
            item[autocompleteMap[key as PickedOrderPropsForAutocomplete].key]
        ) as string[])
      : undefined
    : undefined;
}
