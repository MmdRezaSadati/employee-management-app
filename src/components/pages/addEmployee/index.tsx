"use client";
import EmployeeForm from "@/components/common/employee-form";
import React from "react";
import { IUser } from "../employees/table";
import { useAddEmployee } from "@/hooks/react-query/employee.query";
import { toast } from "react-toastify";

const AddEmployee = () => {
  const { isPending, mutateAsync } = useAddEmployee();
  const onSubmit = (value: IUser) => {
    mutateAsync({ data: value }).then((res) =>
      toast.success(`employee name: ${res.name} added`)
    );
    toast.loading("employee is adding ...", { isLoading: isPending });
  };
  return <EmployeeForm onSubmit={onSubmit} />;
};

export default AddEmployee;
