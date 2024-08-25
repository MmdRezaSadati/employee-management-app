"use client";
import { TFCChildren } from "@/core/types";
import store from "@/stores";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";

const MainProvider: TFCChildren = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <NextUIProvider>{children}</NextUIProvider>
    </ReduxProvider>
  );
};

export default MainProvider;
