import { BreadCrumbs } from "@/components/common";

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
    </div>
  );
};

export default Employees;
