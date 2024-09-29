import { CommonTypes, ColorTypes } from "@emotion/react";

export const common: CommonTypes = {
  colors: {
    secondary: "#888888",
    inheritBlack: "#000000",
    inheritWhite: "#ffffff",
    primary: "#162dd5",
    error: "#E76F51",
    warning: "#E9C46A",
    success: "#2A9D8F",
    disable: "#E5E5E5",
  },
  fontSize: {
    h1: "16px",
    h2: "16px",
    h3: "16px",
    p: "16px",
    caption: "12px",
  },
};

export const lightTheme: ColorTypes = {
  color: common.colors.inheritBlack,
  background: common.colors.inheritWhite,
  border: common.colors.inheritBlack,
};

export const darkTheme: ColorTypes = {
  color: common.colors.inheritWhite,
  background: common.colors.inheritBlack,
  border: common.colors.inheritWhite,
};
