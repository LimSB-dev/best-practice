import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import post from "store/modules/post";
import theme from "./theme";

const rootReducer = combineReducers({
  post,
  theme,
  // 여기에 추가하세요
});

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["post", "theme"],
};

const persistReducers = persistReducer(persistConfig, rootReducer);

export default persistReducers;
// export type RootState = ReturnType<typeof rootReducer>;
