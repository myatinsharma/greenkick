import { config } from "@/constants/app";
import { Customer } from "@/models/app";
import axios, { AxiosResponse } from "axios";
const apiBaseUrl =
  process.env.NODE_ENV === "production"
    ? config.production.baseUrl
    : config.development.baseUrl;

export const postCustomer = async (
  customer: Customer
): Promise<AxiosResponse> => {
  return await axios.post(`${apiBaseUrl}/api/save-customer-query`, customer);
};

export const getCustomers = async (): Promise<Customer[]> => {
  return await axios
    .get<Customer[]>(`${apiBaseUrl}/api/get-all-customers`)
    .then((res) => res.data)
    .catch((err) => err);
};

export const verifyTaskAccess = async (
  code: string
): Promise<AxiosResponse> => {
  return await axios.get<{ access: boolean }>(`${apiBaseUrl}/api/verify-task-access/${code}`);
};

export const getCustomerQueryDetails = async (
  customerId: number
): Promise<AxiosResponse> => {
  return await axios.get(`${apiBaseUrl}/api/customer-control/get-query-details/${customerId}`);
};
