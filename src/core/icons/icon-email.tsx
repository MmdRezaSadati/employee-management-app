import { FC } from "react";
import { ISvgAttributes } from "../types";

const IconEmail: FC<ISvgAttributes> = (props) => {
  return (
    <svg
      fill="none"
      height="18"
      style={{
        flexShrink: "0",
      }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        className="opacity-50"
        d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
        fill="none"
        opacity="0.5"
        stroke="#888ea8"
      />
      <path
        d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8"
        fill="none"
        stroke="#888ea8"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IconEmail;
