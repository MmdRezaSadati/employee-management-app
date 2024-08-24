"use client";
import { TFCChildren } from "@/core/types";
import store from "@/stores";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";

const MainProvider: TFCChildren = ({ children }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default MainProvider;
