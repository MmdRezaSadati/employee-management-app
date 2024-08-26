"use client";
import EmployeeForm from "@/components/common/employee-form";
import React from "react";
import { IUser } from "../employees/table";

const AddEmployee = () => {
  const onSubmit = (value: IUser) => {};
  return <EmployeeForm onSubmit={onSubmit} />;
};

export default AddEmployee;
