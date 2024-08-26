import { IUser } from "@/components/pages/employees/table";
import { EMPLOYEE } from "@/core/constants/api.constants";
import { addEmployee, getEmployees } from "@/core/services/api/employee.api";
import { IError, IRequestBody } from "@/core/types/common/api.interface";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useAddEmployee = (): UseMutationResult<
  IUser,
  AxiosError<IError>,
  IRequestBody<IUser>
> => {
  return useMutation({
    mutationFn: (body) => addEmployee(body),
  });
};
export const useGetEmployees = (): UseQueryResult<IUser[]> => {
  return useQuery({
    queryKey: [EMPLOYEE, "list"],
    queryFn: getEmployees,
  });
};
