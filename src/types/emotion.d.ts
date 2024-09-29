import "@emotion/react";

type Mode = "light" | "dark" | "system";

interface Colors {
  secondary: string;
  inheritBlack: string;
  inheritWhite: string;
  primary: string;
  error: string;
  warning: string;
  success: string;
  disable: string;
}

interface FontSize {
  h1: string;
  h2: string;
  h3: string;
  p: string;
  caption: string;
}

declare module "@emotion/react" {
  export interface CommonTypes {
    colors: Colors;
    fontSize: FontSize;
  }
  export interface ColorTypes {
    background: string;
    border: string;
    color: string;
  }
}
