import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import videosReducer from "./videos/videosReducer";
import themeReducer from "./theme/themeReducer";
import userReducer from "./user/userReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userReducer"]
};

const rootReducer = combineReducers({
  videosReducer,
  themeReducer,
  userReducer
});

export default persistReducer(persistConfig, rootReducer);
