"use client";
import EmployeeForm from "@/components/common/employee-form";
import {
  useEditEmployee,
  useGetEmployeeById,
} from "@/hooks/react-query/employee.query";
import { FC } from "react";
import { IUser } from "../employees/table";

const Edit: FC<{ id: string }> = ({ id }) => {
  const { data } = useGetEmployeeById({ data: { Id: id } });
  const { mutate } = useEditEmployee();
  const onSubmit = (value: IUser) => {
    mutate({ data: value });
  };
  return <EmployeeForm data={data} onSubmit={onSubmit} />;
};

export default Edit;
