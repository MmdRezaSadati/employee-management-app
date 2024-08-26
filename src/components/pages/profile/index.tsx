import ProfileCard from "@/components/common/profile-card";
import { employees } from "@/core/constants/data";
import { FC } from "react";
import OverviewSection from "./overview";
import { IUser } from "../employees/table";
import CardOverview from "./card-overview";

const Profile: FC<{ id: string }> = ({ id }) => {
  const data: IUser | undefined = employees.find(
    (item) => String(item.id) === id
  );
  return (
    <div className="flex flex-col gap-3 md:flex-row">
      <ProfileCard data={data} />
      <div className="flex w-full flex-col gap-2">
        <OverviewSection caption={data?.caption ?? ""} />
        <CardOverview cards={data?.cards} />
      </div>
    </div>
  );
};

export default Profile;
