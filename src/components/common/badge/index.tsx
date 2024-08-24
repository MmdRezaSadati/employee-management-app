import { TFCPropsWithChildren } from "@/core/types";
import { ElementType } from "react";

const Badge: TFCPropsWithChildren<{ component?: ElementType } & any> = ({
  children,
  component,
  ...props
}) => {
  const ComponentToRender = component ?? "span";
  return (
    <ComponentToRender
      className="block rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
      {...props}>
      {children}
    </ComponentToRender>
  );
};

export default Badge;
