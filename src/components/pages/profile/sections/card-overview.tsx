import { BankCard } from "@/components/common";
import React, { FC } from "react";
interface ICardOverviewProps {
  cards?: {
    cardNumber: string;
    cardName: string;
  }[];
}
const CardOverview: FC<ICardOverviewProps> = ({ cards }) => {
  return (
    <div className="box-border h-80  w-full overflow-hidden overflow-y-auto rounded-md bg-white text-sm  leading-6 text-slate-800 dark:bg-black-light/5 dark:text-slate-200">
      <div className="h-80 w-full p-5">
        <h6 className="mb-3 h-6 w-full text-base font-semibold leading-6">
          Card Overview
        </h6>

        <div className="flex h-56 w-full flex-col gap-3">
          {cards?.map((item) => (
            <BankCard
              key={item.cardName + item.cardNumber}
              cardName={item.cardName}
              cardNumber={item.cardNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardOverview;
