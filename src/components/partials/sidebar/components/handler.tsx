"use client";
import { TFCChildren } from "@/core/types";
import { toggleSidebar, TThemeSelector } from "@/stores/slices/theme";
import { useDispatch, useSelector } from "react-redux";

const Handler: TFCChildren = ({ children }) => {
  const dispatch = useDispatch();
  const sidebar = useSelector<TThemeSelector>(
    (state) => state.themeSlice.sideBar
  );
  return (
    <div
      className={`${sidebar ? "w-full" : "!w-0"} fixed z-50 h-screen w-full bg-black/20 lg:relative lg:w-auto`}
      onClick={() => dispatch(toggleSidebar(false))}>
      <div
        onClick={() => dispatch(toggleSidebar(true))}
        className={`${sidebar ? "w-64 px-4" : "w-0 !p-0"} fixed top-0 flex h-screen flex-col overflow-hidden bg-white  transition-all dark:bg-black lg:w-64 lg:!px-4 lg:shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] ltr:left-0 rtl:right-0`}>
        {children}
      </div>
    </div>
  );
};

export default Handler;
