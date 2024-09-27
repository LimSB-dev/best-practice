import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import post from "store/modules/post";

const rootReducer = combineReducers({
  post,
  // 여기에 추가하세요
});

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["post"],
};

const persistReducers = persistReducer(persistConfig, rootReducer);

export default persistReducers;
// export type RootState = ReturnType<typeof rootReducer>;
