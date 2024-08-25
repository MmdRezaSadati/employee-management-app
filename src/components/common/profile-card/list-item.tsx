import { TFCPropsWithChildren } from "@/core/types";

const ListItem: TFCPropsWithChildren<{ title: string; className?: string }> = ({
  children,
  title,
  className,
}) => {
  return (
    <li className="mt-4 flex items-center gap-2">
      {children}
      <span className={className}>{title}</span>
    </li>
  );
};
export default ListItem;
