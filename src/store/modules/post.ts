import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = postSlice.actions;

export default postSlice.reducer;
