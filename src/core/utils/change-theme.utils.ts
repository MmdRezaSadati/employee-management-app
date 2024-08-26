import { Dispatch, SetStateAction } from "react";
import { setItem } from "../services/local-storage/storage.services";

const changeTheme = (
  value: boolean,
  setLightMode: Dispatch<SetStateAction<boolean>>
) => {
  const htmlTag = document.querySelector("html");
  setLightMode(value);
  if (htmlTag) {
    if (!value) {
      htmlTag.className = "dark";
      setItem("theme", "dark");
    } else {
      setItem("theme", "light");
      htmlTag.className = "";
    }
  }
};
export default changeTheme;
