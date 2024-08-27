import { Image, ImageProps } from "@nextui-org/react";
import NextImage from "next/image";
import { FC } from "react";
const ImageFallback: FC<ImageProps> = ({ fallbackSrc, ...rest }) => {
  return (
    <Image
      as={NextImage}
      fallbackSrc={fallbackSrc ?? "/logo.png"}
      {...NextImage}
    />
  );
};
export default ImageFallback;
