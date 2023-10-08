import { apiBaseUrl } from "@/constants/app";
import { User } from "@/models/app";
import axios from "axios";

export const getUsers = async (): Promise<User[]> => {
    return await axios
        .get<User[]>(`${apiBaseUrl}/api/get-all-users`)
        .then((res) => res.data)
        .catch((err) => err);
};