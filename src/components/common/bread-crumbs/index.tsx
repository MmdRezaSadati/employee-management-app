import Link from "next/link";
import React, { FC } from "react";

const BreadCrumbs: FC<{ data: { label: string; href: string }[] }> = ({
  data,
}) => {
  return (
    <div className="flex">
      {data.map((item, index) =>
        index === data.length - 1 ? (
          <span key={index + item.label} className="text-black">
            {item.label}
          </span>
        ) : (
          <>
            <Link href={item.href}>{item.label}</Link>
            {">"}
          </>
        )
      )}
    </div>
  );
};

export default BreadCrumbs;
