/**
 * Detects the theme of the user's system
 * @returns {'dark' | 'light'} The theme of the user's system
 */
const detectTheme = () => {
  const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  return theme;
};

export { detectTheme };
