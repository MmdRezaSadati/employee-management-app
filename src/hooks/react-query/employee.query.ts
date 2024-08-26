import { IUser } from "@/components/pages/employees/table";
import { addEmployee } from "@/core/services/api/employee.api";
import { IError, IRequestBody } from "@/core/types/common/api.interface";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
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
