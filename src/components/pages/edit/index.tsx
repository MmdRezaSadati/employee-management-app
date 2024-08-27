"use client";
/// this component will be rendered on server by using tanstack query Hydration Boundary

import { EmployeeForm } from "@/components/common";
import { IUser } from "@/components/common/employee-table";
import {
  useEditEmployee,
  useGetEmployeeById,
} from "@/hooks/react-query/employee.query";
import { FC } from "react";

const Edit: FC<{ id: string }> = ({ id }) => {
  const { data } = useGetEmployeeById({ data: { Id: id } });
  const { mutate } = useEditEmployee();
  const onSubmit = (value: IUser) => {
    mutate({ data: value });
  };
  return <EmployeeForm data={data} onSubmit={onSubmit} />;
};

export default Edit;
