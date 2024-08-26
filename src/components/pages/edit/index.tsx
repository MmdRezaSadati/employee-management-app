import { employees } from "@/core/constants/data";
import { FC } from "react";
import { IUser } from "../employees/table";
import EditEmployee from "./EditEmployee";

const Edit: FC<{ id?: string }> = ({ id }) => {
  const data: IUser | undefined = employees.find(
    (item) => String(item.id) === id
  );
  return <EditEmployee data={data} />;
};

export default Edit;
