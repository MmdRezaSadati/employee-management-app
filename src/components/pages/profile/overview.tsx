import React, { FC } from "react";

const OverviewSection: FC<{ caption: string }> = ({ caption }) => {
  return (
    <div className="box-border h-56 w-full overflow-hidden overflow-y-auto bg-white p-5 text-sm leading-[1.38rem] text-slate-800 dark:bg-black-light/5 dark:text-slate-200">
      <h6 className="mb-3 text-base font-semibold leading-6">Overview</h6>
      <p className="mb-2 text-slate-500 dark:text-slate-400">{caption}</p>
    </div>
  );
};

export default OverviewSection;
