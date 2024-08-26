import { FC } from "react";
import { ISvgAttributes } from "../types";

const IconEditForm: FC<ISvgAttributes> = (props) => {
  return (
    <svg
      fill="rgb(0, 0, 0)"
      height="1em"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <g fill="none" stroke="currentColor">
        <path d="M4 22h16" fill="none" stroke="#ffffff" strokeLinecap="round" />
        <path
          d="m13.888 3.663l.742-.742a3.146 3.146 0 1 1 4.449 4.45l-.742.74m-4.449-4.448s.093 1.576 1.483 2.966s2.966 1.483 2.966 1.483m-4.449-4.45L7.071 10.48c-.462.462-.693.692-.891.947a5.2 5.2 0 0 0-.599.969c-.139.291-.242.601-.449 1.22l-.875 2.626m14.08-8.13l-6.817 6.817c-.462.462-.692.692-.947.891q-.451.352-.969.599c-.291.139-.601.242-1.22.448l-2.626.876m0 0l-.641.213a.848.848 0 0 1-1.073-1.073l.213-.641m1.501 1.5l-1.5-1.5"
          fill="none"
          stroke="#ffffff"
        />
      </g>
    </svg>
  );
};

export default IconEditForm;
