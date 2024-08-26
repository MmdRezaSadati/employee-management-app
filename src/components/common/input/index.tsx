"use client";
import { Field } from "formik";
import { ElementType, FC, InputHTMLAttributes } from "react";
type TCustomInput = FC<
  InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    component?: ElementType;
    as?: string;
  }
>;
const CustomInput: TCustomInput = ({ label, component, as, ...props }) => {
  const ComponentToRender = component ?? Field;
  return (
    <div
      className={`relative mt-[calc(0.875rem_+_10px)] flex w-72 flex-col justify-end text-sm`}>
      <div className="flex h-full flex-col">
        <div
          className={`relative inline-flex ${as === "textarea" ? "h-28" : "h-10"} min-h-[2.50rem] w-full cursor-text items-center gap-3 rounded-xl bg-zinc-100 px-3 dark:bg-zinc-800`}>
          <label className="absolute -top-6 left-0 z-20 max-w-full overflow-hidden text-ellipsis pr-2">
            {label}
          </label>
          <div className="inline-flex size-full items-center">
            <ComponentToRender
              className="no-scroll size-full py-2 bg-transparent !outline-none"
              placeholder={`Enter ${label}`}
              type="text"
              as={as}
              {...props}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomInput;
