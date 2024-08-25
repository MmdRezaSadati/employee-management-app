import Profile from "@/components/pages/profile";
import { TFCParamsId } from "@/core/types";
import React from "react";

const ProfilePage: TFCParamsId = ({ params: { id } }) => {
  return <Profile id={id} />;
};

export default ProfilePage;
