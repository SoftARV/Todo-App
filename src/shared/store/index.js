import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
import TodoReducer from "../reducers/TodoReducer";
import NoteReducer from "../reducers/NoteReducer";

const persistconfig = {
  key: "root",
  storage: AsyncStorage
};

const persistedReducer = persistReducer(
  persistconfig,
  combineReducers({ todo: TodoReducer, note: NoteReducer })
);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
