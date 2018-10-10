import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import TodoReducer from "../reducers/TodoReducer";

const persistconfig = {
  key: "todo",
  storage
};

const persistedReducer = persistReducer(persistconfig, TodoReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
