import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
import TodoReducer from "../reducers/TodoReducer";

const persistconfig = {
  key: "todo",
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistconfig, TodoReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);