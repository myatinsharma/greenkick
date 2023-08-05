import { Customer, CustomerWork, DemographicData } from "./models/app";

export function mapCustomerToDemoGraphicData(
  customer: Customer
): DemographicData {
  const {
    requiredWorkCategory,
    requiredWorkSubCategory,
    notes,
    convertedIntoLead,
    referenceSource,
    visitDate,
    ...rest
  } = customer;
  return rest;
}

export function mapCustomerToCustomerWork(customer: Customer): CustomerWork {
  const { fullname, mobile, address, age, city, email, gender, ...rest } =
    customer;
  return rest;
}
