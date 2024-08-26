import EmployeeForm from "@/components/common/employee-form";
import React, { FC } from "react";
import { TUser } from "../employees/table";

const EditEmployee: FC<{
  data?: TUser;
}> = ({ data }) => {
  const onSubmit = (value: TUser) => {};
  return <EmployeeForm data={data} onSubmit={onSubmit} />;
};

export default EditEmployee;
