import { apiBaseUrl } from "@/constants/app";
import { Customer, Task, UserAccess } from "@/models/app";
import axios, { AxiosResponse } from "axios";

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

export const verifyTaskAccess = async (code: string): Promise<UserAccess> => {
  return await axios
    .get<UserAccess>(`${apiBaseUrl}/api/verify-task-access/${code}`)
    .then((res) => res.data)
    .catch((err) => err);
};

export const getCustomerQueryDetails = async (
  customerId: number
): Promise<AxiosResponse> => {
  return await axios.get(
    `${apiBaseUrl}/api/customer-control/get-query-details/${customerId}`
  );
};

export const postTask = async (task: Task): Promise<AxiosResponse> => {
  return await axios.post(
    `${apiBaseUrl}/api/customer-control/create-task`,
    task
  );
};

export const getAllQueryTasks = async (queryId: number): Promise<Task[]> => {
  return await axios
    .get<Task[]>(`${apiBaseUrl}/api/customer-control/get-all-query-tasks/${queryId}`)
    .then((res) => res.data)
    .catch((err) => err);
};
