import { TFCPropsWithChildren } from "@/core/types";
import React from "react";

const SocialItem: TFCPropsWithChildren<{ borderAndBg: string }> = ({
  children,
  borderAndBg,
}) => {
  return (
    <li className="list-item size-10">
      <button
        className={`${borderAndBg} relative flex size-10 cursor-pointer items-center justify-center rounded-full border-2 border-solid text-center font-semibold text-white`}
        style={{
          appearance: "button",
          outlineOffset: "2px",
          outlineStyle: "solid",
          outlineWidth: "2px",
        }}>
        {children}
      </button>
    </li>
  );
};

export default SocialItem;
