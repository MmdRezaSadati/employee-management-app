import ProfileCard from "@/components/common/profile-card";
import { employees } from "@/core/constants/data";
import { FC } from "react";
import OverviewSection from "./overview";
import { TUser } from "../employees/table";
import CardOverview from "./card-overview";

const Profile: FC<{ id: string }> = ({ id }) => {
  const data: TUser | undefined = employees.find(
    (item) => String(item.id) === id
  );
  return (
    <div className="flex flex-col gap-3 md:flex-row">
      <ProfileCard data={data} />
      <div className="flex w-full gap-2 flex-col">
        <OverviewSection caption={data?.caption ?? ""} />
        <CardOverview />
      </div>
    </div>
  );
};

export default Profile;
