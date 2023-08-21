import { Customer } from "@/models/app";
import axios from "axios";
const BASE_URL = "http://localhost:3000"; // Replace with your API base URL

export const postCustomer = async (customer: Customer) => {
  await axios
    .post(`${BASE_URL}/api/save-customer-query`, customer)
    .then((res) => res.data)
    .catch((err) => err);
};

export const getCustomers = async (): Promise<Customer[]> => {
  return await axios
    .get<Customer[]>(`${BASE_URL}/api/get-all-customers`)
    .then((res) => res.data)
    .catch((err) => err);
};
