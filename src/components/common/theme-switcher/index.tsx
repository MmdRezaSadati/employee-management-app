"use client";
import IconSun from "@/core/icons/icon-sun";
import React, { useEffect, useState } from "react";
import Badge from "../badge";
import IconMoon from "@/core/icons/icon-moon";
import {
  getItem,
  setItem,
} from "@/core/services/local-storage/storage.services";

const ThemeSwitcher = () => {
  const themeStorage = getItem("theme");
  const [lightMode, setLightMode] = useState(themeStorage === "light");
  const htmlTag = document.querySelector("html");
  const changeTheme = (value: boolean) => {
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
  useEffect(() => {
    const themeStorage = getItem("theme");
    themeStorage === "light" ? changeTheme(true) : changeTheme(false);
  }, []);

  return (
    <>
      {lightMode ? (
        <Badge onClick={() => changeTheme(false)}>
          <IconSun />
        </Badge>
      ) : (
        <Badge onClick={() => changeTheme(true)}>
          <IconMoon />
        </Badge>
      )}
    </>
  );
};

export default ThemeSwitcher;
