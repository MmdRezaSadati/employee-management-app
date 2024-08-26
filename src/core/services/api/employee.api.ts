import { IUser } from "@/components/pages/employees/table";
import { IRequestBody } from "@/core/types/common/api.interface";
import axiosInterceptorInstance from "../axios/interceptor/interceptor.axios";
import { EMPLOYEE } from "@/core/constants/api.constants";

export const addEmployee = async ({
  data,
}: IRequestBody<IUser>): Promise<IUser> => {
  console.log(axiosInterceptorInstance);
  return await axiosInterceptorInstance
    .post(EMPLOYEE, data)
    .then((res) => res.data);
};
