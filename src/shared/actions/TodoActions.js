import {
  CREATE_TODO,
  REMOVE_TODO,
  RENAME_TODO,
  CREATE_TASK,
  TOGGLE_TASK,
  REMOVE_TASK
} from "./types";
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

export const removeTodo = id => {
  return { type: REMOVE_TODO, payload: { id } };
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

export const toggleTask = (todoId, taskId) => {
  return { type: TOGGLE_TASK, payload: { todoId, taskId } };
};

export const removeTask = (todoId, taskId) => {
  return { type: REMOVE_TASK, payload: { todoId, taskId } };
};
