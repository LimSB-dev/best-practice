import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

// state type
export interface themeSlice {
  theme: "light" | "dark" | "system";
}

// define initial state
const initialState: themeSlice = { theme: "system" };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeWhenToggleClick(state, action) {
      state.theme = action.payload;
    },
    setThemeWhenSystemChange(state, action) {
      if (state.theme === "system") {
        document.documentElement.setAttribute("data-theme", action.payload);
      }
    },
  },
});

export const { setThemeWhenToggleClick, setThemeWhenSystemChange } =
  themeSlice.actions;

export default themeSlice.reducer;
