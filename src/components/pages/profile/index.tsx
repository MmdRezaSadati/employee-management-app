import ProfileCard from "@/components/common/profile-card";
import { employees } from "@/core/constants/data";
import { FC } from "react";
import OverviewSection from "./overview";
import { TUser } from "../employees/table";

const Profile: FC<{ id: string }> = ({ id }) => {
  const data: TUser | undefined = employees.find(
    (item) => String(item.id) === id
  );
  return (
    <div className="flex flex-col gap-3 md:flex-row">
      <ProfileCard data={data} />
      <OverviewSection caption={data?.caption ?? ""} />
    </div>
  );
};

export default Profile;
