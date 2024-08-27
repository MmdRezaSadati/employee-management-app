"use client";
 /// this component will be rendered on server by using tanstack query Hydration Boundary

import { useGetEmployeeById } from "@/hooks/react-query/employee.query";
import { FC } from "react";
import { OverviewSection, CardOverview } from "./sections";
import { ProfileCard } from "@/components/common";

const Profile: FC<{ id: string }> = ({ id }) => {
  const { data } = useGetEmployeeById({ data: { Id: id } });
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
