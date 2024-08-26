import EmployeeForm from "@/components/common/employee-form";
import { employees } from "@/core/constants/data";
import { FC } from "react";
import { TUser } from "../employees/table";

const Edit: FC<{ id?: string }> = ({ id }) => {
  const data: TUser | undefined = employees.find(
    (item) => String(item.id) === id
  );
  return <EmployeeForm data={data} />;
};

export default Edit;
