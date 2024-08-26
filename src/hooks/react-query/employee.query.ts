import { IUser } from "@/components/pages/employees/table";
import { EMPLOYEE } from "@/core/constants/api.constants";
import {
  addEmployee,
  deleteEmployee,
  editEmployee,
  getEmployeeById,
  getEmployees,
} from "@/core/services/api/employee.api";
import {
  IError,
  IIdParams,
  IRequestBody,
} from "@/core/types/common/api.interface";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

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

export const useGetEmployeeById = (
  props: IRequestBody<IIdParams>
): UseQueryResult<IUser> => {
  return useQuery({
    queryKey: [EMPLOYEE, "edit"],
    queryFn: () => getEmployeeById(props),
  });
};
export const useDeleteEmployee = (): UseMutationResult<
  IUser,
  AxiosError<IError>,
  IRequestBody<IIdParams>
> => {
  const queryClient: any = useQueryClient();

  return useMutation({
    mutationFn: (body) => deleteEmployee(body),
    onError: () => {
      toast.error("There was a problem deleting the Employee!");
    },
    onSuccess: () => {
      toast.success("delete the Employee is success!");
      queryClient.refetchQueries([EMPLOYEE, "list"]);
    },
  });
};

export const useEditEmployee = (): UseMutationResult<
  IUser,
  AxiosError<IError>,
  IRequestBody<IUser>
> => {
  return useMutation({
    mutationFn: (body) => editEmployee(body),
    onSuccess: () => {
      toast.success("Update the Employee is success!");
      redirect("/test");
    },
  });
};
