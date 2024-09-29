import { lightTheme, darkTheme } from "styles/theme";
import { useAppSelector } from "hooks/useRedux";
import { detectTheme } from "utils/detectSystem";

function useCustomTheme() {
  const theme = useAppSelector((state) => state.theme.theme);

  switch (theme) {
    case "light":
      return lightTheme;
    case "dark":
      return darkTheme;
    case "system":
      const systemTheme = detectTheme();

      switch (systemTheme) {
        case "light":
          return lightTheme;
        case "dark":
          return darkTheme;
      }
  }
}

export default useCustomTheme;
