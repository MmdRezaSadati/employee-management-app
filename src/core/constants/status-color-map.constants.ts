import { ChipProps } from "@nextui-org/react";

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};
export default statusColorMap;
