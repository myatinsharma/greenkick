import { IAggFuncParams } from "ag-grid-community";
import { Customer, CustomerWork, DemographicData } from "./models/app";

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

