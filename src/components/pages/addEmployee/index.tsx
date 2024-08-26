"use client";
import EmployeeForm from "@/components/common/employee-form";
import React from "react";
import { TUser } from "../employees/table";

const AddEmployee = () => {
  const onSubmit = (value: TUser) => {};
  return <EmployeeForm onSubmit={onSubmit} />;
};

export default AddEmployee;
