"use client";
import {
  HydrationBoundary,
  HydrationBoundaryProps,
} from "@tanstack/react-query";
import React, { FC } from "react";

const Hydrate: FC<HydrationBoundaryProps> = (props) => {
  return <HydrationBoundary {...props} />;
};

export default Hydrate;
