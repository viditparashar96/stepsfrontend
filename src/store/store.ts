import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use a storage engine like localStorage
import authSlice from "./authSlice";
import orgSlice from "./orgSlice";

const persistConfig = {
  key: "root",
  storage: storage,
};

interface RootState {
  auth: any;
  org: any;
  // TODO: add more slices here for posts
}

const rootReducer = combineReducers<RootState>({
  auth: authSlice,
  org: orgSlice,
  // TODO: add more slices here for posts
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
persistStore(store);
export default store;
