import { IUser } from "@/components/common/employee-table";
import { IIdParams, IRequestBody } from "@/core/types/common/api.interface";
import axiosInterceptorInstance from "../axios/interceptor/interceptor.axios";
import { EMPLOYEE } from "@/core/constants/api.constants";
import { toast } from "react-toastify";

export const addEmployee = async ({
  data,
}: IRequestBody<IUser>): Promise<IUser | any> => {
  try {
    return await axiosInterceptorInstance
      .post(EMPLOYEE, data)
      .then((res) => res.data);
  } catch (error) {
    toast.error("An unknown problem occurred");
  }
};

export const getEmployees: () => Promise<IUser[]> = async () => {
  return await axiosInterceptorInstance.get(EMPLOYEE).then((res) => res.data);
};
export const getEmployeeById: (
  prop: IRequestBody<IIdParams>
) => Promise<IUser | any> = async ({ data }) => {
  try {
    return await axiosInterceptorInstance
      .get(EMPLOYEE + `/${data.Id}`)
      .then((res) => res.data);
  } catch (error) {
    toast.error("An unknown problem occurred");
  }
};

export const deleteEmployee = async ({
  data,
}: IRequestBody<IIdParams>): Promise<IUser | any> => {
  try {
    return await axiosInterceptorInstance
      .delete(EMPLOYEE + `/${data.Id}`)
      .then((res) => res.data);
  } catch (error) {
    toast.error("An unknown problem occurred");
  }
};

export const editEmployee = async ({
  data,
}: IRequestBody<IUser>): Promise<IUser | any> => {
  try {
    return await axiosInterceptorInstance
      .put(EMPLOYEE + `/${data.id}`, data)
      .then((res) => res.data);
  } catch (error) {
    toast.error("An unknown problem occurred");
  }
};
