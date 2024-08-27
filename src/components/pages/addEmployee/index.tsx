"use client";
import React from "react";
import { useAddEmployee } from "@/hooks/react-query/employee.query";
import { toast } from "react-toastify";
import { EmployeeForm } from "@/components/common";
import { IUser } from "@/components/common/employee-table";

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
