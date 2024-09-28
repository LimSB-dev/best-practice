import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  title: "",
  author: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.author = action.payload.author;
    },
    resetPost: (state) => {
      state.id = 0;
      state.title = "";
      state.author = "";
    },
  },
});

export const { setPost, resetPost } = postSlice.actions;

export default postSlice.reducer;
