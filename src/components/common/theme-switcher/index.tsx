"use client";
import IconMoon from "@/core/icons/icon-moon";
import IconSun from "@/core/icons/icon-sun";
import { getItem } from "@/core/services/local-storage/storage.services";
import changeTheme from "@/core/utils/change-theme.utils";
import { useEffect, useState } from "react";
import Badge from "../badge";

const ThemeSwitcher = () => {
  const themeStorage = getItem("theme");
  const [lightMode, setLightMode] = useState(themeStorage === "light");
  useEffect(() => {
    const themeStorage = getItem("theme");
    themeStorage === "light"
      ? changeTheme(true, setLightMode)
      : changeTheme(false, setLightMode);
  }, []);

  return (
    <>
      {lightMode ? (
        <Badge onClick={() => changeTheme(false, setLightMode)}>
          <IconSun />
        </Badge>
      ) : (
        <Badge onClick={() => changeTheme(true, setLightMode)}>
          <IconMoon />
        </Badge>
      )}
    </>
  );
};

export default ThemeSwitcher;
