import { CREATE_TODO, RENAME_TODO, CREATE_TASK } from "./types";
import IDGenerator from "../IDGenerator";

export const createTodo = (name, color) => {
  let todo = {
    id: IDGenerator(),
    name: name,
    color: color,
    tasks: []
  };

  return { type: CREATE_TODO, payload: todo };
};

export const renameTodo = (id, name) => {
  return { type: RENAME_TODO, payload: { id, name } };
};

export const createTask = (id, text) => {
  let task = {
    id: IDGenerator(),
    text,
    isCompleted: false
  };

  return { type: CREATE_TASK, payload: { id, task } };
};
