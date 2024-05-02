import { apiBaseUrl } from "@/constants/app";
import { Customer, Meal, Order, Task, UserAccess } from "@/models/app";
import axios, { AxiosResponse } from "axios";

export const saveData = async (order: Order): Promise<AxiosResponse> => {
  return await axios.post(`${apiBaseUrl}/api/save-order`, order);
};

export const getAllEntries = async (): Promise<Meal[]> => {
  return await axios
    .get<Meal[]>(`${apiBaseUrl}/api/get-all-entries`)
    .then((res) => res.data)
    .catch((err) => err);
};

export const getAllOrders = async (): Promise<Order[]> => {
  return await axios
    .get<Meal[]>(`${apiBaseUrl}/api/get-all-orders`)
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
    .get<Task[]>(
      `${apiBaseUrl}/api/customer-control/get-all-query-tasks/${queryId}`
    )
    .then((res) => res.data)
    .catch((err) => err);
};

export const getAllUserTasks = async (
  code: string,
  email: string
): Promise<Task[]> => {
  return await axios
    .get<Task[]>(`${apiBaseUrl}/api/user-tasks/get-all/${code}`)
    .then((res) => res.data)
    .catch((err) => err);
};
