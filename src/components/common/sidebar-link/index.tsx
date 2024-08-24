"use client";
import IconCaretDown from "@/core/icons/icon-caret-down";
import { ISvgAttributes } from "@/core/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const SidebarLink: FC<{
  href: string;
  linkClassName?: string;
  text: string;
  Icon?: FC<ISvgAttributes>;
}> = ({ href, linkClassName, text, Icon }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li>
      <Link
        href={href}
        className={
          `${isActive ? "bg-black/10 hover:!bg-black/10 dark:bg-[#ffffff08] dark:hover:!bg-[#ffffff08]" : ""} group dark:hover:bg--[#ffffff0f] hover:bg-black/5 mb-1 flex w-full justify-between items-center overflow-hidden whitespace-nowrap rounded-md p-2.5` +
          (linkClassName ?? "")
        }>
        <div className="flex items-center">
          {Icon && <Icon className="shrink-0 group-hover:!text-primary" />}
          <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
            {text}
          </span>
        </div>
        {!isActive && (
          <div className={"-rotate-90 rtl:rotate-90"}>
            <IconCaretDown />
          </div>
        )}
      </Link>
    </li>
  );
};

export default SidebarLink;
