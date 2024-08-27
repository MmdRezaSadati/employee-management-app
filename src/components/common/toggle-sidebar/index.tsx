"use client";
import { Badge } from "@/components/common";
import IconMenu from "@/core/icons/icon-menu";
import { toggleSidebar, TThemeSelector } from "@/stores/slices/theme";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ToggleSidebar = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector<TThemeSelector>(
    (state) => state.themeSlice.sideBar
  );
  return (
    <Badge
      onClick={() => dispatch(toggleSidebar(!sidebar))}>
      <IconMenu className="size-5" />
    </Badge>
  );
};

export default ToggleSidebar;
