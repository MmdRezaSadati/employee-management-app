import { TFCChildren } from "@/core/types";
import React from "react";

const PanelLayout: TFCChildren = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed top-0 z-50 h-screen w-64 shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] ltr:left-0 rtl:right-0"></div>
      <div className="relative h-screen w-full ltr:ml-64 rtl:mr-64 ">
        <header className="sticky h-14 w-full shadow-sm"></header>
        <main className="h-screen bg-gray-50 ">{children}</main>
      </div>
    </div>
  );
};

export default PanelLayout;
