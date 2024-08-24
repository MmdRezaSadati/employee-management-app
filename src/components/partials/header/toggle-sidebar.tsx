"use client";
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
    <button
      type="button"
      className="flex flex-none rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:text-[#d0d2d6] dark:hover:bg-dark/60 dark:hover:text-primary ltr:ml-2 rtl:mr-2"
      onClick={() => dispatch(toggleSidebar(!sidebar))}>
      <IconMenu className="size-5" />
    </button>
  );
};

export default ToggleSidebar;
