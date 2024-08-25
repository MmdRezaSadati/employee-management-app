import { BreadCrumbs } from "@/components/common";
import EmployeesTable from "./table";

const Employees = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1>Employees</h1>
        <BreadCrumbs
          data={[
            { href: "/", label: "Home" },
            { href: "/", label: "Employees" },
          ]}
        />
      </div>
      <div className="mt-7 overflow-hidden rounded-lg bg-black-light/30 px-4 py-5 dark:bg-black-light/5">
        <EmployeesTable />
      </div>
    </div>
  );
};

export default Employees;
