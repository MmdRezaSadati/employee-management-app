"use client";
import cardNames from "@/core/constants/card-names";
import IconXCircle from "@/core/icons/icon-x-circle";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { Dispatch, FC, SetStateAction, useState } from "react";
import CardSelect from "./card-select";
import onAddCardSubmit from "./add-card-submit.funcion";
import BankCard from "../bank-card";
export interface IBankCard {
  cardNumber: string;
  cardName: string;
}
export interface IInvalidCard {
  cardName: boolean;
  cardNumber: boolean | string;
}
const AddCard: FC<{
  cards: IBankCard[];
  setCards: Dispatch<SetStateAction<IBankCard[]>>;
}> = ({ cards, setCards }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [card, setCard] = useState<IBankCard>({
    cardName: "",
    cardNumber: "",
  });

  const [invalidCard, setInvalidCard] = useState<IInvalidCard>({
    cardName: false,
    cardNumber: false,
  });

  return (
    <div className="w-full">
      <div className="relative flex flex-col items-center gap-2 sm:flex-row">
        <div className="relative w-64">
          {card.cardName && (
            <CardSelect
              label={card.cardName}
              onClick={() => setIsOpen(!isOpen)}
              className="absolute left-2.5 top-6 z-10 w-full cursor-pointer"
            />
          )}
          <Select
            items={cardNames.map((item) => ({ key: item, label: item }))}
            label="Bank Card"
            isOpen={isOpen}
            errorMessage="The bank card field must not be empty"
            isInvalid={invalidCard.cardName}
            onOpenChange={(open) => open !== isOpen && setIsOpen(open)}
            placeholder="Select a card"
            size="lg"
            onChange={(e) =>
              setCard((prev) => ({ ...prev, cardName: e.target.value }))
            }
            value={
              card.cardName && card.cardName !== "" ? card.cardName : undefined
            }
            className="max-w-xs">
            {(card) => (
              <SelectItem key={card.key}>
                <CardSelect label={card.label} />
              </SelectItem>
            )}
          </Select>
        </div>
        <Input
          errorMessage={
            typeof invalidCard.cardNumber === "string"
              ? invalidCard.cardNumber
              : "The bank card number must not be empty"
          }
          type="number"
          label="Bank Card number"
          placeholder="Enter the bank card number"
          className="w-64"
          maxLength={16}
          size="lg"
          value={card.cardNumber}
          minLength={1}
          onChange={(e) => {
            const value = e.target.value;
            if (value.length <= 16) {
              setCard((prev) => ({ ...prev, cardNumber: value }));
              if (value.length < 16 || value.length > 16) {
                return false;
              } else {
                setInvalidCard({ ...invalidCard, cardNumber: false });
              }
            } else {
              return false;
            }
          }}
          isInvalid={Boolean(invalidCard.cardNumber)}
        />
        <Button
          size="lg"
          color="primary"
          onClick={() =>
            onAddCardSubmit(setInvalidCard, setCard, setCards, card)
          }
          className="mb-2">
          Add card
        </Button>
      </div>

      <div className="my-4 flex w-full flex-wrap gap-4">
        {cards.map((item) => (
          <div
            className="relative w-full md:w-80"
            key={item.cardName + item.cardNumber}>
            <IconXCircle
              onClick={() => {
                setCards(
                  cards.filter((card) => {
                    return card.cardNumber !== item.cardNumber;
                  })
                );
              }}
              className="absolute right-3 top-5 cursor-pointer"
            />
            <BankCard
              cardName={item.cardName}
              className=""
              isNumberShow
              cardNumber={item.cardNumber}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddCard;
