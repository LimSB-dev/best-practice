import { useEffect, useMemo } from "react";
import styled from "@emotion/styled";
import { ColorTypes } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faDesktop,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import useCustomTheme from "hooks/useCustomTheme";

import {
  setThemeWhenSystemChange,
  setThemeWhenToggleClick,
} from "store/modules/theme";

import { detectTheme } from "utils/detectSystem";

import { common } from "styles/theme";

import { Mode } from "types/emotion";

interface IProps {
  buttonType: Mode;
}

const StyledThemeButton = styled.button<{
  disabled: boolean;
  theme: ColorTypes;
}>`
  color: ${(props) =>
    props.disabled ? common.colors.secondary : props.theme.color};
`;

const ThemeButton = ({ buttonType }: IProps) => {
  const dispatch = useAppDispatch();
  const theme = useCustomTheme();
  const reduxTheme = useAppSelector((state) => state.theme.theme);
  const active = useMemo<boolean>(() => {
    return reduxTheme === buttonType;
  }, [reduxTheme, buttonType]);

  let icon: IconDefinition | null = null;

  switch (buttonType) {
    case "system":
      icon = faDesktop;
      break;
    case "light":
      icon = faSun;
      break;
    case "dark":
      icon = faMoon;
      break;
  }

  const themeToggle = () => {
    dispatch(setThemeWhenToggleClick(buttonType));
  };

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      dispatch(setThemeWhenSystemChange(detectTheme()));
    });

  useEffect(() => {
    const nextTheme = reduxTheme === "system" ? detectTheme() : reduxTheme;
    document.documentElement.setAttribute("data-theme", nextTheme);
  }, [reduxTheme]);

  return (
    <StyledThemeButton disabled={active} onClick={themeToggle} theme={theme}>
      <FontAwesomeIcon icon={icon} />
    </StyledThemeButton>
  );
};

export default ThemeButton;
