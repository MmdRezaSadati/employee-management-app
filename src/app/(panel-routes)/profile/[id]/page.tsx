import { Hydrate } from "@/components/common";
import Profile from "@/components/pages/profile";
import { EMPLOYEE } from "@/core/constants/api.constants";
import { getEmployeeById } from "@/core/services/api/employee.api";
import { TFCParamsId } from "@/core/types";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import React from "react";

const ProfilePage: TFCParamsId = async ({ params: { id } }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [EMPLOYEE, "edit"],
    queryFn: () => getEmployeeById({ data: { Id: id } }),
  });
  return (
    <Hydrate state={dehydrate(queryClient)}>
      <Profile id={id} />
      
    </Hydrate>
  );
};

export default ProfilePage;
