import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
interface IBankCardProps {
  cardName: string;
  cardNumber: string;
  itsPrimary?: boolean;
}
const BankCard: FC<IBankCardProps> = ({ cardName, cardNumber, itsPrimary }) => {
  return (
    <Link
      className="flex h-16 w-full cursor-pointer items-center gap-3 rounded-md border-2 border-solid border-slate-200 p-2 dark:border-slate-600"
      href="#">
      <div
        className="flex size-12 items-center justify-center rounded-md"
        style={{
          flexShrink: "0",
        }}>
        <Image
          className="size-10 max-w-full text-clip"
          width={40}
          height={40}
          alt={cardName}
          src={`/cards/${cardName.toLocaleLowerCase()}.png`}
          style={{
            overflowClipMargin: "content-box",
          }}
        />
      </div>

      <div className="h-12 w-52 grow">
        <h5 className="mb-1 h-6 w-52 text-base font-semibold leading-6">
          {cardName}
        </h5>
        <p className="h-5 w-52 leading-5 text-slate-500">
          XXXX XXXX XXXX {cardNumber.slice(12, 16)}
        </p>
      </div>

      {itsPrimary && (
        <div className="h-6 w-16">
          <span className="inline-block h-6 w-16 rounded bg-sky-100 px-3 py-1 text-xs font-medium leading-4 text-sky-500 dark:bg-sky-100/20">
            Primary
          </span>
        </div>
      )}
    </Link>
  );
};

export default BankCard;
