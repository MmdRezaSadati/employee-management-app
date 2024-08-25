"use client";
import cardNames from "@/core/constants/card-names";
import IconXCircle from "@/core/icons/icon-x-circle";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";
import { Dispatch, FC, SetStateAction, useState } from "react";
import BankCard from "../bank-card";
interface IBankCard {
  cardNumber: string;
  cardName: string;
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
  const [invalidCard, setInvalidCard] = useState<{
    cardName: boolean;
    cardNumber: boolean | string;
  }>({
    cardName: false,
    cardNumber: false,
  });
  const onAddCardSumit = () => {
    let invalidCard: {
      cardName: boolean;
      cardNumber: boolean | string;
    } = {
      cardName: false,
      cardNumber: false,
    };
    if (card.cardName === "") {
      invalidCard = { ...invalidCard, cardName: true };
    } else {
      invalidCard = { ...invalidCard, cardName: false };
    }
    if (card.cardNumber === "") {
      invalidCard = { ...invalidCard, cardNumber: true };
    } else {
      invalidCard = { ...invalidCard, cardNumber: false };
    }
    console.log(card.cardNumber.length);
    if (card.cardNumber.length < 16 || card.cardNumber.length > 16) {
      invalidCard = {
        ...invalidCard,
        cardNumber: "Bank card number must be 16 digits",
      };
    } else {
      invalidCard = { ...invalidCard, cardNumber: false };
    }
    if (!invalidCard.cardNumber && !invalidCard.cardName) {
      setCards((prev) => [...prev, card]);
      setCard({ cardName: "", cardNumber: "" });
    }
    setInvalidCard(invalidCard);
  };
  return (
    <div className="w-full">
      <div className="relative flex items-center gap-2">
        <div className="relative w-80">
          {card.cardName && card.cardName !== " " && (
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="absolute left-2.5 top-6 z-10 flex w-full cursor-pointer items-center gap-3">
              <Image
                className="size-10 max-w-full text-clip"
                width={40}
                height={40}
                alt={card.cardName}
                src={`/cards/${card.cardName.toLocaleLowerCase()}.png`}
                style={{
                  overflowClipMargin: "content-box",
                }}
              />
              {card.cardName}
            </div>
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
            value={card.cardName}
            className="max-w-xs">
            {(card) => (
              <SelectItem key={card.key}>
                <div className="flex items-center gap-3">
                  <Image
                    className="size-10 max-w-full text-clip"
                    width={40}
                    height={40}
                    alt={card.label}
                    src={`/cards/${card.label.toLocaleLowerCase()}.png`}
                    style={{
                      overflowClipMargin: "content-box",
                    }}
                  />
                  {card.label}
                </div>
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
          className="w-80"
          size="lg"
          value={card.cardNumber}
          onChange={(e) =>
            setCard((prev) => ({ ...prev, cardNumber: e.target.value }))
          }
          isInvalid={Boolean(invalidCard.cardNumber)}
        />
        <Button
          size="lg"
          color="primary"
          onClick={onAddCardSumit}
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
                    return (
                      card.cardNumber !== item.cardNumber &&
                      card.cardName !== item.cardName
                    );
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
