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

export function mapCustomerFromCustomerQueryAPI(
  apiCustomerData: any
): Customer {
  const {
    fullname,
    mobile,
    email,
    age,
    gender,
    address,
    city,
  } = apiCustomerData.customers;

  const {
    requiredworkcategory,
    requiredworksubcategory,
    notes,
    convertedintolead,
    referencesource,
    visitdate,
  } = apiCustomerData.customerrequirements;

  let customer: Customer = {
    id: apiCustomerData.customers.id,
    fullname,
    mobile,
    email,
    age,
    gender,
    address,
    city,
    requiredworkcategory,
    requiredworksubcategory,
    notes,
    convertedintolead,
    referencesource,
    visitdate,
  }

  return customer;
}