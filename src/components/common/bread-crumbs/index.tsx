import Link from "next/link";
import React, { FC } from "react";

const BreadCrumbs: FC<{ data: { label: string; href: string }[] }> = ({
  data,
}) => {
  return (
    <div className="flex gap-2">
      {data.map((item, index) =>
        index === data.length - 1 ? (
          <span key={index + item.label}>{item.label}</span>
        ) : (
          <>
            <Link
              href={item.href}
              className="text-black/50 dark:text-white-dark/50">
              {item.label}
            </Link>
            {">"}
          </>
        )
      )}
    </div>
  );
};

export default BreadCrumbs;
