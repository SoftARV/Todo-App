import { CREATE_TODO, RENAME_TODO, CREATE_TASK } from "./types";
import IDGenerator from "../IDGenerator";

export const createTodo = (name, color) => {
  let todo = {
    id: IDGenerator(),
    name: name,
    color: color,
    task: []
  };

  return { type: CREATE_TODO, payload: todo };
};

export const renameTodo = (id, name) => {
  return { type: RENAME_TODO, payload: { id, name } };
};
