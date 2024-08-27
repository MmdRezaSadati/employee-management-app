"use client";
import React from "react";
import { useAddEmployee } from "@/core/hooks/react-query/employee.query";
import { Id, toast } from "react-toastify";
import { EmployeeForm } from "@/components/common";
import { IUser } from "@/components/common/employee-table";

const AddEmployee = () => {
  const { isPending, mutateAsync } = useAddEmployee();
  const toastId = React.useRef<Id>("null");
  const onSubmit = (value: IUser) => {
    mutateAsync({ data: value }).then((res) =>
      toast.update(toastId.current, {
        toastId: "addUser",
        autoClose: 4000,
        type: "success",
        render: `employee name: ${res.name} added`,
      })
    );
    toastId.current = toast.loading("employee is adding ...", {
      toastId: "addUser",
      isLoading: isPending,
    });
  };
  return <EmployeeForm onSubmit={onSubmit} />;
};

export default AddEmployee;
