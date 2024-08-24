import PanelLayout from "@/components/layouts/panel-layout";
import { TFCChildren } from "@/core/types";
import React from "react";

const LayoutPanel: TFCChildren = ({ children }) => {
  return <PanelLayout>{children}</PanelLayout>;
};

export default LayoutPanel;
