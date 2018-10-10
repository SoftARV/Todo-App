import { CREATE_TODO } from "./types";

export const createTodo = todo => {
  return { type: CREATE_TODO, payload: todo };
};
