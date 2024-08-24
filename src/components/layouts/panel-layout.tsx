import { TFCChildren } from "@/core/types";
import React from "react";
import { Header, Sidebar } from "../partials";

const PanelLayout: TFCChildren = ({ children }) => {
  return (
    <div className="flex text-black dark:text-white-dark">
      <Sidebar />
      <div className="relative h-screen w-full ltr:ml-64 rtl:mr-64 ">
        <Header />
        <main className="h-screen ">{children}</main>
      </div>
    </div>
  );
};

export default PanelLayout;
