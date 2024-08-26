import { FC, MouseEventHandler } from "react";
import ImageFallback from "../image-with-fallback";
interface ICardSelect {
  label: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
const CardSelect: FC<ICardSelect> = ({ label, className, onClick }) => {
  return (
    <div
      className={`${className ?? ""} flex items-center gap-3`}
      onClick={onClick}>
      <ImageFallback
        className="size-10 max-w-full text-clip"
        width={40}
        height={40}
        alt={label}
        src={`/cards/${label.toLocaleLowerCase()}.png`}
        style={{
          overflowClipMargin: "content-box",
        }}
      />
      {label}
    </div>
  );
};

export default CardSelect;
