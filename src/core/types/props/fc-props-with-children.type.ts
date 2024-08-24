import { FC } from "react";
import IChildren from "../common/children.interface";

type TFCPropsWithChildren<props> = FC<IChildren & props>;
export default TFCPropsWithChildren;
