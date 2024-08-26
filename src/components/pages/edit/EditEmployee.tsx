"use client";
import EmployeeForm from "@/components/common/employee-form";
import React, { FC } from "react";
import { IUser } from "../employees/table";

const EditEmployee: FC<{
  data?: IUser;
}> = ({ data }) => {
  const onSubmit = (value: IUser) => {};
  return <EmployeeForm data={data} onSubmit={onSubmit} />;
};

export default EditEmployee;
