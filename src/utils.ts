import { Customer, CustomerWork, DemographicData } from "./models/app";

export function mapCustomerToDemoGraphicData(
  customer: Customer
): DemographicData {
  const {
    requiredworkcategory,
    requiredworksubcategory,
    notes,
    convertedintolead,
    referencesource,
    visitdate,
    ...rest
  } = customer;
  return rest;
}

export function mapCustomerToCustomerWork(customer: Customer): CustomerWork {
  const { fullname, mobile, address, age, city, email, gender, ...rest } =
    customer;
  return rest;
}