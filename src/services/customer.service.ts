import { config } from "@/constants/app";
import { Customer } from "@/models/app";
import axios from "axios";
const apiUrl =
  process.env.NODE_ENV === "production"
    ? config.production.baseUrl
    : config.development.baseUrl; // Replace with your API base URL

let axiosPostConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    "Access-Control-Allow-Headers":
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  },
};

export const postCustomer = async (customer: Customer) => {
  await axios
    .post(`${apiUrl}/api/save-customer-query`, customer, axiosPostConfig)
    .then((res) => res.data)
    .catch((err) => err);
};

export const getCustomers = async (): Promise<Customer[]> => {
  return await axios
    .get<Customer[]>(`${apiUrl}/api/get-all-customers`)
    .then((res) => res.data)
    .catch((err) => err);
};
