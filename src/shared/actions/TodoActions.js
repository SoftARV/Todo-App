import { CREATE_TODO } from "./types";
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

export const renameTodo = (id, name) => {};
