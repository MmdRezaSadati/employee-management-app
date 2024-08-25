import { TFCChildren } from "@/core/types";
import React from "react";
import { Header, Sidebar } from "../partials";

const PanelLayout: TFCChildren = ({ children }) => {
  return (
    <div className="flex text-black dark:text-white-dark">
      <Sidebar />
      <div className="relative min-h-screen w-full lg:ltr:ml-64 lg:rtl:mr-64 ">
        <Header />
        <main className="min-h-screen px-4 py-7">{children}</main>
      </div>
    </div>
  );
};

export default PanelLayout;
