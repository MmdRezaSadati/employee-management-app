import { Dispatch, SetStateAction } from "react";
import { IBankCard, IInvalidCard } from "./add-card";

const onAddCardSubmit = (
  setInvalidCard: Dispatch<SetStateAction<IInvalidCard>>,
  setCard: Dispatch<SetStateAction<IBankCard>>,
  setCards: Dispatch<SetStateAction<IBankCard[]>>,
  card: IBankCard
) => {
  let invalidCard: IInvalidCard = {
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
export default onAddCardSubmit;
