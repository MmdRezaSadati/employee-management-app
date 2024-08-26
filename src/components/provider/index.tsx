"use client";
import { TFCChildren } from "@/core/types";
import store from "@/stores";
import { NextUIProvider } from "@nextui-org/react";
import { Provider as ReduxProvider } from "react-redux";

import getQueryClient from "@/core/utils/query-client.utils";
import { QueryClientProvider } from "@tanstack/react-query";

const MainProvider: TFCChildren = ({ children }) => {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <NextUIProvider>{children}</NextUIProvider>
      </ReduxProvider>
    </QueryClientProvider>
  );
};

export default MainProvider;
