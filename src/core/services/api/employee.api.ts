import { IUser } from "@/components/pages/employees/table";
import { IRequestBody } from "@/core/types/common/api.interface";
import axiosInterceptorInstance from "../axios/interceptor/interceptor.axios";
import { EMPLOYEE } from "@/core/constants/api.constants";

export const addEmployee = async ({
  data,
}: IRequestBody<IUser>): Promise<IUser> => {
  return await axiosInterceptorInstance
    .post(EMPLOYEE, data)
    .then((res) => res.data);
};

export const getEmployees: () => Promise<IUser[]> = async () => {
  return await axiosInterceptorInstance.get(EMPLOYEE).then((res) => res.data);
};
